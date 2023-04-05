var input_tekst = document.querySelector("#input_tekst");
var button_generuj = document.querySelector("#button_generuj");
var button_pobierz = document.querySelector("#button_pobierz");
var img_monster = document.querySelector("#img_monster");
button_generuj.addEventListener("click",generuj);
function generuj(){
	img_monster.classList.remove("ukryty");
	var random = Math.floor(Math.random() * 10000);
	button_pobierz.classList.remove("ciemny");
button_pobierz.classList.remove("ukryty");
	img_monster.src = "https://app.pixelencounter.com/api/basic/monsters/"+random;
	button_pobierz.href = "https://app.pixelencounter.com/api/basic/monsters/"+random;
}
