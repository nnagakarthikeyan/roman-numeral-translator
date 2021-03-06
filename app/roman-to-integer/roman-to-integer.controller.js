

  function RomantoIntegerController(romanNumeralTranslatorService) {

    var ic = this;

    function translateToInteger() {
      try {
        ic.integer = romanNumeralTranslatorService.translateToInteger(ic.romanNumeral);
      } catch (e) {
        console.log(e);
        ic.integer = 'Please enter a valid roman numeral';
      }
    }

    ic.integer = '';
    ic.romanNumeral = '';
    ic.translateToInteger = translateToInteger;
   
  }

 angular.module('romantoIntegerApp')
      .controller('RomantoIntegerController', ['romanNumeralTranslatorService',RomantoIntegerController]);



