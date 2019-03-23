"use strict";

fetch("https://christyleann3.github.io/assignments/lesson-11/json/towns.json")
  .then(fuction(resp) {
    return resp.json();
  })
  .then(function(data) {
    console.log(data);
  });