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
    expect(translatorService.translateToRoman(1)).toBe('I');
  });

  it('should translate value greater than 3999', function() {
    expect(translatorService.translateToRoman(4000)).toBe('(IV)');
  });

  it('should throw error if the given value is not a number when translating to roman numeral', function() {
    expect(function() {
      translatorService.translateToRoman('abcd')
    }).toThrowError('invalid value');
  });

  it('should throw error if the given value is greater than 3888888 when translating to roman numeral', function() {
    expect(function() {
      translatorService.translateToRoman(4000000)
    }).toThrowError('invalid value');
  });

   it('should translate a given roman string to integer', function() {
    expect(translatorService.translateToInteger('C')).toBe(100);
  });

   it('should throw error if the given value is not a roman numeral when translating to integer', function() {
    expect(function() {
      translatorService.translateToInteger('abcd')
    }).toThrowError('invalid value');
  });

     it('should throw error if the given value is a invalid roman numeral when translating to integer', function() {
    expect(function() {
      translatorService.translateToInteger('XXXX')
    }).toThrowError('invalid value');
  });


});