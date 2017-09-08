

  function IntegertoRomanController(romanNumeralTranslatorService) {

    var rc = this;

    function translateToRoman() {
      try {
        rc.romanNumeral = romanNumeralTranslatorService.translateToRoman(rc.integer);
       } catch (e) {
        console.log(e);
      }

    }

    rc.integer = '';
    rc.romanNumeral = '';
    rc.translateToRoman = translateToRoman;
   
  }

 angular.module('intergertoRomanApp')
      .controller('IntegertoRomanController', ['romanNumeralTranslatorService',IntegertoRomanController]);



