function toggleMenu() {
	document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}

let x = parseInt(document.getElementById('somevalue').innerHTML);

let result = (x + 10) / 2;

document.getElementById('output').innerHTML = "The result is <strong>" + result.toFixed(1) + "</strong>";
