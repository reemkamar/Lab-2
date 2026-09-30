var moodBox = document.getElementById("moodBox");
var moodTitle = document.getElementById("moodTitle");
var moodText = document.getElementById("moodText");
var counter = document.getElementById("counter");

var keyMessage = document.getElementById("keyMessage");
var windowInfo = document.getElementById("windowInfo");

var interactions = 0;

function changeMood(title, message, color) {
    moodTitle.innerHTML = title;
    moodText.innerHTML = message;
    moodBox.style.backgroundColor = color;
    interactions++;
    counter.innerHTML = "Interactions: " + interactions;
}

document.getElementById("happyButton").addEventListener("click", function() {
    changeMood(
        "Feeling Happy",
        "Keep smiling! Happiness is contagious.",
        "#fff7c7"
    );
});

document.getElementById("sadButton").addEventListener("click", function() {
    changeMood(
        "Feeling Sad",
        "It's okay to feel sad sometimes. Take care of yourself.",
        "#c7dfff"
    );
});

document.getElementById("angryButton").addEventListener("click", function() {
    changeMood(
        "Feeling Angry",
        "Take a deep breath and try to calm down.",
        "#ffc7c7"
    );
});

document.addEventListener("keydown", function(event) {

    if (event.key == "h") {
        keyMessage.innerHTML = "You pressed the 'H' key! Happy Mood Selected!";

        changeMood(
            "Feeling Happy",
            "Keep smiling! Happiness is contagious.",
            "#fff7c7"
        );
    }

    else if (event.key == "s") {
        keyMessage.innerHTML = "You pressed the 'S' key! Sad Mood Selected!";

        changeMood(
            "Feeling Sad",
            "It's okay to feel sad sometimes. Take care of yourself.",
            "#c7dfff"
        );
    }

    else if (event.key == "a") {
        keyMessage.innerHTML = "You pressed the 'A' key! Angry Mood Selected!";

        changeMood(
            "Feeling Angry",
            "Take a deep breath and try to calm down.",
            "#ffc7c7"
        );
    }
});

function updateWindowInfo() {
    windowInfo.innerHTML =
    "Browser window: " + window.innerWidth + "px wide x " + window.innerHeight + "px high.";
}

window.addEventListener("resize", updateWindowInfo);

updateWindowInfo();
document.getElementById("windowButton").addEventListener("click", function() {
    window.alert("Your browser is currently " + window.innerWidth + "px wide.");
});

