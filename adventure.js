
var Death = [
    "You just gave up as soon as you could, congratulations I hope you're proud.",
    "You attempted to extuingish the fire by using whatever you had, which in this case was your body, it did not end well."
]


var body = document.getElementsByTagName('body');
var gamecontainer = document.getElementById('game-container');
var title = document.getElementById('title');
var description = document.getElementById('description');
var maincanvas = document.createElement(tagName = "div", id = "maincanvas");
var gamebuttons = document.getElementById("game-buttons");
var button1 = document.getElementById("button1");
var button2 = document.getElementById('button2');
var button3 = document.getElementById('button3');
var invcontainer = document.getElementById('inventoryItem');
var deathnumber = 0;
var HasShovel = false;
var DugHole = false;


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
    button3.setAttribute('onclick', 'GameOverAnim(0)');
    button2.setAttribute('onclick', 'Scene1()')
}

function UpdateScene(NewSceneSrc) {
    var SceneImage = document.createElement("img");
    SceneImage.src = NewSceneSrc;
    SceneImage.id = 'SceneImage';
    description.appendChild(SceneImage);
}

function GameOverAnim(deathnumber) {
    document.write(Death[deathnumber])
}

function Scene1() {
    description.innerHTML = 'You collect yourself as you notice the burning house, there is not a whole lot to look at besides the burning house and a shovel';
    UpdateScene('assets/img/scenes/scene1shovel.jpg');
    //Switch animation
    description.style.height = '70%';
    button2.innerHTML = 'Go into the forest';
    button2.setAttribute('onclick', 'SceneForest()');
    button3.innerHTML = 'Attempt to extinguish the fire';
    button3.setAttribute('onclick', 'GameOverAnim(1)');
    button1.style.display = 'inline-block';
    button1.innerHTML = 'Pick up the shovel';
    button1.setAttribute('onclick', 'Scene1noshovel()');
}

function UpdateScene(NewSceneSrc) {
    var SceneImage = document.createElement("img");
    SceneImage.src = NewSceneSrc;
    SceneImage.id = 'SceneImage';
    description.appendChild(SceneImage);
}

function Scene1noshovel() {
    description.innerHTML = 'You grabbed the shovel!';
    UpdateScene('assets/img/scenes/scene1noshovel.jpg');
    button1.style.display = 'none';
    HasShovel = true;
    button3.innerHTML = 'Attempt to extinguish the fire';
    button3.setAttribute('onclick', 'GameOverAnim(1)');
    button2.innerHTML = 'Go into the forest';
    button2.setAttribute('onclick', 'SceneForest()');
}

function SceneForest() {
    if (HasShovel) {
        description.innerHTML = "You've found yourself in a forest, trees surround you, you could dig a hole whatever good that will do you";
        button3.setAttribute('onclick', 'Scene1noshovel()');
    } else {
        description.innerHTML = "You've found yourself in a forest, trees surround you";
        button3.setAttribute('onclick', 'Scene1()');
    }
    UpdateScene('assets/img/scenes/dark_forest.jpg');
    button1.style.display = 'none';
    button3.innerHTML = "Go towards burning house";
    button2.innerHTML = "Continue along the pathway";
    button2.setAttribute('onclick', 'CabinScene()')
    if (HasShovel) {
        button1.style.display = 'inline-block';
        button1.innerHTML = 'Dig a hole';
        button1.setAttribute('onclick', 'DigHoleForest()');
    }
}

function DigHoleForest() {
    description.innerHTML = 'You dug a hole, what use it has is unclear';
    UpdateScene('assets/img/scenes/dark_forest.jpg');
    DugHole = true;
    button1.style.display = 'none';
}

function CabinScene() {
    description.innerHTML = 'You walk along the forest path hoping it will lead to somewhere until you stumble upon a cozy looking cabin in the woods';
    UpdateScene('assets/img/scenes/cabin_outside.jpg');
    button1.display = 'none';
    if (HasShovel) {
        button1.style.display = 'inline-block';
        button1.innerHTML = 'Dig a hole';
        button1.setAttribute('onclick', 'DigHoleCabin()');
    }
    if (DugHole) {
        button1.style.display = 'none';
    }
    button2.innerHTML = 'Head inside the cabin';
    button2.setAttribute('onclick', 'CabinSceneInside()');
    button3.innerHTML = 'go back'
    button3.setAttribute('onclick', 'SceneForest()');
}
