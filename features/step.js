module.exports = function(){
    
    this.Given(/^I have visited Google$/, function () {
         
         return this.browser.url('http://google.com');
       });


       this.When(/^I search for "([^"]*)"$/, function (searchValue) {
           
         return this.browser.setValue('input[name="q"]',searchValue).keys(['Enter']);
       });


       this.Then(/^I see "([^"]*)"$/, function (link) {
         
         return this.browser.waitForExist('a='+link);
       });
    
}