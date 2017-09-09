

  function IntegertoRomanController(romanNumeralTranslatorService) {

    var rc = this;

    function translateToRoman() {
      try {
        rc.romanNumeral = romanNumeralTranslatorService.translateToRoman(rc.integer);
       } catch (e) {
        console.log(e);
        rc.romanNumeral = 'Please enter a number between 1 and 3,888,888';
      }

    }

    rc.integer = '';
    rc.romanNumeral = '';
    rc.translateToRoman = translateToRoman;
   
  }

 angular.module('intergertoRomanApp')
      .controller('IntegertoRomanController', ['romanNumeralTranslatorService',IntegertoRomanController]);



