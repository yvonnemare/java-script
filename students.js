var students = ["Spa", "Rumbi", "Shalom", "Vimbai", "Tau", "Joy", "Melody", "Tatenda", "Gracious", "Yvonne", "Fortunate", "Patricia"];
var text ="<ul>";
for (i = 0; i < students.length; i++){
  text += "<li>" + students[i] +  "</li>"+ "<br>";
}
text += "</ul>";
document.getElementById("demo").innerHTML =  text;
