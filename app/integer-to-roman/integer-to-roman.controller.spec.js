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
     //Arrange
     spyOn(translatorService,'translateToRoman');
     ctrl.integer = 100;

     //Act
     ctrl.translateToRoman();

     //Assert
     expect(translatorService.translateToRoman).toHaveBeenCalled();
  });

  it('tracks that the service was called x times', function() {
     //Arrange
     spyOn(translatorService,'translateToRoman');
     ctrl.integer = 100;

     //Act
     ctrl.translateToRoman();

     //Assert
     expect(translatorService.translateToRoman).toHaveBeenCalledTimes(1);
  });

  it('tracks that the service was called with argument', function() {
     //Arrange
     spyOn(translatorService,'translateToRoman');
     var num = 100;
     ctrl.integer = num;

     //Act
     ctrl.translateToRoman();

     //Assert
     expect(translatorService.translateToRoman).toHaveBeenCalledWith(num);
  });

  it('should modify the model value based on the service response', function() {
      //Arrange
      var romanString = 'III';
      spyOn(translatorService,'translateToRoman').and.returnValue(romanString);

      //Act
      ctrl.translateToRoman();

      //Assert
      expect(ctrl.romanNumeral).toBe(romanString);
  });


});