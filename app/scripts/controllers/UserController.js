app.controller("UserController", function UserController(
  $scope,
  $http,
  $location,
  $uibModal
) {
  $scope.username = sessionStorage.getItem("user");
  $scope.weather = {
    currentTemp: 0,
    currentDescription: undefined
  };

  $scope.todoList;
  if ($scope.username) {
    $scope.username = sessionStorage.getItem("user");
    $scope.userCity = sessionStorage.getItem("city");
    $scope.token = sessionStorage.getItem("token");
    var link = "http://api.openweathermap.org/data/2.5/weather";
    $http
      .get(
        `${link}?q=${$scope.userCity}&lang=ru&units=metric&appid=${$scope.token}`
      )
      .then(function(response) {
        $scope.weather = {
          currentTemp: String(response.data.main.temp),
          currentDescription: response.data.weather[0].description
        };
        $scope.checkTempType();
        $scope.getToDoList();
      });
  } else {
    $location.path("");
  }

  $scope.checkTempType = function() {
    if ($scope.weather.currentTemp[0] !== "-") {
      $scope.weather.currentTemp = $scope.weather.currentTemp.replace(/^/, "+");
    }
  };

  $scope.getToDoList = function() {
    $http
      .get(
        "https://my-json-server.typicode.com/alexandra-osmakova/fake-db/posts/"
      )
      .then(function(response) {
        $scope.todoList = response.data;
      });
  };

  $scope.openFullInfo = function(item, mode) {
    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: "views/shared/modal.html",
      controller: "ModalController",
      resolve: {
        items: function() {
          return {
            data: item,
            mode: mode
          };
        }
      }
    });

    modalInstance.result.then(
      function(addedItem) {
        if (mode) {
          $http
            .post(
              "https://my-json-server.typicode.com/alexandra-osmakova/fake-db/posts/",
              addedItem
            )
            .then(() => $scope.getToDoList());
        }
      },
      function() {}
    );
  };
});
