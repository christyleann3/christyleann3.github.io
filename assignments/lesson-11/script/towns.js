var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = 
function myFunction(arr) {
  var out = "towns.json";
  var i;
  for(i = 0; i <arr.length; i++) {
    out += '<a href="towns.json"' + arr[i].url + '">' + arr[i].display + '</a><br>';
    document.getElementById("https://christyleann3.github.io/assignments/lesson-11/json/towns.json").innerHTML = out;
  }
};
xmlhttp.open("GET", "towns", true);
xmlhttp.send();