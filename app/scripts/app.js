var app = angular
  .module("app-todo", [
    "ngRoute"
  ])
  .config(function($routeProvider) {
    $routeProvider.when("/", {
      templateUrl: "views/login-template/login-template.html",
      controller: "LoginController"
    });
    $routeProvider.when("/user", {
      templateUrl: "views/user-template/user-template.html",
      controller: "UserController"
    });
    $routeProvider.otherwise({ redirectTo: "/" });
  });
