// ALL ELEMENTS NEEDED
const menu = document.querySelector(".menu");
const optionX = menu.querySelector(".option-x");
const optionY = menu.querySelector(".option-o");
const game = document.querySelector(".game");
const players = game.querySelector(".players");

window.addEventListener("DOMContentLoaded", () => {
	menu.classList.add("show");
	optionX.addEventListener("click", () => {
		clickAndDisappear();
	});
	optionY.addEventListener("click", () => {
		clickAndDisappear();
		players.classList.add("active");
	});
});

const clickAndDisappear = () => {
	menu.classList.remove("show");
	game.classList.add("show");
};
