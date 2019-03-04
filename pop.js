var cars=[" BMW", " benz", " toyota"];

document.getElementById("demo").innerHTML="There are" + cars.length+ " cars..." + cars.toString();

cars.unshift("Lexus");

document.getElementById("rov").innerHTML="There are now" + cars.length+ " cars..."+cars.toString();

cars.shift();
cars.shift();
document.getElementById("rm").innerHTML="There are now" +cars.length+ "cars..."+cars.toString();
