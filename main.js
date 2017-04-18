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
button.addEventListener("click", buildIt);

// Add an event handler to the input field that checks if the user pressed the enter key, and if that happens, perform the conversion.
var enter = document.getElementById("inputNum");
enter.addEventListener("keydown", function(event) {
    if(event.keyCode == 13) {
        event.preventDefault();
    }
    if(event.keyCode == 13) {
        buildIt();
    }
});

var enter = document.getElementById("inputChar");
enter.addEventListener("keydown", function(event) {
    if(event.keyCode == 13) {
        event.preventDefault();
    }
    if(event.keyCode == 13) {
        buildIt();
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







