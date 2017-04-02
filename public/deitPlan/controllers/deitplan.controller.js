"use strict";
(function () {
    angular.module("burnIt.deitplan").controller("DeitPlanCtrl", ["CommonSvc", "$location", "$http", "callerData", "$uibModal", "$uibModalInstance", DeitPlanCtrl]);

    function DeitPlanCtrl(CommonSvc, $location, $http, callerData, $uibModal, $uibModalInstance) {
        var vm = this;
        vm.close = close;
        vm.route = route;
        vm.totalCal = 0;
        vm.numCal = 0;
        vm.foodArray = [];
        var food;
        var cal;
        var calories = [];
        var queryFood = {
            "query": ""
        };
        var obj = {};
        var userData;
        vm.week;
        var day;
        var meal;
       
        (function () {
            vm.maxCal = JSON.stringify(callerData.maxCal);
            day = callerData.day;
            meal = callerData.meal;
            for (var x = 0; x < 2; x++) {
                if (x < 1) {
                    if (CommonSvc.getUserData() == undefined) {
                        console.log("Please Provide the your Zip Code");
                        break;
                    } else {
                        userData = CommonSvc.getUserData();
                    }
                }
            }
        })();

        function route(param) {
            switch (param) {
                case 'add':
                    var pretotal = vm.totalCal + vm.numCal;
                    if (pretotal >= vm.maxCal) {
                        window.alert("You reach the Maximum number of Calories");

                    } else {
                        vm.totalCal = pretotal;
                        vm.foodArray.push(food);

                    }
                    break;
                case 'search':
                       var cal = 0;
                       queryFood.query = vm.food;
                       $http.post('/api/savedfood/foodlist', JSON.stringify(queryFood)).then(function (response){
                       //console.log(response.data);
                      // console.log(response.data.calories);
                    
                       
                      if(response.data == null)
                      { $http.post('/api/nutritionix/deit', JSON.stringify(queryFood)).then(function (response) {
                        for (var i = 0; i < response.data.foods.length; i++) {
                            if (response.data.foods[i].nf_calories == null || response.data.foods[i].nf_calories == "") {} else {
                                food = {}
                                cal = parseInt(cal) + parseInt(response.data.foods[i].nf_calories);
                                food.food_name = response.data.foods[0].food_name;
                                food.thumb = response.data.foods[0].photo.thumb;
                                food.numberofCal = parseInt(response.data.foods[i].nf_calories);
                                console.log("Found from API");
                                break;
                                
                            }
                        }
                        if (cal >= vm.maxCal) {
                            window.alert("You reatch the Maximum number of Calories");
                        } else {
                            vm.numCal = parseInt(cal);

                        }
                    });
                }
                else{
                   // console.log("data " +response.data);
                   // console.log("calories " +response.data.calories);
                    if(response.data.calories===undefined)
                    {
                        console.log("found from cache");
                        cal = parseInt(cal) + parseInt(response.data);
                        
                    }
                    else{
                               cal = parseInt(cal)+parseInt(response.data.calories);
                               console.log("found from db");
                         }      
                    vm.numCal = cal;
                }
                   });

                   
                    break;
            }
        }

        function close() {

            $uibModalInstance.close(vm.foodArray);

        }
    }
})();