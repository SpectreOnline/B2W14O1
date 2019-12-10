
var Death = [
    "You just gave up as soon as you could, congratulations I hope you're proud.",
    "You attempted to extuingish the fire by using whatever you had, which in this case was your body, it did not end well."
]

var ScenesList = [
    "",
    'assets/img/scenes/scene1shovel.jpg',
    'assets/img/scenes/scene1noshovel.jpg',
    'assets/img/scenes/dark_forest.jpg',
    'assets/img/scenes/cabin_outside.jpg',
    'assets/img/scenes/cabin_inside.jpg',
    'assets/img/scenes/mill_outside.jpg',
    'assets/img/scenes/creekscene.jpg',
    'assets/img/scenes/mill_inside.jpg'
]


var LookAroundTxt = [
    "",
    "You look around",
    "You look around",
    "You look around",
    "You look around",
    "You look around, the cabin is quite cozy but there is nothing to really look at, the only thing that stands out is a green jerrycan.",
    "You look around, the windmill is silent, you hear the wind rush around your ears as you take deep breaths.",
    "You look around, you then catch yourself blankly staring at the rushing waters wondering what events in your life caused you to be in this predicament.",
    "You look around, You notice a rope dangling in the middle of the main room."
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
var button4 = document.createElement("button")
var invcontainer = document.getElementById('inventoryItem');
var invcontainer2 = document.createElement("img");
var deathnumber = 0;
var HasShovel = false;
var HasBucket = false;
var DugHoleForest = false;
var DugHoleCabin = false;
var SceneIndex = 0;





StartGame();

function StartGame() {
    title.innerHTML = "Spectral Amnesia";
    document.createElement(tagName = "link", href = "https://fonts.googleapis.com/css?family=Roboto&display=swap", rel = "stylesheet");
    gamecontainer.appendChild(maincanvas);
    gamebuttons.appendChild(button4);
    button4.style.display = 'none';
    button1.style.display = 'none';
    button2.innerHTML = 'Wake up';
    button3.innerHTML = 'Give up'
    description.innerHTML = "You're unconscious and the faint sound burning echoes around you as you try to collect yourself, a burning smell stings your nostrills";
    button3.setAttribute('onclick', 'GameOverAnim(0)');
    button2.setAttribute('onclick', 'Scene1()')
    invcontainer.style.display = 'none';
}

function UpdateScene(NewSceneSrc) {
    var SceneImage = document.createElement("img");
    SceneImage.src = NewSceneSrc;
    SceneImage.id = 'SceneImage';
    description.appendChild(SceneImage);
}

function LookAround() {
    description.innerHTML = LookAroundTxt[SceneIndex];
    UpdateScene(ScenesList[SceneIndex]);
}

function GameOverAnim(deathnumber) {
    document.write(Death[deathnumber])
}

function Scene1() {
    SceneIndex = 1;
    description.innerHTML = 'You collect yourself as you notice the burning house, there is not a whole lot to look at besides the burning house and a shovel';
    UpdateScene(ScenesList[SceneIndex]);
    //Switch animation
    description.style.height = '60%';
    button2.innerHTML = 'Go into the forest';
    button2.setAttribute('onclick', 'SceneForest()');
    button3.innerHTML = 'Attempt to extinguish the fire';
    button3.setAttribute('onclick', 'GameOverAnim(1)');
    button1.style.display = 'inline-block';
    button1.innerHTML = 'Pick up the shovel';
    button1.setAttribute('onclick', 'Scene1noshovel()');
}

function Scene1noshovel() {
    SceneIndex = 2;
    description.innerHTML = 'You grabbed the shovel!';
    UpdateScene(ScenesList[SceneIndex]);
    button1.style.display = 'none';
    HasShovel = true;
    invcontainer.style.display = 'inline-block';
    invcontainer.src = 'assets/img/objects/shovel.png';
    button3.innerHTML = 'Attempt to extinguish the fire';
    button3.setAttribute('onclick', 'GameOverAnim(1)');
    button2.innerHTML = 'Go into the forest';
    button2.setAttribute('onclick', 'SceneForest()');
}

function SceneForest() {
    SceneIndex = 3;
    button4.style.display = 'none';
    if (HasShovel) {
        description.innerHTML = "You've found yourself in a forest, trees surround you, you could dig a hole whatever good that will do you";
        button3.setAttribute('onclick', 'Scene1noshovel()');
    } else {
        description.innerHTML = "You've found yourself in a forest, trees surround you";
        button3.setAttribute('onclick', 'Scene1()');
    }
    UpdateScene(ScenesList[SceneIndex]);
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
    UpdateScene(ScenesList[SceneIndex]);
    DugHoleForest = true;
    button1.style.display = 'none';
}

function CabinScene() {
    SceneIndex = 4;
    description.innerHTML = 'You walk along the forest path hoping it will lead to somewhere until you stumble upon a cozy looking cabin in the woods';
    UpdateScene(ScenesList[SceneIndex]);
    button1.display = 'none';
    button2.style.display = 'inline-block';
    if (HasShovel) {
        button1.style.display = 'inline-block';
        button1.innerHTML = 'Dig a hole';
        button1.setAttribute('onclick', 'DigHoleCabin()');
    }
    if (DugHoleCabin) {
        button1.style.display = 'none';
    }
    button2.innerHTML = 'Head inside the cabin';
    button2.setAttribute('onclick', 'CabinSceneInside()');
    button3.innerHTML = 'go back'
    button3.setAttribute('onclick', 'SceneForest()');
    button4.innerHTML = 'Continue on the path';
    button4.style.display = 'inline-block';
    button4.setAttribute('onclick', 'MillSceneOutside()');
}

function DigHoleCabin() {
    description.innerHTML = 'You dug a hole, what use it has is unclear';
    UpdateScene(ScenesList[SceneIndex]);
    DugHoleCabin = true;
    button1.style.display = 'none';
}

function CabinSceneInside() {
    SceneIndex = 5;
    button4.style.display = 'none';
    description.innerHTML = 'You go towards the cabin, to your surprise the door was unlocked and you head inside'
    UpdateScene(ScenesList[SceneIndex]);
    button1.style.display = 'inline-block';
    button1.innerHTML = 'Look around';
    button1.setAttribute('onclick', 'LookAround()');
    button2.style.display = 'none';
    button3.setAttribute('onclick', 'CabinScene()');
}

function MillSceneOutside() {
    SceneIndex = 6;
    description.innerHTML = 'You continue along the forest path again and stumble upon an old mill, you hear a creek nearby'
    UpdateScene(ScenesList[SceneIndex]);
    button1.style.display = 'inline-block';
    button1.innerHTML = 'Look around';
    button1.setAttribute('onclick', 'LookAround()');
    button2.style.display = 'inline-block';
    button4.style.display = 'none';
    button2.innerHTML = 'Head to the creek';
    button2.setAttribute('onclick', 'CreekScene()');
    button3.setAttribute('onclick', 'CabinScene()');
    button4.style.display = 'inline-block';
    button4.innerHTML = 'Head inside the mill';
    button4.setAttribute('onclick', 'MillSceneInside()');
}

function CreekScene() {
    SceneIndex = 7;
    description.innerHTML = "You walk around and find the creek, there's a bucket"
    UpdateScene(ScenesList[SceneIndex]);
    button1.style.display = 'inline-block';
    button1.innerHTML = 'Look around';
    button1.setAttribute('onclick', 'LookAround()');
    button2.innerHTML = 'Grab the bucket';
    button2.setAttribute('onclick', 'GetBucket()');
    if (HasBucket) {
        button2.style.display = 'none';
    } else {
        button2.style.display = 'inline-block';
    }
    button4.style.display = 'none';
    button3.setAttribute('onclick', 'MillSceneOutside()');
}

function GetBucket() {
    HasBucket = true;
    button2.style.display = 'none';
    description.innerHTML = 'You grabbed the bucket';
    UpdateScene(ScenesList[SceneIndex]);
    invcontainer2.src = 'assets/img/objects/bucket.png';
    invcontainer2.id = 'inventoryItem';
    gamecontainer.appendChild(invcontainer2);
    invcontainer2.style.marginLeft = '8%';
    return invcontainer2;
}

function MillSceneInside() {
    if (HasShovel) {
        SceneIndex = 8;
        description.innerHTML = 'you tried to open the door but the door seems to be stuck, you grab the shovel and then proceed to force the door open';
        UpdateScene(ScenesList[SceneIndex]);
        button1.innerHTML = 'Look around';
        button1.setAttribute('onclick', 'LookAround()');
        if (HasBucket) {
            button2.innerHTML = 'attach bucket';
            button2.setAttribute('onclick', 'AttachBucket()');
        } else {
            button2.innerHTML = 'pull the rope';
            button2.setAttribute('onclick', 'PullRope()');
        }
        button4.style.display = 'none';
        button3.setAttribute('onclick', 'MillSceneOutside()');
    } else {
        description.innerHTML = 'you tried to open de door, it seems to be stuck perhaps it could be forced open'
        UpdateScene(ScenesList[SceneIndex]);

    }
}

function PullRope() {
    description.innerHTML = 'you pull the rope and a hatch  with a set of stairs opens, as soon as you let go the hatch closes';
    UpdateScene(ScenesList[SceneIndex]);
}

function AttachBucket() {
    description.innerHTML = 'You attach the bucket to the rope and a hatch with a set of stairs open, you proceed up the stairs, there you find an odd room with multiple corkboards as well as a big map with a location circeled marked with the words burn it! You then hear a creaking before you could see what it was, you were knocked unconscious again.';
    button1.style.display = 'none';
    button2.style.display = 'none';
    button3.style.display = 'none';
    button4.style.display = 'none';
    invcontainer.style.display = 'none';
    invcontainer2.style.display = 'none';
    title.innerHTML = 'The End?';
}