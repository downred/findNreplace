

document.getElementById("commit").onclick=findNreplace; //set up go button


//variables
var textToShow = document.getElementById("inputText");
var projected = document.getElementById("projectedText");
var toFind = document.getElementById("find").value;
var toReplace = document.getElementById("replace").value; 

// set up text area to project the input into the paragraph
textToShow.addEventListener('input',updateValue);

function updateValue(text) {
    projected.textContent=text.target.value;
}

// replace function
function findNreplace() {
    
}