var cars =[ "BMW", "Benz", "Audi", "VW", "Ruf"];
var i=0;
var text="<ul>";

cars.pop();

while(i < cars.length){
  text += "<li>" + cars[i] +"</li>" ;
 i++;
  }
text += "</ul>";

document.getElementById("demo").innerHTML=text;
