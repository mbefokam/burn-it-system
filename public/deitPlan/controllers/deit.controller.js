"use strict";
(function () {
    angular.module("burnIt.deitplan").controller("DeitCtrl", ["CommonSvc", "$location", "$http", "$uibModal", DeitCtrl]);

    function DeitCtrl(CommonSvc, $location, $http, $uibModal) {
        var vm = this;
        vm.route = route;
        vm.numberOfCal;
        vm.currentSelectedDay = null;
        var week;
        var weekArray = [];
        var userData;
        vm.daylyFood;
        var weekData;
        vm.ideal_weight;
        vm.idealweightsmall ;
        vm.idealweightheigh ;
         vm.idealweightsmallTemp ;
        vm.idealweightheighTemp ;
        vm.current_weigth;
        var stringArray = new Array();
        var caloriesDif = 0;
        var caloriesDifs = 0;
        (function () {
            $http.get('../../documents/objects/weekObject.json').then(function (response) {
                weekData = response.data;
            });
        })();
        (function () {
            vm.weekArray = [{
                "day": "Monday"
            }, {
                "day": "Tuesday"
            }, {
                "day": "Wednesday"
            }, {
                "day": "Thursday"
            }, {
                "day": "Friday"
            }, {
                "day": "Saturday"
            }, {
                "day": "Sunday"
            }];
            
            for (var x = 0; x < 2; x++) {
                if (x < 1) {
                    if (CommonSvc.getUserData() == undefined) {
                        console.log("Please Provide the your Zip Code");
                        $location.path('/');
                        break;
                    }
                } else {
                    userData = CommonSvc.getUserData();
                    vm.ideal_weight = userData.userObject.planning.ideal_weight;
                    stringArray = vm.ideal_weight.split(" ");
                    vm.idealweightsmallTemp = stringArray[0];
                    vm.idealweightheighTemp = stringArray[2];  
                    vm.idealweightsmall = vm.idealweightsmallTemp.substring(0,vm.idealweightsmallTemp.length -2);
                    vm.idealweightheigh = vm.idealweightheighTemp.substring(0,vm.idealweightheighTemp.length -2);
                    vm.current_weigth = userData.userObject.planning.current_weigth;
                    caloriesDif = vm.current_weigth - vm.idealweightheigh;
                    caloriesDifs = vm.current_weigth - vm.idealweightsmall;
                        
                    if (  vm.idealweightsmall <= vm.current_weigth && vm.current_weigth<= vm.idealweightheigh){
                      vm.bcalories = 500;
                      vm.fscalories = 250;
                      vm.lcalories = 500;
                      vm.sscalories = 250;
                      vm.dcalories = 500;
                    }
                    else if (  5 < caloriesDif && caloriesDif <= 10){
                      vm.bcalories = 500;
                      vm.fscalories = 150;
                      vm.lcalories = 500;
                      vm.sscalories = 150;
                      vm.dcalories = 500;
                    }
                    else if (  10 < caloriesDif && caloriesDif <= 20){
                      vm.bcalories = 500;
                      vm.fscalories = 100;
                      vm.lcalories = 500;
                      vm.sscalories = 100;
                      vm.dcalories = 500;
                    }
                    else if (  20 < caloriesDif && caloriesDif<= 50){
                      vm.bcalories = 400;
                      vm.fscalories = 100;
                      vm.lcalories = 400;
                      vm.sscalories = 100;
                      vm.dcalories = 400;
                    }
                    else if ( caloriesDif >= 50 ){
                      vm.bcalories = 200;
                      vm.fscalories = 100;
                      vm.lcalories = 200;
                      vm.sscalories = 100;
                      vm.dcalories = 200;
                    }
                    else if (  -10 <= caloriesDifs && caloriesDifs <= 0){
                      vm.bcalories = 700;
                      vm.fscalories = 300;
                      vm.lcalories = 500;
                      vm.sscalories = 300;
                      vm.dcalories = 700;
                    }
                    else if (caloriesDifs <= -11){
                      vm.bcalories = 700;
                      vm.fscalories = 500;
                      vm.lcalories = 700;
                      vm.sscalories = 500;
                      vm.dcalories = 700;
                    }  
                    
                }
            }
        })();


        vm.go = function (obj) {
            vm.currentSelectedDay = obj.day;
            week = obj ;
          };

        function route(param) {
            switch (param) {
            case 'save':
                for (var x = 0; x < 4; x++) {
                    if (x < 3) {
                        if (CommonSvc.getUserData() == undefined) {
                            console.log("Please Provide the your Zip Code");
                            $location.path('/deit');
                            break;
                        }
                    } else {
                        if (CommonSvc.getWeekData() == undefined) {

                            console.log("No week data loaded");
                        } else {
                            userData.userObject.deit.push(weekData);
                            console.log(weekData);
                            console.log(userData);
                            CommonSvc.setUserData(userData);
                        }
                    }
                }

                $location.path('/planning');
                break;
            case 'preview':
                $location.path('/deit');
                break;
            case 'edit':
                $location.path('/deit');
                break;
            case 'back':
                $location.path('/planning');
                break;
            case 'BF':
                var modalInstance = $uibModal.open({
                    templateUrl: "deitPlan/views/deitdaily.html",
                    controller: "DeitPlanCtrl",
                    controllerAs: "vm",
                    size: 'lg',
                    resolve: {
                        callerData: function () {
                            return {
                                "maxCal": vm.bcalories,
                                "day": week.day,
                                "meal": "breakfast"
                            };
                        }
                    }
                });

                modalInstance.result.then(function (dayMeal) {

                    weeklyDeit(week.day, "breakfast", dayMeal);
                    console.log(weekData);
                }, function () {
                    $log.info('Modal dismissed at: ' + new Date());
                });
                break;
            case 'FS':
                var modalInstance = $uibModal.open({
                    templateUrl: "deitPlan/views/deitdaily.html",
                    controller: "DeitPlanCtrl",
                    controllerAs: "vm",
                    size: 'lg',
                    resolve: {
                        callerData: function () {
                            return {
                                "maxCal": vm.fscalories,
                                "day": week.day,
                                "meal": "firstSnack"
                            };
                        }
                    }
                });

                modalInstance.result.then(function (dayMeal) {

                    weeklyDeit(week.day, "firstSnack", dayMeal);
                    console.log(weekData);
                }, function () {
                    $log.info('Modal dismissed at: ' + new Date());
                });
                break;
            case 'LN':
                var modalInstance = $uibModal.open({
                    templateUrl: "deitPlan/views/deitdaily.html",
                    controller: "DeitPlanCtrl",
                    controllerAs: "vm",
                    size: 'lg',
                    resolve: {
                        callerData: function () {
                            return {
                                "maxCal": vm.lcalories,
                                "day": week.day,
                                "meal": "lunch"
                            };
                        }
                    }
                });

                modalInstance.result.then(function (dayMeal) {

                    weeklyDeit(week.day, "lunch", dayMeal);
                    console.log(weekData);
                }, function () {
                    $log.info('Modal dismissed at: ' + new Date());
                });
                break;
            case 'SS':
                var modalInstance = $uibModal.open({
                    templateUrl: "deitPlan/views/deitdaily.html",
                    controller: "DeitPlanCtrl",
                    controllerAs: "vm",
                    size: 'lg',
                    resolve: {
                        callerData: function () {
                            return {
                                "maxCal": vm.sscalories,
                                "day": week.day,
                                "meal": "secondSnack"
                            };
                        }
                    }
                });

                modalInstance.result.then(function (dayMeal) {

                    weeklyDeit(week.day, "secondSnack", dayMeal);
                    console.log(weekData);
                }, function () {
                    $log.info('Modal dismissed at: ' + new Date());
                });
                break;
            case 'DN':

                var modalInstance = $uibModal.open({
                    templateUrl: "deitPlan/views/deitdaily.html",
                    controller: "DeitPlanCtrl",
                    controllerAs: "vm",
                    size: 'lg',
                    resolve: {
                        callerData: function () {
                            return {
                                "maxCal": vm.dcalories,
                                "day": week.day,
                                "meal": "diner"
                            };
                        }
                    }
                });

                modalInstance.result.then(function (dayMeal) {

                    weeklyDeit(week.day, "diner", dayMeal);
                    console.log(weekData);
                }, function () {
                    $log.info('Modal dismissed at: ' + new Date());
                });
                break;

            case 'M':
                vm.customStyle.colorClass = "blue";
                $location.path('/deit');
                break;
        }
    }

    function weeklyDeit(day, meal, dayMeal) {
        if (day === 'Monday') {
            if (meal === 'breakfast') {

                weekData.monday.breakfast = dayMeal;

            } else if (meal === 'firstSnack') {
                weekData.monday.first_snack = dayMeal;

            } else if (meal === 'lunch') {
                weekData.monday.lunch = dayMeal;

            } else if (meal === 'secondSnack') {
                weekData.monday.second_snack = dayMeal;

            } else if (meal === 'diner') {
                weekData.monday.diner = dayMeal;

            } else {}
        } else if (day === 'Tuesday') {
            if (meal === 'breakfast') {
                weekData.tuesday.breakfast = dayMeal;

            } else if (meal === 'firstSnack') {
                weekData.tuesday.first_snack = dayMeal;

            } else if (meal === 'lunch') {
                weekData.tuesday.lunch = dayMeal;

            } else if (meal === 'secondSnack') {
                weekData.tuesday.second_snack = dayMeal;

            } else if (meal === 'diner') {
                weekData.tuesday.diner = dayMeal;

            } else {}
        } else if (day === 'Wednesday') {
            if (meal === 'breakfast') {
                weekData.wednesday.breakfast = dayMeal;

            } else if (meal === 'firstSnack') {
                weekData.wednesday.first_snack = dayMeal;

            } else if (meal === 'lunch') {
                weekData.wednesday.lunch = dayMeal;

            } else if (meal === 'secondSnack') {
                weekData.wednesday.second_snack = dayMeal;

            } else if (meal === 'diner') {
                weekData.wednesday.diner = dayMeal;

            } else {}
        }
        if (day === 'Thursday') {
            if (meal === 'breakfast') {
                weekData.thursday.breakfast = dayMeal;

            } else if (meal === 'firstSnack') {
                weekData.thursday.first_snack = dayMeal;

            } else if (meal === 'lunch') {
                weekData.thursday.lunch = dayMeal;

            } else if (meal === 'secondSnack') {
                weekData.thursday.second_snack = dayMeal;

            } else if (meal === 'diner') {
                weekData.thursday.diner = dayMeal;

            } else {}
        }
        if (day === 'Friday') {
            if (meal === 'breakfast') {
                weekData.friday.breakfast = dayMeal;

            } else if (meal === 'firstSnack') {
                weekData.friday.first_snack = dayMeal;

            } else if (meal === 'lunch') {
                weekData.friday.lunch = dayMeal;

            } else if (meal === 'secondSnack') {
                weekData.friday.second_snack = dayMeal;

            } else if (meal === 'diner') {
                weekData.friday.diner = dayMeal;

            } else {}
        } else if (day === 'Saturday') {
            if (meal === 'breakfast') {
                weekData.saturday.breakfast = dayMeal;

            } else if (meal === 'firstSnack') {
                weekData.saturday.first_snack = dayMeal;

            } else if (meal === 'lunch') {
                weekData.saturday.lunch = dayMeal;

            } else if (meal === 'secondSnack') {
                weekData.saturday.second_snack = dayMeal;

            } else if (meal === 'diner') {
                weekData.saturday.diner = dayMeal;

            } else {}
        } else if (day === 'Sunday') {
            if (meal === 'breakfast') {
                weekData.sunday.breakfast = dayMeal;

            } else if (meal === 'firstSnack') {
                weekData.sunday.first_snack = dayMeal;

            } else if (meal === 'lunch') {
                weekData.sunday.lunch = dayMeal;

            } else if (meal === 'secondSnack') {
                weekData.sunday.second_snack = dayMeal;

            } else if (meal === 'diner') {
                weekData.sunday.diner = dayMeal;

            } else {

            }
        } else {}


    }
    }

})();