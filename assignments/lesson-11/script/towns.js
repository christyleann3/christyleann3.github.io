var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = 
function() {
  if (this.readyState == 4 && this.status == 200) {
    var myObj = JSON.parse(this.responseText);
    document.getElementById("https://christyleann3.github.io/assignments/lesson-11/json/towns.json").innerHTML = myObj.towns;
  }
};
xmlhttp.open("GET", "towns.json", true);
xmlhttp.send();