var header = document.querySelector('header');
var section = document.querySelector('section');
.getJSON("towns.json", function(data) {
  console.log(data);
});
var requestURL = 'https://christyleann3.github.io/assignments/lesson-11/json/towns.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'towns.json';
request.send();
request.onload = function() {
    var towns = request.response;
    populateHeader(towns.json);
    showTowns(towns.json);
  }
  function populateHeader(jsonObj) {
    var towns = document.createElement('h1');
    towns.textContent = jsonObj['towns.json'];
    header.appendChild(myH1);
  
    var myPara = document.createElement('p');
    myPara.textContent = 'towns.json:' + jsonObj['towns.json'];
    header.appendChild(myPara);
  }
  function showTowns(jsonObj) {
    var towns = jsonObj['towns.json'];
        
    for (var i = 0; i < towns.length; i++) {
      var myArticle = document.createElement('article');
      var myH2 = document.createElement('h2');
      var myPara1 = document.createElement('p');
      var myPara2 = document.createElement('p');
      var myPara3 = document.createElement('p');
      var myList = document.createElement('ul');
  
      myH2.textContent = towns[i].name;
      myPara1.textContent = 'Name: ' + towns[i].name;
      myPara2.textContent = 'Motto: ' + towns[i].motto;
      myPara3.textContent = 'Year Founded: ' + towns[i].yearfounded;
      myPara4.textContent = 'Current Population: ' + towns[i].currentpopulation;
      myPara5.textContent = 'Average Rainfall: ' + towns[i].averagerainfall;
      myPara6.textContent = 'Events';
          
      var towns = towns[i].events;
      for (var j = 0; j < events.length; j++) {
        var listItem = document.createElement('li');
        listItem.textContent = events[j];
        myList.appendChild(listItem);
      }
  
      myArticle.appendChild(myH2);
      myArticle.appendChild(myPara1);
      myArticle.appendChild(myPara2);
      myArticle.appendChild(myPara3);
      myArticle.appendChild(myPara4);
      myArticle.appendChild(myPara5);
      myArticle.appendChild(myPara6);
      myArticle.appendChild(myList);
  
      section.appendChild(myArticle);
    }
  }
  
