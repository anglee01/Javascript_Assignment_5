//Chapter 21 (Changing Case)
//q1
// var allLower = userInput.toLowerCase();
//q2
var x="WELCOME";
x=x.toLowerCase();
console.log(x);
//q3
var y="hello";
y=y.toUpperCase();
console.log(y);
//q4
var str="WELCOME BACK";
var newStr=str.toLowerCase();
console.log(newStr);
//q5
var myArray = ["HelloWorld"];
const lowercaseString = myArray[0].toLowerCase();
console.log(lowercaseString); 

//q6
var greeting="thankyou for coming";
greeting=greeting.toUpperCase();
alert(greeting);
//q7
var cityName = "kaRacHi";
var capitalizedCity = cityName.charAt(0).toUpperCase() + cityName.slice(1).toLowerCase();
console.log(capitalizedCity); 
//Chapter 22 - 25 (Strings)
//q1
var sameWords="captain";
var newWord=sameWords.slice(1,3);
console.log(newWord);
//q2
var str= "sunflower";
str=str.length;
console.log(str);
//q3
var animal="elephant";
var seg= animal.slice(2,6);
console.log(seg);
//q4
var flower="lily";
var numOfletters= flower.length;
console.log(numOfletters);
//q5
var animal="hippopotomus";
// Measure the number of characters in the string
var characterCount = animal.length;
console.log(characterCount);
// Slice all but the first character and last 3 characters
var slicedString = animal.slice(1, -3);
console.log(slicedString);

//q6
var text = "To be or not to be.";
var indx = text.indexOf("be");
console.log(indx);
//q7
var text = "To be or not to be.";
var indx = text.lastIndexOf("be");
console.log(indx);
// //q8
// var text = "This is a sample string to go through. Let's go for it again and again.";
// var lastIndex = text.lastIndexOf("go");
// if (lastIndex !== -1) {
//   var firstCharIndex = lastIndex;
//   var indx = firstCharIndex;
//   console.log(indx);
// } 
// else {
//   console.log("The string does not contain 'go'");
// }
//q9
if (typeof yourString[indexNum] !== 'undefined') {
  // Your code here if the segment exists
}
 else {
  // Your code here if the segment does not exist
}
//q10
var str="abcde";
console.log(str.charAt(2));
//q11
var word="congratulations";
var cha=word.charAt(10);
console.log(cha);
//q12
var str="mountains";
var x=str.charAt(8);
console.log(x);
//q13
var input="I live in Karachi";
var cha=input.charAt(5);
console.log(cha);
//q14
var newStr="Islamabad";
if (str.charAt(2)) {
console.log("l is present");
}
else{
    console.log("l is not present");
}
//q15


//q16
var str= "1";
 var newStr=str.replaceAll("1","ONE");
 console.log(newStr);
//q17
var x= "abcde";
var y = x.replaceAll("abcde", "z");
console.log(y);

//Chapter 26 (Rounding Numbers)\
//q1
var num=7.7
console.log(Math.round(num));
//q2
var origNum= 12.8;
var roundNum= Math.round(origNum);
console.log(roundNum);
//Q3
var origNum= 12.4;
var roundNum= Math.round(origNum);
console.log(roundNum);
//q4
var number= 30.999;
var roundNum= Math.round(number);
console.log(roundNum);
//q5
var value=.5;
var newValue=Math.round(value)-1;
console.log(newValue);

//Chapter 27 (Random Numbers)
//q1
var randomNumbers=Math.random()*50;
console.log(randomNumbers);
//q2
var random=Math.random();
console.log(random);
//q3
var randomNumber = Math.floor(Math.random() * 6) + 1;
console.log("You rolled a" +" "+ randomNumber);
//q4
     var randomNumber = Math.random();
     if (randomNumber < 0.5) {
      console.log( "Heads");
     }
      else {
       console.log ("Tails");
     }
   
//Chapter 28, 29 (Converting Strings)
//q1
var str="42";
var integer=parseInt(str);
console.log(integer);
//q2
var str="123";
var integer=parseInt(str);
console.log(integer);
//q3
var str="5.7";
var floatingPoint= parseFloat(str)
console.log(floatingPoint);
//q4
// In JavaScript, you can check if a string can be successfully converted to an integer or 
// decimal by using the parseInt and  parseFloat functions and checking the result.

//q5
var num=465;
var str=num.toString();
console.log(str);
//q6
var num=42;
var str=num.toString();
console.log(str);
//q7
var str = "3.14";
var floatingPoint = parseFloat(str);
console.log(floatingPoint); 

//Chapter 30 (Controlling the length of decimals)
//q1
var num = 123.456789;
var newNum = num.toFixed(4).toString();
console.log(newNum);
//q2
var num = 321.456789; 
num = parseFloat(num.toFixed(2));
console.log(num);
//q3
var num= 4.54678980;
if ((num.toFixed(2)).toString().length > 4) {
  console.log(num+" "+" is upto four decimal places");
}
else{
  console.log(num+" "+" is not upto four decimal places")
}
//q4
var originalNumber = 790.35798;
var roundedString = originalNumber.toFixed(2).toString();
alert(roundedString);