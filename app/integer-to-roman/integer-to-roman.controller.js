

  function IntegertoRomanController(romanNumeralTranslatorService) {

    var rc = this;

    function translateToRoman() {
  
        rc.romanNumeral = romanNumeralTranslatorService.translateToRoman(rc.integer);
      
    }

    rc.integer = '';
    rc.romanNumeral = '';
    rc.translateToRoman = translateToRoman;
   
  }

 angular.module('intergertoRomanApp')
      .controller('IntegertoRomanController', ['romanNumeralTranslatorService',IntegertoRomanController]);



