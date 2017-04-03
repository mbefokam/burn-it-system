var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
const assert = require('assert');
chai.use(chaiAsPromised);
var expect = chai.expect;
module.exports = function () {
    this.Given(/^I am a new user of Burn It Sytem$/, function (callback) {
        callback();
    });
    this.Given(/^I enter the url "([^"]*)"$/, function (url, callback) {
        browser.get(url).then(function () {
            callback();
        });
    });
    /*this.Given(/^I am using the application$/, function (callback) {
           browser.get('http://localhost:8080/#!/').then(function(){
              callback();
           });
         });*/
    this.When(/^The user enter thier "([^"]*)" and then "([^"]*)" and then "([^"]*)" and then "([^"]*)" and "([^"]*)"$/, function (zip_code, age, gender, weight, height, callback) {
        element(by.model("vm.person.zipcode")).sendKeys(zip_code);
        element(by.model("vm.person.age")).sendKeys(age);
        element(by.model("vm.person.weight")).sendKeys(weight);
        element(by.model("vm.person.height")).sendKeys(height);
        element(by.model("vm.person.gender")).sendKeys(gender).then(function () {
            callback();
        });
    });
   /* this.When(/^The user enter thier '(\d+)' and '(\d+)' and then "([^"]*)" and then the '(\d+)' and '(\d+)' for basic information$/, function (zip_code, age, gender, weight, height, callback) {
        element(by.model("vm.person.zipcode")).sendKeys(zip_code);
        element(by.model("vm.person.age")).sendKeys(age);
        element(by.model("vm.person.weight")).sendKeys(weight);
        element(by.model("vm.person.height")).sendKeys(height);
        element(by.model("vm.person.gender")).sendKeys(gender).then(function () {
            callback();
        });
    });*/
    this.When(/^The user enter thier '(\d+)' and '(\d+)' and then "([^"]*)" and then the '(\d+)' and '(\d+)' for basic information$/, function (zip_code, age, gender, weight, height, callback) {
        element(by.model("vm.person.zipcode")).sendKeys(zip_code);
        element(by.model("vm.person.age")).sendKeys(age);
        element(by.model("vm.person.weight")).sendKeys(weight);
        element(by.model("vm.person.height")).sendKeys(height);
        element(by.model("vm.person.gender")).sendKeys(gender).then(function () {
            callback();
        });
    });
    this.When(/^The user enter thier "([^"]*)" and "([^"]*)" and then "([^"]*)" and then the "([^"]*)" and "([^"]*)" for basic information$/, function (zip_code, age, gender, weight, height, callback) {
        element(by.model("vm.person.zipcode")).sendKeys(zip_code);
        element(by.model("vm.person.age")).sendKeys(age);
        element(by.model("vm.person.weight")).sendKeys(weight);
        element(by.model("vm.person.height")).sendKeys(height);
        element(by.model("vm.person.gender")).sendKeys(gender).then(function () {
            callback();
        });
    });
    this.When(/^press click your BMI$/, function (callback) {
        //element(by.model("vm.person.gender"));
        //element(by.binding("vm.person.gender"));
        //element(by.buttonText("Submit")).click()
        element(by.css('[ng-click="vm.route(\'bmi\')"]')).click().then(function () {
            callback();
        });
    });
    this.When(/^The User select a Nutritionist$/, function (callback) {
         element(by.css('[ng-click="vm.route(\'nutritionists\')"]')).click();
        element(by.css('[ng-click="vm.route(\'Save\')"]')).click().then(function () {
            callback();
        });
       });
    this.When(/^The User select a Work Place$/, function (callback) {
         element(by.css('[ng-click="vm.route(\'workout\')"]')).click();
         element(by.css('[ng-click="vm.route(\'Save\')"]')).click().then(function () {
            callback();
        });
       });
    this.When(/^press click Build Your Own Diet Plan$/, function (callback) {
        element(by.css('[ng-click="vm.route(\'diet\')"]')).click().then(function () {
            callback();
        });
    });
    this.When(/^I click "([^"]*)"\#:$/, function (day, callback) {
      
        if("Monday" == "Monday"){
         element.all(by.repeater('obj in vm.weekArray')).get(0).click(); 
        }
        else if(day == "Tuesday"){
         element.all(by.repeater('obj in vm.weekArray')).get(1).click(); 
        }
        else if(day == "Wednesday"){
         element.all(by.repeater('obj in vm.weekArray')).get(2).click(); 
        }
        else if(day == "Thursday"){
         element.all(by.repeater('obj in vm.weekArray')).get(3).click(); 
        }
        else if(day == "Friday"){
         element.all(by.repeater('obj in vm.weekArray')).get(4).click(); 
        }
        else if(day == "Saturday"){
         element.all(by.repeater('obj in vm.weekArray')).get(5).click(); 
        }
        else if(day == "Sunday"){
         element.all(by.repeater('obj in vm.weekArray')).get(6).click(); 
        }
        
        callback();
        
       });
    /*this.When(/^I click day:$/, function (table, callback) {
        callback(null, 'pending');
    });*/
    this.When(/^I click Breakfact$/, function (callback) {
       element(by.css('[ng-click="vm.route(\'BF\')"]')).click().then(function () {
            callback();
        });
    });
    this.When(/^I search for  "([^"]*)" and "([^"]*)" and "([^"]*)" and "([^"]*)"$/, function (arg1, arg2, arg3, arg4, callback) {
        
        element(by.model("vm.food")).sendKeys(arg1);
        element(by.css('[ng-click="vm.route(\'search\')"]')).click();
        element(by.css('[ng-click="vm.route(\'add\')"]')).click();
        element(by.model("vm.food")).sendKeys(arg2);
        element(by.css('[ng-click="vm.route(\'search\')"]')).click();
        element(by.css('[ng-click="vm.route(\'add\')"]')).click();
        element(by.model("vm.food")).sendKeys(arg3);
        element(by.css('[ng-click="vm.route(\'search\')"]')).click();
        element(by.css('[ng-click="vm.route(\'add\')"]')).click();
        element(by.model("vm.food")).sendKeys(arg4);
        element(by.css('[ng-click="vm.route(\'search\')"]')).click();
        element(by.css('[ng-click="vm.route(\'add\')"]')).click();
        element(by.css('[ng-click="vm.close()"]')).click().then(function () {
            callback();
        });
        //element(by.buttonText("Submit")).click();
    });
    this.When(/^I click First Snack$/, function (callback) {
        
       element(by.css('[ng-click="vm.route(\'FS\')"]')).click().then(function () {
            callback();
        });
    });
    this.When(/^I search for "([^"]*)" and "([^"]*)"$/, function (arg1, arg2, callback) {
        element(by.model("vm.food")).sendKeys(arg1);
        element(by.css('[ng-click="vm.route(\'search\')"]')).click();
        element(by.css('[ng-click="vm.route(\'add\')"]')).click();
        element(by.model("vm.food")).sendKeys(arg2);
        element(by.css('[ng-click="vm.route(\'search\')"]')).click();
        element(by.css('[ng-click="vm.route(\'add\')"]')).click();
        element(by.css('[ng-click="vm.close()"]')).click().then(function () {
            callback();
        });
    });
    
    this.When(/^I click Lunch$/, function (callback) {
         element(by.css('[ng-click="vm.route(\'LN\')"]')).click().then(function () {
            callback();
        });
    });
    this.When(/^I search for "([^"]*)" and "([^"]*)" and "([^"]*)"$/, function (arg1, arg2, arg3, callback) {
        element(by.model("vm.food")).sendKeys(arg1);
        element(by.css('[ng-click="vm.route(\'search\')"]')).click();
        element(by.css('[ng-click="vm.route(\'add\')"]')).click();
        element(by.model("vm.food")).sendKeys(arg2);
        element(by.css('[ng-click="vm.route(\'search\')"]')).click();
        element(by.css('[ng-click="vm.route(\'add\')"]')).click();
        element(by.model("vm.food")).sendKeys(arg3);
        element(by.css('[ng-click="vm.route(\'search\')"]')).click();
        element(by.css('[ng-click="vm.route(\'add\')"]')).click();
        element(by.css('[ng-click="vm.close()"]')).click().then(function () {
            callback();
        });
    });
    
    this.When(/^I click Second Snack$/, function (callback) {
         element(by.css('[ng-click="vm.route(\'SS\')"]')).click().then(function () {
            callback();
        });
    });
    this.When(/^I search for "([^"]*)"$/, function (arg1, callback) {
        
        element(by.model("vm.food")).sendKeys(arg1);
        element(by.css('[ng-click="vm.route(\'search\')"]')).click();
        element(by.css('[ng-click="vm.route(\'add\')"]')).click();
        element(by.css('[ng-click="vm.close()"]')).click().then(function () {
            callback();
        });
    });
    
    this.When(/^I click Dinner$/, function (callback) {
         element(by.css('[ng-click="vm.route(\'DN\')"]')).click().then(function () {
            callback();
        });
    });
    this.When(/^I search for "([^"]*)" with "([^"]*)"$/, function (arg1, arg2, callback) {
        element(by.model("vm.food")).sendKeys(arg1);
        element(by.css('[ng-click="vm.route(\'search\')"]')).click();
        element(by.css('[ng-click="vm.route(\'add\')"]')).click();
        element(by.model("vm.food")).sendKeys(arg2);
        element(by.css('[ng-click="vm.route(\'search\')"]')).click();
        element(by.css('[ng-click="vm.route(\'add\')"]')).click();
        element(by.css('[ng-click="vm.close()"]')).click().then(function () {
            
            callback();
        });
        
    });
    this.Then(/^I save my plan$/, function (callback) {
        //element(by.css('[ng-click="vm.route(\'save\')"]')).click();
          element(by.css('[ng-click="vm.route(\'save\')"]')).click().then(function () {
            callback();
        });
       });
    this.Then(/^I click sign up$/, function (callback) {
         element(by.css('[ng-click="vm.route(\'loginplan\')"]')).click().then(function () {
            //element(by.buttonText("Submit")).click();
            callback();
        });
       });
    

   
};