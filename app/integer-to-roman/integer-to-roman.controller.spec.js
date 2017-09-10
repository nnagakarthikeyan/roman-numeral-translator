  "use strict";

describe('IntegertoRomanController', function() {

  beforeEach(module('intergertoRomanApp'));

  var ctrl;
  var translatorService;

  beforeEach(inject(function($controller,romanNumeralTranslatorService) {

    ctrl = $controller('IntegertoRomanController');
    translatorService = romanNumeralTranslatorService;
    
  }));


  it('should exist', function() {
    expect(ctrl).toBeDefined();
  });


  it('tracks that the service was called', function() {
     spyOn(translatorService,'translateToRoman');
     ctrl.integer = 100;
     ctrl.translateToRoman();
     expect(translatorService.translateToRoman).toHaveBeenCalled();
  });

  it('tracks that the service was called x times', function() {
     spyOn(translatorService,'translateToRoman');
     ctrl.integer = 100;
     ctrl.translateToRoman();
     expect(translatorService.translateToRoman).toHaveBeenCalledTimes(1);
  });

  it('tracks that the service was called with argument', function() {
     spyOn(translatorService,'translateToRoman');
     ctrl.integer = 100;
     ctrl.translateToRoman();
     expect(translatorService.translateToRoman).toHaveBeenCalledWith(100);
  });

  it('should perform the roman numeral translation by calling the service', function() {
        ctrl.integer = 3;
        ctrl.translateToRoman();
        expect(ctrl.romanNumeral).toBe('III');
  });

  it('should return error message if the given value is not a number', function() {
        ctrl.integer = 'abcd';
        ctrl.translateToRoman();
        expect(ctrl.romanNumeral).toBe('Please enter a number between 1 and 3,888,888');
  });

   it('should return error message if the given value is greater than 3888888', function() {
        ctrl.integer = 4000000;
        ctrl.translateToRoman();
        expect(ctrl.romanNumeral).toBe('Please enter a number between 1 and 3,888,888');
  });


});