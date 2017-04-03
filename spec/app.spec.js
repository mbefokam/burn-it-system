var request = require("request");

var base_url = "http://localhost:8080/";


describe("Application Server", function() {
  describe("GET /", function() {
    it("returns status code 200", function(done) {
      request.get(base_url, function(error, response, body) {
        expect(response.statusCode).toBe(200);
        done();
      });
    });

    it("returns a body consisting of html code from index.html", function(done) {
      request.get(base_url, function(error, response, body) {
        expect(body).toContain("<html lang=\"en\" ng-app=\"burnIt\" ng-controller=\"burnCtrl\">");
        done();
      });
    });

    it("does not return a null value and returns a valid response", function(done) {
      request.get(base_url, function(error, response, body) {
        expect(response).not.toBeNull();
        done();
      });
    });
  });
});
