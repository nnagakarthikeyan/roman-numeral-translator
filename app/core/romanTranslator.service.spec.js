'use strict';

describe('RomanTranslatorService', function() {

  beforeEach(module('romanTranslatorApp'));

  var translatorService;

  beforeEach(inject(function(romanNumeralTranslatorService) {
    translatorService = romanNumeralTranslatorService;
  }));

  it('should exist', function() {
    expect(translatorService).toBeDefined();
  });

  it('should translate a given integer to roman numeral', function() {
    //Arrange
    var romanString = 'I';
    var returnedValue;
    var num = 1;

    //Act
    returnedValue = translatorService.translateToRoman(num);

    //Assert
    expect(returnedValue).toBe(romanString);
  });

  it('should translate value greater than 3999', function() {
    //Arrange
    var romanString = '(IV)';
    var returnedValue;
    var num = 4000;

    //Act
    returnedValue = translatorService.translateToRoman(4000);

    //Assert
    expect(returnedValue).toBe(romanString);
  });

  it('should translate a given roman string to integer', function() {
    //Arrange
    var num = 100;
    var returnedValue;
    var romanString = 'C';
    
    //Act
    returnedValue = translatorService.translateToInteger(romanString);

    //Assert
    expect(returnedValue).toBe(num);
  });

  it('should translate a given roman string included in round brackets for value greater than 3999', function() {
    //Arrange
    var num = 10000;
    var returnedValue;
    var romanString = '(X)';

    //Act
    returnedValue = translatorService.translateToInteger(romanString);

    //Assert
    expect(returnedValue).toBe(num);
  });

  it('should throw error if the given value is not a roman numeral when translating to integer', function() {
    //Arrange
    var romanString = 'abcd';
    var errorMessage = 'invalid value';
    var check;

    //Act
    check = function() {
      translatorService.translateToInteger(romanString)
    }

    //Assert
    expect(check).toThrowError(errorMessage);
  });

  it('should throw error if the given value is a invalid roman numeral when translating to integer', function() {
    //Arrange
    var romanString = 'XXXX';
    var errorMessage = 'invalid value';
    var check;

    //Act
    check = function() {
      translatorService.translateToInteger(romanString)
    }

    //Assert
    expect(check).toThrowError(errorMessage);
  });

  it('should throw error if the given roman string represents a value greater than 3888888', function() {
    //Arrange
    var romanString = '(MMMDCCCLXXXVIII)DCCCLXXXIX';
    var errorMessage = 'invalid value';
    var check;
    
    //Act
    check = function() {
      translatorService.translateToInteger(romanString)
    }

    //Assert
    expect(check).toThrowError(errorMessage);
  });


});