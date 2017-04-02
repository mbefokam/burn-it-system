"use strict";
(function () {
    angular.module("burnIt.profile").controller("ProfileDietPlan", ["CommonSvc", "$location", "meanData","$uibModal","$http",ProfileDietPlan]);

    function ProfileDietPlan(CommonSvc, $location, meanData, $uibModal,$http) {
        var vm = this;
        vm.route = route;
        var userData;
        var meal = [];
        var diet = [];
        (function () {
            
            meanData.getProfile().then(function (data) {
                
                
                    if(data.data.userObject.deit.length == 1){
                  $http.get('../../documents/objects/weekObject.json').then(function (response) {
                diet = response.data;
                });  
                }else{
                userData = data.data.userObject;
                diet = data.data.userObject.deit[1];
                vm.mondayCal = calculateCal (diet.monday);
                vm.tuesadayCal = calculateCal (diet.tuesday);
                vm.wednesdayCal = calculateCal (diet.wednesday);
                vm.thursdayCal = calculateCal (diet.thursday);
                vm.fridayCal = calculateCal (diet.friday);
                vm.saturdayCal = calculateCal (diet.saturday);
                vm.sundayCal = calculateCal (diet.sunday);
                }  
                
               
            });
        })();

        function route(param) {
            switch (param) {
            case 'MBF':
                 meal = diet.monday.breakfast;  
                 var modalInstance = $uibModal.open({
                    templateUrl: "userprofile/views/dailyFood.html",
                    controller: "PreviewCtrl",
                    controllerAs: "vm",
                    size: 'lg',
                    resolve: {
                        callerData: function () {
                            return {
                                "mealArray": meal
                            };
                        }
                    }
                });    
                    
                break;
            case 'MFS':
                meal = diet.monday.first_snack;  
                 var modalInstance = $uibModal.open({
                    templateUrl: "userprofile/views/dailyFood.html",
                    controller: "PreviewCtrl",
                    controllerAs: "vm",
                    size: 'lg',
                    resolve: {
                        callerData: function () {
                            return {
                                "mealArray": meal
                            };
                        }
                    }
                });
                break;
            case 'ML':
                    meal = diet.monday.lunch;  
                 var modalInstance = $uibModal.open({
                    templateUrl: "userprofile/views/dailyFood.html",
                    controller: "PreviewCtrl",
                    controllerAs: "vm",
                    size: 'lg',
                    resolve: {
                        callerData: function () {
                            return {
                                "mealArray": meal
                            };
                        }
                    }
                });
                break;
            case 'MSB':
                    meal = diet.monday.second_snack;  
                 var modalInstance = $uibModal.open({
                    templateUrl: "userprofile/views/dailyFood.html",
                    controller: "PreviewCtrl",
                    controllerAs: "vm",
                    size: 'lg',
                    resolve: {
                        callerData: function () {
                            return {
                                "mealArray": meal
                            };
                        }
                    }
                });
                break;
            case 'MD':
                    meal = diet.monday.diner;  
                 var modalInstance = $uibModal.open({
                    templateUrl: "userprofile/views/dailyFood.html",
                    controller: "PreviewCtrl",
                    controllerAs: "vm",
                    size: 'lg',
                    resolve: {
                        callerData: function () {
                            return {
                                "mealArray": meal
                            };
                        }
                    }
                });
                break;
            case 'TBF':
                    meal = diet.tuesday.breakfast;  
                 var modalInstance = $uibModal.open({
                    templateUrl: "userprofile/views/dailyFood.html",
                    controller: "PreviewCtrl",
                    controllerAs: "vm",
                    size: 'lg',
                    resolve: {
                        callerData: function () {
                            return {
                                "mealArray": meal
                            };
                        }
                    }
                });
                break;
            case 'TFS':
                    meal = diet.tuesday.first_snack;  
                 var modalInstance = $uibModal.open({
                    templateUrl: "userprofile/views/dailyFood.html",
                    controller: "PreviewCtrl",
                    controllerAs: "vm",
                    size: 'lg',
                    resolve: {
                        callerData: function () {
                            return {
                                "mealArray": meal
                            };
                        }
                    }
                });
                break;
            case 'TL':
                       meal = diet.tuesday.lunch;  
                 var modalInstance = $uibModal.open({
                    templateUrl: "userprofile/views/dailyFood.html",
                    controller: "PreviewCtrl",
                    controllerAs: "vm",
                    size: 'lg',
                    resolve: {
                        callerData: function () {
                            return {
                                "mealArray": meal
                            };
                        }
                    }
                });
                break;
            case 'TSB':
                       meal = diet.tuesday.second_snack;  
                 var modalInstance = $uibModal.open({
                    templateUrl: "userprofile/views/dailyFood.html",
                    controller: "PreviewCtrl",
                    controllerAs: "vm",
                    size: 'lg',
                    resolve: {
                        callerData: function () {
                            return {
                                "mealArray": meal
                            };
                        }
                    }
                });
                break;
            case 'TD':
                       meal = diet.tuesday.diner;  
                 var modalInstance = $uibModal.open({
                    templateUrl: "userprofile/views/dailyFood.html",
                    controller: "PreviewCtrl",
                    controllerAs: "vm",
                    size: 'lg',
                    resolve: {
                        callerData: function () {
                            return {
                                "mealArray": meal
                            };
                        }
                    }
                });
                break;
            case 'WBF':
                       meal = diet.wednesday.breakfast;  
                 var modalInstance = $uibModal.open({
                    templateUrl: "userprofile/views/dailyFood.html",
                    controller: "PreviewCtrl",
                    controllerAs: "vm",
                    size: 'lg',
                    resolve: {
                        callerData: function () {
                            return {
                                "mealArray": meal
                            };
                        }
                    }
                });
                break;
            case 'WFS':
                      meal = diet.wednesday.first_snack;  
                 var modalInstance = $uibModal.open({
                    templateUrl: "userprofile/views/dailyFood.html",
                    controller: "PreviewCtrl",
                    controllerAs: "vm",
                    size: 'lg',
                    resolve: {
                        callerData: function () {
                            return {
                                "mealArray": meal
                            };
                        }
                    }
                });
                break;
            case 'WL':
                    meal = diet.wednesday.lunch;  
                 var modalInstance = $uibModal.open({
                    templateUrl: "userprofile/views/dailyFood.html",
                    controller: "PreviewCtrl",
                    controllerAs: "vm",
                    size: 'lg',
                    resolve: {
                        callerData: function () {
                            return {
                                "mealArray": meal
                            };
                        }
                    }
                });
                break;
            case 'WSB':
                          meal = diet.wednesday.second_snack;  
                 var modalInstance = $uibModal.open({
                    templateUrl: "userprofile/views/dailyFood.html",
                    controller: "PreviewCtrl",
                    controllerAs: "vm",
                    size: 'lg',
                    resolve: {
                        callerData: function () {
                            return {
                                "mealArray": meal
                            };
                        }
                    }
                });
                break;
            case 'WD':
                          meal = diet.wednesday.diner;  
                 var modalInstance = $uibModal.open({
                    templateUrl: "userprofile/views/dailyFood.html",
                    controller: "PreviewCtrl",
                    controllerAs: "vm",
                    size: 'lg',
                    resolve: {
                        callerData: function () {
                            return {
                                "mealArray": meal
                            };
                        }
                    }
                });
                break;
            case 'THBF':
                          meal = diet.thursday.breakfast;  
                 var modalInstance = $uibModal.open({
                    templateUrl: "userprofile/views/dailyFood.html",
                    controller: "PreviewCtrl",
                    controllerAs: "vm",
                    size: 'lg',
                    resolve: {
                        callerData: function () {
                            return {
                                "mealArray": meal
                            };
                        }
                    }
                });
                break;
            case 'THFS':
                    meal = diet.thursday.first_snack;  
                 var modalInstance = $uibModal.open({
                    templateUrl: "userprofile/views/dailyFood.html",
                    controller: "PreviewCtrl",
                    controllerAs: "vm",
                    size: 'lg',
                    resolve: {
                        callerData: function () {
                            return {
                                "mealArray": meal
                            };
                        }
                    }
                });
                break;
            case 'THL':
                    meal = diet.thursday.lunch;  
                 var modalInstance = $uibModal.open({
                    templateUrl: "userprofile/views/dailyFood.html",
                    controller: "PreviewCtrl",
                    controllerAs: "vm",
                    size: 'lg',
                    resolve: {
                        callerData: function () {
                            return {
                                "mealArray": meal
                            };
                        }
                    }
                });
                break;
            case 'THSB':
                    meal = diet.thursday.second_snack;  
                 var modalInstance = $uibModal.open({
                    templateUrl: "userprofile/views/dailyFood.html",
                    controller: "PreviewCtrl",
                    controllerAs: "vm",
                    size: 'lg',
                    resolve: {
                        callerData: function () {
                            return {
                                "mealArray": meal
                            };
                        }
                    }
                });
                break;
            case 'THD':
                    meal = diet.thursday.diner;  
                 var modalInstance = $uibModal.open({
                    templateUrl: "userprofile/views/dailyFood.html",
                    controller: "PreviewCtrl",
                    controllerAs: "vm",
                    size: 'lg',
                    resolve: {
                        callerData: function () {
                            return {
                                "mealArray": meal
                            };
                        }
                    }
                });
                break;
            case 'FBF':
                    meal = diet.friday.breakfast; //getMeal(userData.deit[1].friday.breakfast);  
                 var modalInstance = $uibModal.open({
                    templateUrl: "userprofile/views/dailyFood.html",
                    controller: "PreviewCtrl",
                    controllerAs: "vm",
                    size: 'lg',
                    resolve: {
                        callerData: function () {
                            return {
                                "mealArray": meal
                            };
                        }
                    }
                });
                break;
            case 'FFS':
                    meal = diet.friday.first_snack;  
                 var modalInstance = $uibModal.open({
                    templateUrl: "userprofile/views/dailyFood.html",
                    controller: "PreviewCtrl",
                    controllerAs: "vm",
                    size: 'lg',
                    resolve: {
                        callerData: function () {
                            return {
                                "mealArray": meal
                            };
                        }
                    }
                });
                break;
            case 'FL':
                    meal = diet.friday.lunch;  
                 var modalInstance = $uibModal.open({
                    templateUrl: "userprofile/views/dailyFood.html",
                    controller: "PreviewCtrl",
                    controllerAs: "vm",
                    size: 'lg',
                    resolve: {
                        callerData: function () {
                            return {
                                "mealArray": meal
                            };
                        }
                    }
                });
                break;
            case 'FSB':
                    meal = diet.friday.second_snack;  
                 var modalInstance = $uibModal.open({
                    templateUrl: "userprofile/views/dailyFood.html",
                    controller: "PreviewCtrl",
                    controllerAs: "vm",
                    size: 'lg',
                    resolve: {
                        callerData: function () {
                            return {
                                "mealArray": meal
                            };
                        }
                    }
                });
                break;
            case 'FD':
                    meal = diet.friday.diner;  
                 var modalInstance = $uibModal.open({
                    templateUrl: "userprofile/views/dailyFood.html",
                    controller: "PreviewCtrl",
                    controllerAs: "vm",
                    size: 'lg',
                    resolve: {
                        callerData: function () {
                            return {
                                "mealArray": meal
                            };
                        }
                    }
                });
                break;
            case 'SBF':
                    meal = diet.saturday.breakfast;  
                 var modalInstance = $uibModal.open({
                    templateUrl: "userprofile/views/dailyFood.html",
                    controller: "PreviewCtrl",
                    controllerAs: "vm",
                    size: 'lg',
                    resolve: {
                        callerData: function () {
                            return {
                                "mealArray": meal
                            };
                        }
                    }
                });
                break;
            case 'SFS':
                    meal = diet.saturday.first_snack;  
                 var modalInstance = $uibModal.open({
                    templateUrl: "userprofile/views/dailyFood.html",
                    controller: "PreviewCtrl",
                    controllerAs: "vm",
                    size: 'lg',
                    resolve: {
                        callerData: function () {
                            return {
                                "mealArray": meal
                            };
                        }
                    }
                });
                break;
            case 'SL':
                    meal = diet.saturday.lunch;  
                 var modalInstance = $uibModal.open({
                    templateUrl: "userprofile/views/dailyFood.html",
                    controller: "PreviewCtrl",
                    controllerAs: "vm",
                    size: 'lg',
                    resolve: {
                        callerData: function () {
                            return {
                                "mealArray": meal
                            };
                        }
                    }
                });
                break;
            case 'SSB':
                    meal = diet.saturday.second_snack;  
                 var modalInstance = $uibModal.open({
                    templateUrl: "userprofile/views/dailyFood.html",
                    controller: "PreviewCtrl",
                    controllerAs: "vm",
                    size: 'lg',
                    resolve: {
                        callerData: function () {
                            return {
                                "mealArray": meal
                            };
                        }
                    }
                });
                break;
            case 'SD':
                    meal = diet.saturday.diner;  
                 var modalInstance = $uibModal.open({
                    templateUrl: "userprofile/views/dailyFood.html",
                    controller: "PreviewCtrl",
                    controllerAs: "vm",
                    size: 'lg',
                    resolve: {
                        callerData: function () {
                            return {
                                "mealArray": meal
                            };
                        }
                    }
                });
                break;
            case 'SUBF':
                    meal = diet.sunday.breakfast;  
                 var modalInstance = $uibModal.open({
                    templateUrl: "userprofile/views/dailyFood.html",
                    controller: "PreviewCtrl",
                    controllerAs: "vm",
                    size: 'lg',
                    resolve: {
                        callerData: function () {
                            return {
                                "mealArray": meal
                            };
                        }
                    }
                });
                break;
            case 'SUFS':
                    meal = diet.sunday.first_snack;  
                 var modalInstance = $uibModal.open({
                    templateUrl: "userprofile/views/dailyFood.html",
                    controller: "PreviewCtrl",
                    controllerAs: "vm",
                    size: 'lg',
                    resolve: {
                        callerData: function () {
                            return {
                                "mealArray": meal
                            };
                        }
                    }
                });
                break;
            case 'SUL':
                    meal = diet.sunday.lunch;  
                 var modalInstance = $uibModal.open({
                    templateUrl: "userprofile/views/dailyFood.html",
                    controller: "PreviewCtrl",
                    controllerAs: "vm",
                    size: 'lg',
                    resolve: {
                        callerData: function () {
                            return {
                                "mealArray": meal
                            };
                        }
                    }
                });
                break;
            case 'SUSB':
                    meal = diet.sunday.second_snack;  
                 var modalInstance = $uibModal.open({
                    templateUrl: "userprofile/views/dailyFood.html",
                    controller: "PreviewCtrl",
                    controllerAs: "vm",
                    size: 'lg',
                    resolve: {
                        callerData: function () {
                            return {
                                "mealArray": meal
                            };
                        }
                    }
                });
                break;
            case 'SUD':
                    meal = diet.sunday.diner ;  
                 var modalInstance = $uibModal.open({
                    templateUrl: "userprofile/views/dailyFood.html",
                    controller: "PreviewCtrl",
                    controllerAs: "vm",
                    size: 'lg',
                    resolve: {
                        callerData: function () {
                            return {
                                "mealArray": meal
                            };
                        }
                    }
                });
                break;
            case 'back':
                $location.path('/profile');
                break;
            }
        }
        
        function getMeal(mealDay){
            var arrMeal = [];
            arrMeal = meal;
            var mealArray
            
            if(arrMeal.length == 0){
                console.log("IT PASSED HERE");
            }else {
                mealArray = arrMeal;
            }
            return mealArray;
        }
        
        
        function calculateCal ( day){
            var totalCal;
             var breakfastCal = 0;
             var firstCal = 0;
             var lunchCal = 0;
             var secondCal = 0;
             var dinerCal = 0;
             
            for (var i= 0; i< day.breakfast.length; i++){
                breakfastCal = breakfastCal + day.breakfast[i].numberofCal;
            }
            for (var i= 0; i< day.first_snack.length; i++){
                firstCal = firstCal + day.first_snack[i].numberofCal;
            }
            for (var i= 0; i< day.lunch.length; i++){
                lunchCal = lunchCal + day.lunch[i].numberofCal;
            }
            for (var i= 0; i< day.second_snack.length; i++){
                secondCal = secondCal + day.second_snack[i].numberofCal;
            }
            for (var i= 0; i< day.diner.length; i++){
                dinerCal = dinerCal + day.diner[i].numberofCal;
            }
            
            totalCal = breakfastCal +  firstCal + lunchCal + secondCal + dinerCal;
            
            return totalCal;
        }

    }
})();