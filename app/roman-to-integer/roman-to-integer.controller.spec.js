  "use strict";

describe('RomantoIntegerController', function() {

  beforeEach(module('romantoIntegerApp'));

  var ctrl;
  var translatorService;

  beforeEach(inject(function($controller,romanNumeralTranslatorService) {

    ctrl = $controller('RomantoIntegerController');
    translatorService = romanNumeralTranslatorService;

  }));

  it('should exist', function() {
    expect(ctrl).toBeDefined();
  });

  it('tracks that the service was called', function() {
     spyOn(translatorService,'translateToInteger');
     ctrl.translateToInteger();
     expect(translatorService.translateToInteger).toHaveBeenCalled();
  });

  it('tracks that the service was called x times', function() {
     spyOn(translatorService,'translateToInteger');
     ctrl.translateToInteger();
     expect(translatorService.translateToInteger).toHaveBeenCalledTimes(1);
  });

  it('should perform the integer translation by calling the service', function() {
      ctrl.romanNumeral = 'CM';
      ctrl.translateToInteger();
      expect(ctrl.integer).toBe(900);
  });

  it('should return error message if the given value is not a Roman numeral', function() {
        ctrl.romanNumeral = 'abcd';
        ctrl.translateToInteger();
        expect(ctrl.integer).toBe('Please enter a valid roman numeral');
  });

  it('should return error message if the given value is a invalid Roman numeral', function() {
        ctrl.romanNumeral = 'XXXX';
        ctrl.translateToInteger();
        expect(ctrl.integer).toBe('Please enter a valid roman numeral');
  });

  it('should return error message if the given roman string represents a value greater than 3888888 ', function() {
        ctrl.romanNumeral = '(MMMDCCCLXXXVIII)DCCCLXXXIX';
        ctrl.translateToInteger();
        expect(ctrl.integer).toBe('Please enter a valid roman numeral');
  });

});