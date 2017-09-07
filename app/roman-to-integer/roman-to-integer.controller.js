

  function RomantoIntegerController(romanNumeralTranslatorService) {

    var ic = this;

    function translateToInteger() {
  
        ic.integer = romanNumeralTranslatorService.translateToInteger(ic.romanNumeral);
      
    }

    ic.integer = '';
    ic.romanNumeral = '';
    ic.translateToInteger = translateToInteger;
   
  }

 angular.module('romantoIntegerApp')
      .controller('RomantoIntegerController', ['romanNumeralTranslatorService',RomantoIntegerController]);



