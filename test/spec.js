// spec.js
describe('Protractor Demo App', function() {
  it('should have a title', function() {
    browser.get('http://juliemr.github.io/protractor-demo/');
    browser.sleep(10000); // To slow it down a bit before finishing
    expect(browser.getTitle()).toEqual('Super Calculator');
  });
});