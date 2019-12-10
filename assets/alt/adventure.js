var game = [
    {
        indexnum: 0,
        scenename: "Start",
        sceneimg: "",
        scenedesc: "You're unconscious and the faint sound burning echoes around you as you try to collect yourself, a burning smell stings your nostrills",
        txtbutton1: 'Wake up',
        txtbutton2: 'Give up',
        txtbutton3: '',
        txtbutton4: '',

        stylebutton1: 'inline-block',
        stylebutton2: 'inline-block',
        stylebutton3: 'none',
        stylebutton4: 'none',

        funcbutton1: "masterfunc(1)",
        funcbutton2: "",
        funcbutton3: "",
        funcbutton4: "",
    },

    {
        indexnum: 1,
        scenename: "SceneBurningHouse00",
        sceneimg: "assets/img/scenes/scene1shovel.jpg",
        scenedesc: "You collect yourself as you notice the burning house, there is not a whole lot to look at besides the burning house and a shovel",
        txtbutton1: 'Pick up shovel',
        txtbutton2: 'Go into the forest',
        txtbutton3: 'Attempt to extinguish the fire',
        txtbutton4: '',

        stylebutton1: 'inline-block',
        stylebutton2: 'inline-block',
        stylebutton3: 'inline-block',
        stylebutton4: 'none',

        funcbutton1: "masterfunc(2)",
        funcbutton2: "masterfunc(3)",
        funcbutton3: "",
        funcbutton4: "",
    },

    {
        indexnum: 2,
        scenename: "Burninghouse01",
        sceneimg: "assets/img/scenes/scene1noshovel.jpg",
        scenedesc: "You picked up the shovel",
        txtbutton1: '',
        txtbutton2: 'Go into the forest',
        txtbutton3: 'Attempt to extinguish the fire',
        txtbutton4: '',

        stylebutton1: 'none',
        stylebutton2: 'inline-block',
        stylebutton3: 'inline-block',
        stylebutton4: 'none',

        funcbutton1: "",
        funcbutton2: "masterfunc(3)",
        funcbutton3: "",
        funcbutton4: "",
    },

    {
        indexnum: 3,
        scenename: "Forest",
        sceneimg: "assets/img/scenes/dark_forest.jpg",
        scenedesc: "You've found yourself in a forest, trees surround you",
        txtbutton1: 'Dig a hole',
        txtbutton2: 'Continue on the pathway',
        txtbutton3: 'Go back',
        txtbutton4: '',

        stylebutton1: 'none',
        stylebutton2: 'inline-block',
        stylebutton3: 'inline-block',
        stylebutton4: 'none',

        funcbutton1: "DigHole(3)",
        funcbutton2: "masterfunc(4)",
        funcbutton3: "masterfunc(2)",
        funcbutton4: "",
    },

    {
        indexnum: 4,
        scenename: "Cabin_outside",
        sceneimg: "assets/img/scenes/cabin_outside.jpg",
        scenedesc: "You walk along the forest path hoping it will lead to somewhere until you stumble upon a cozy looking cabin in the woods",
        txtbutton1: 'Dig a hole',
        txtbutton2: 'Head inside the cabin',
        txtbutton3: 'Go back',
        txtbutton4: 'Continue on the pathway',

        stylebutton1: 'none',
        stylebutton2: 'inline-block',
        stylebutton3: 'inline-block',
        stylebutton4: 'inline-block',

        funcbutton1: "DigHole(4)",
        funcbutton2: "masterfunc(5)",
        funcbutton3: "masterfunc(3)",
        funcbutton4: "masterfunc(6)",
    },

    {
        indexnum: 5,
        scenename: "Cabin_Inside",
        sceneimg: "assets/img/scenes/cabin_inside.jpg",
        scenedesc: "You go towards the cabin, to your surprise the door was unlocked and you head inside",
        txtbutton1: 'Look around',
        txtbutton2: '',
        txtbutton3: 'Go back',
        txtbutton4: '',

        stylebutton1: 'inline-block',
        stylebutton2: 'none',
        stylebutton3: 'inline-block',
        stylebutton4: 'none',

        funcbutton1: "",
        funcbutton2: "",
        funcbutton3: "masterfunc(4)",
        funcbutton4: "",
    },

    {
        indexnum: 6,
        scenename: "Mill_outside",
        sceneimg: "assets/img/scenes/mill_outside.jpg",
        scenedesc: "You continue along the forest path again and stumble upon an old mill, you hear a creek nearby",
        txtbutton1: 'Look around',
        txtbutton2: 'Head to the creek',
        txtbutton3: 'Go back',
        txtbutton4: 'Head inside the mill',

        stylebutton1: 'inline-block',
        stylebutton2: 'inline-block',
        stylebutton3: 'inline-block',
        stylebutton4: 'inline-block',

        funcbutton1: "",
        funcbutton2: "",
        funcbutton3: "masterfunc(4)",
        funcbutton4: "masterfunc(7)",
    },

    {
        indexnum: 7,
        scenename: "Mill_outside_no_shovel",
        sceneimg: "assets/img/scenes/mill_outside.jpg",
        scenedesc: "you tried to open the door, it seems to be stuck perhaps it could be forced open",
        txtbutton1: 'Look around',
        txtbutton2: 'Head to the creek',
        txtbutton3: 'Go back',
        txtbutton4: 'Head inside the mill',

        stylebutton1: 'inline-block',
        stylebutton2: 'inline-block',
        stylebutton3: 'inline-block',
        stylebutton4: 'inline-block',

        funcbutton1: "",
        funcbutton2: "",
        funcbutton3: "masterfunc(4)",
        funcbutton4: "masterfunc(7)",
    },

    {
        indexnum: 8,
        scenename: "Creek",
        sceneimg: "assets/img/scenes/creekscene.jpg",
        scenedesc: "You walk around and find the creek, there's a bucket",
        txtbutton1: 'Look around',
        txtbutton2: 'Grab the bucket',
        txtbutton3: 'Go back',
        txtbutton4: '',

        stylebutton1: 'inline-block',
        stylebutton2: 'inline-block',
        stylebutton3: 'inline-block',
        stylebutton4: 'none',

        funcbutton1: "",
        funcbutton2: "GetBucket()",
        funcbutton3: "masterfunc(6)",
        funcbutton4: "",
    },
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
var button4 = document.createElement("button");
var invcontainer = document.getElementById('inventoryItem');
var invcontainer2 = document.createElement("img");
var deathnumber = 0;
var HasShovel = false;
var HasBucket = false;
var DugHoleForest = false;
var DugHoleCabin = false;
var SceneIndex = 0;

title.innerHTML = "Spectral Amnesia"
description.style.height = '60%';

masterfunc(SceneIndex);

function masterfunc(SceneIndex) {
    description.innerHTML = game[SceneIndex].scenedesc;
    var SceneImage = document.createElement("img");
    SceneImage.src = game[SceneIndex].sceneimg
    SceneImage.id = 'SceneImage';
    description.appendChild(SceneImage);

    gamebuttons.appendChild(button4);

    button1.innerHTML = game[SceneIndex].txtbutton1;
    button2.innerHTML = game[SceneIndex].txtbutton2;
    button3.innerHTML = game[SceneIndex].txtbutton3;
    button4.innerHTML = game[SceneIndex].txtbutton4;

    button1.style.display = game[SceneIndex].stylebutton1;
    button2.style.display = game[SceneIndex].stylebutton2;
    button3.style.display = game[SceneIndex].stylebutton3;
    button4.style.display = game[SceneIndex].stylebutton4;

    button1.setAttribute('onclick', game[SceneIndex].funcbutton1);
    button2.setAttribute('onclick', game[SceneIndex].funcbutton2);
    button3.setAttribute('onclick', game[SceneIndex].funcbutton3);
    button4.setAttribute('onclick', game[SceneIndex].funcbutton4);
    console.log("Current scene is " + game[SceneIndex].scenename);

    if (SceneIndex == 2) {
        HasShovel = true;
        invcontainer.src = 'assets/img/objects/shovel.png';
    }

    if (HasShovel && SceneIndex == 3 || HasShovel && SceneIndex == 4) {
        button1.style.display = 'inline-block';
    }

    if (HasShovel && SceneIndex == 6 || HasShovel && SceneIndex == 7) {
        button4.setAttribute('onclick', 'masterfunc(9)');
    }

    if (HasBucket && SceneIndex == 9) {
        button3.innerHTML = 'attach bucket';
        button3.setAttribute('onclick', 'masterfunc(10)');
    }
}

function DigHole(SceneIndex) {
    description.innerHTML = 'you dug a hole what use it has is unclear';
    var SceneImage = document.createElement("img");
    SceneImage.src = game[SceneIndex].sceneimg;
    SceneImage.id = 'SceneImage';
    description.appendChild(SceneImage);
    button1.style.display = 'none';
}

function GetBucket(SceneIndex) {
    description.innerHTML = 'you grabbed the bucket';
    var SceneImage = document.createElement("img");
    SceneImage.src = game[SceneIndex].sceneimg;
    SceneImage.id = 'SceneImage';
    description.appendChild(SceneImage);
    button2.style.display = 'none';
    HasBucket = true;
}