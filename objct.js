var corolla ={
  brand: " Toyota",
  make: " corolla",
  type:" Sedan",
  color:" blue",
  yearOfRelease: 1997
};
  var rangeRover = {
    brand: " Range Rover",
    make: " Sport",
    type: " SUV",
    color: " white",
    yearOfRelease: 2010
};

var cars =[ corolla,  rangeRover];

for(i=0; i<cars.length; i++){
document.write("This is a " + cars[i].brand + " car called a " + cars[i].make + ". It is a " + cars[i].type + " which is " + cars[i].color + " and was released in " +
cars[i].yearOfRelease   + "<br/><br/>");
}
