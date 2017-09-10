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

    it('should display the Roman numeral value as a user types valid value into the text box ', function() {

      var query = element(by.model('rc.integer'));
      query.sendKeys(100);
      expect(element(by.binding('rc.romanNumeral')).getText()).toBe('C');

      query.clear();
      query.sendKeys(3000);
      expect(element(by.binding('rc.romanNumeral')).getText()).toBe('MMM');

      query.clear();
      query.sendKeys(4010);
      expect(element(by.binding('rc.romanNumeral')).getText()).toBe('(IV)X');

    });

    it('should display proper error message if a user types invalid value into the text box ', function() {

      var query = element(by.model('rc.integer'));
      query.sendKeys('abcd');
      expect(element(by.binding('rc.romanNumeral')).getText()).toMatch(/Please enter a number between/);

    });

     it('should display proper error message if a user types value greater than 3888888 into the text box ', function() {

      var query = element(by.model('rc.integer'));
      query.sendKeys('3888889');
      expect(element(by.binding('rc.romanNumeral')).getText()).toMatch(/Please enter a number between/);

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

    it('should display the Integer value as a user types roman numeral into the text box ', function() {

      var query = element(by.model('ic.romanNumeral'));
      query.sendKeys('MM');
      expect(element(by.binding('ic.integer')).getText()).toBe('2000');

      query.clear();
      query.sendKeys('XVI');
      expect(element(by.binding('ic.integer')).getText()).toBe('16');

      query.clear();
      query.sendKeys('(XVI)');
      expect(element(by.binding('ic.integer')).getText()).toBe('16000');

    });

    it('should display proper error message if a user types invalid value into the text box ', function() {

      var query = element(by.model('ic.romanNumeral'));
      query.sendKeys('abcd');
      expect(element(by.binding('ic.integer')).getText()).toMatch(/Please enter a valid roman numeral/);

    });

    it('should display proper error message if a user types invalid roman numeral into the text box ', function() {

      var query = element(by.model('ic.romanNumeral'));
      query.sendKeys('XXXX');
      expect(element(by.binding('ic.integer')).getText()).toMatch(/Please enter a valid roman numeral/);

    });

    it('should display proper error message if a user types roman string which represents a value greater than 3888888 ', function() {

      var query = element(by.model('ic.romanNumeral'));
      query.sendKeys('(MMMDCCCLXXXVIII)DCCCLXXXIX');
      expect(element(by.binding('ic.integer')).getText()).toMatch(/Please enter a valid roman numeral/);

    });

  });
});
