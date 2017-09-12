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
     //Arrange
     spyOn(translatorService,'translateToInteger');
     ctrl.romanNumeral = 'CM';

     //Act
     ctrl.translateToInteger();

     //Assert
     expect(translatorService.translateToInteger).toHaveBeenCalled();
  });

  it('tracks that the service was called x times', function() {
     //Arrange
     spyOn(translatorService,'translateToInteger');
     ctrl.romanNumeral = 'CM';

     //Act
     ctrl.translateToInteger();

     //Assert
     expect(translatorService.translateToInteger).toHaveBeenCalledTimes(1);
  });

   it('tracks that the service was called with argument', function() {
     //Arrange
     spyOn(translatorService,'translateToInteger');
     var romanString = 'CM';
     ctrl.romanNumeral = romanString;

     //Act
     ctrl.translateToInteger();

     //Assert
     expect(translatorService.translateToInteger).toHaveBeenCalledWith(romanString);
  });

  it('should modify the model value based on the service response', function() {
      //Arrange
      var num = 900;
      spyOn(translatorService,'translateToInteger').and.returnValue(num);

      //Act
      ctrl.translateToInteger();

      //Assert
      expect(ctrl.integer).toBe(num);
  });

  it('should set the model value with custom error message if an error is thrown from service call', function() {
      //Arrange
      var errorMessage = 'invalid value';
      spyOn(translatorService,'translateToInteger').and.throwError(errorMessage);
      var customErrorMessage = 'Please enter a valid roman numeral';

      //Act
      ctrl.translateToInteger();

      //Assert
      expect(ctrl.integer).toBe(customErrorMessage);
  });

 });