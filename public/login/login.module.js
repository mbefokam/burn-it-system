(function () {
    "use strict";
    angular.module("burnIt.login", ["ngRoute"])
        .config(["$routeProvider", function ($routeProvider) {
            $routeProvider.when("/login", {
                templateUrl: "login/views/login.html",
                controller: "LoginCtrl",
                controllerAs: "vm"
            });
            $routeProvider.when("/register", {
                templateUrl: "login/views/signup.html",
                controller: "SignupCtrl",
                controllerAs: "vm"
            });
        }])
})();
