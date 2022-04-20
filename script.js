

document.getElementById("commit").onclick=findNreplace; //set up go button


//variables
var textToShow = document.getElementById("inputText");
var projected = document.getElementById("projectedText");
var toFind = document.getElementById("find");
var toReplace = document.getElementById("replace"); 

// set up text area to project the input into the paragraph
textToShow.addEventListener('input',updateValue);

function updateValue(text) {
    projected.textContent=text.target.value;
}

// replace function
function findNreplace() {
    var str = projected.innerText;
    var regex = new RegExp(toFind.value, 'g')
    var found = projected.innerText.match(regex);
    document.write(str.replace(regex.source, toReplace.value))
    console.log(regex.source);
}