var cars=["BMW","Peugeot","Benz", "Skoroskoro", " Toyota"];
cars.splice(4, 0, "Altezza");
document.getElementById("demo").innerHTML= cars.toString();
