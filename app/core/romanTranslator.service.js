
  "use strict";

  function romanNumeralTranslator() {

    function translateToRoman(value) {
  
       // 3,888,888 is the longest number represented by Roman numerals
       if (isNaN(value) || value <= 0 || value > 3888888 ) {
         throw new Error('invalid value');
      }
       var romanNumeral = "";
       var romanZero = this.getRoman(value);
       // If the number is 4000 or greater
       if (romanZero.numThousands > 3) {
         var thousandString = "";
         for (var j=0;j<romanZero.numThousands;j++) thousandString += "M";
         var thousandsZero = getRoman(romanZero.numThousands);
         var thBase = "(" + thousandsZero.romanNumeral + ")";
         romanNumeral = romanZero.romanNumeral.replace(thousandString, thBase);
       }
       else romanNumeral = romanZero.romanNumeral;
       return romanNumeral;
     }

    function translateToInteger(str) {  
      var patt = new RegExp("^(?=[MDCLXVI])M*(C[MD]|D?C*)(X[CL]|L?X*)(I[XV]|V?I*)$");
      var testres = patt.test(str);
      if(!testres) {
        throw new Error('invalid value');
      }
      var result = 0;
      var decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
      var roman = ["M", "CM","D","CD","C", "XC", "L", "XL", "X","IX","V","IV","I"];
      for (var i = 0;i<=decimal.length;i++) {
        while (str.indexOf(roman[i]) === 0) {
         result += decimal[i];
         str = str.replace(roman[i],'');
        }
      }
     return result;
     }


     function getRoman(value) {

      var roman = new Array();
      roman = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
      var decimal = new Array();
      decimal = [1000,900,500,400,100,90,50,40,10,9,5,4,1];  
      var romanNumeral = "";
      var numThousands = 0;
      for (var i=0; i<roman.length; i++) {
        if (value == 0) break;  
        while (value >= decimal[i]) {
          value -= decimal[i];
          romanNumeral += roman[i];
          if (roman[i] == 'M') numThousands++;
        }     
      }
      return { numThousands:numThousands, romanNumeral:romanNumeral };
     }
     
    this.translateToRoman = translateToRoman;
    this.translateToInteger = translateToInteger;
    this.getRoman = getRoman;
  }

  angular.module('romanTranslatorApp')
      .service('romanNumeralTranslatorService', romanNumeralTranslator );
