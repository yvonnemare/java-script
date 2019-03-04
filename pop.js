var cars=[" BMW", " benz", " toyota"];

document.getElementById("demo").innerHTML="There are" + cars.length+ " cars..." + cars.toString();

cars.push("Land Rover");

document.getElementById("rov").innerHTML="There are now" + cars.length+ " cars..."+cars.toString();

cars.pop();
cars.pop();
document.getElementById("rm").innerHTML="There are now" +cars.length+ "cars..."+cars.toString();
