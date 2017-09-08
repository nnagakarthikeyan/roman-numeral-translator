'use strict';


describe('Roman Numeral Translator App', function() {


  it('should automatically redirect to /toroman when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/toroman");
  });


  describe('Translate to Roman Numeral', function() {

    beforeEach(function() {
      browser.get('index.html#!/toroman');
    });


    it('should render Roman numeral converter when user navigates to /toroman', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/Enter a Integer value/);
    });

    it('should display the Roman numeral value as a user types into the text box ', function() {

      var query = element(by.model('rc.integer'));
      query.sendKeys(100);
      expect(element.all(by.css('[ng-view] span')).first().getText()).toBe('Roman numeral:C');

      query.clear();
      query.sendKeys(3000);
      expect(element.all(by.css('[ng-view] span')).first().getText()).toBe('Roman numeral:MMM');

      query.clear();
      query.sendKeys(4010);
      expect(element.all(by.css('[ng-view] span')).first().getText()).toBe('Roman numeral:(IV)X');

    });

  });


  describe('Translate to Integer', function() {

    beforeEach(function() {
      browser.get('index.html#!/todecimal');
    });


    it('should render Integer converter when user navigates to /todecimal', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/Enter a Roman numeral/);
    });

    it('should display the Integer value as a user types into the text box ', function() {

      var query = element(by.model('ic.romanNumeral'));
      query.sendKeys('MM');
      expect(element.all(by.css('[ng-view] span')).first().getText()).toBe('Integer value:2000');

      query.clear();
      query.sendKeys('XVI');
      expect(element.all(by.css('[ng-view] span')).first().getText()).toBe('Integer value:16');

    });

  });
});
