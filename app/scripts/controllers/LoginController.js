app.controller("LoginController", function LoginController(
  $scope,
  $http,
  $location
) {
  $scope.signIn = function() {
    $http.get("http://ip-api.com/json/").then(function(response) {
      var data = response.data.city;
      if (data[data.length - 1] === "’") {
        data = data.slice(0, -1);
      }
      sessionStorage.setItem("city", data);
      sessionStorage.setItem("user", $scope.userName);
      sessionStorage.setItem("token", '62ea29378f635e4a2d18ffc62c0cc130');
      $location.path("user");
    });
  };
});
