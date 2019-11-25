var inventory = [
    { name: 'Gold', amount: 0, damage: 0, value: 1, type: 'currency' },
    { name: 'Gun', amount: 1, damage: 7, value: 7, type: 'Rangedweapon' }

]

var gamecontainer = document.getElementById('game-container');
var title = document.getElementById('title');
var description = document.getElementById('description');
var maincanvas = document.createElement(tagName = "div", id = "maincanvas");
var gamebuttons = document.getElementById("game-buttons");
var button1 = document.getElementById("button1");
var button2 = document.getElementById('button2');
var button3 = document.getElementById('button3');
var invcontainer = document.getElementById('inventoryItem');

StartGame();

function StartGame() {
    document.getElementById("title").innerHTML = "Spectral Amnesia";
    document.createElement(tagName = "link", href = "https://fonts.googleapis.com/css?family=Roboto&display=swap", rel = "stylesheet");
    gamecontainer.appendChild(maincanvas);
    button1.style.display = 'none';
    button2.innerHTML = 'Wake up';
    button3.innerHTML = 'Give up'
    description.innerHTML = "You're unconscious and the faint sound burning echoes around you as you try to collect yourself, a burning smell stings your nostrills";
    invcontainer.style.display = 'none';
    button3.setAttribute('onclick', 'GameOverAnim()');
}

function GameOverAnim() {

}
