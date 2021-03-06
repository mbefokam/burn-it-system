"use strict";
(function () {
    angular.module("burnIt.profile").controller("ProfileNutritionists", ["CommonSvc", "$location", "meanData", ProfileNutritionists]);

    function ProfileNutritionists(CommonSvc, $location, meanData) {
        var vm = this;
        vm.route = route;
        var userData;
        vm.nutritionists;
        var nutritionistArrqy = [];
        (function () {
            
            meanData.getProfile().then(function (data) {
                
               vm.nutritionists = data.data.userObject.nutritionists;
               
            });
        })();

        function route(param) {
            switch (param) {
            case 'profile':
                $location.path('/profile');
                break;
            }
         }
    }
})();