//The object should have two key/value pairs.
var tree = {
    height: "",
    char: "",
};

//state variables
var heightInput;
var charInput;

// when button is clicked, run the buildIt()
var button = document.getElementById("growTree");
var num = document.getElementById("inputNum");
var char = document.getElementById("inputChar");
// no need for .value above add it below here at line 16
button.addEventListener("click", function(event) {
    if (num.value === "" || char.value === "") {
        alert("Both fields must have value");
    } else {
        buildIt();
    }
});

function isEmpty(event) {
    if (num.value === "" || char.value === "") {
        alert("Both fields must have value");
    } else {
        buildIt();
    }
};

// if return button is hit, run buildIt()
var enter = document.getElementById("inputNum");
enter.addEventListener("keydown", function(event) {
    if(event.keyCode == 13) {
        event.preventDefault();
    }
    if(event.keyCode == 13) {
        isEmpty();
    }
});

var enter = document.getElementById("inputChar");
enter.addEventListener("keydown", function(event) {
    if(event.keyCode == 13) {
        event.preventDefault();
    }
    if(event.keyCode == 13) {
        isEmpty();
    }
});

var space = " ";

//function grabs inputNum and inputChar from the DOM
function buildIt (event) {
    var heightInput = document.getElementById("inputNum").value;
    var charInput = document.getElementById("inputChar").value;
    for (i = 0; i < heightInput; i++) {
        var s = space.repeat(heightInput - i);
        var c = charInput.repeat(2 * i + 1);
        console.log(s + c);
    }
};







