
var triangle = function(){
  var values = [document.getElementById](firstValue).value, document.getElementById("secondValue").value, document.getElementById("thirdValue")
};
var lengthA = parseInt(sides[0]);
var lengthB = parseInt(sides[1]);
var lengthC = parseInt(sides[2]);

isTriangle(firstValue, secondValue, thirdValue){
  if(firstValue == secondValue|| firstValue == thirdValue || thirdValue == secondValue){
  alert("This is an isosceles triangle");
  }else if(firstValue == secondValue && secondValue == thirdValue){
    alert("this is an equilateral triangle");
 }else(firstValue!==secondValue! && secondValue!==thirdValue!){
  alert("This is a scalene");
 }
};
