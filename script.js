// creates a num by num grid
function createGrid(num) {
    // creates a reference to the overall container our grid will be in
    const container = document.querySelector(".container");

    const sizeDisplay = document.querySelector(".current-size");
    const sizeText = "" + num + " by " + num;
    sizeDisplay.textContent = sizeText;

    // for loop to construct each row, having num rows
    for (let i = 0; i < num; i++) {
        var row = document.createElement('div');
        row.setAttribute('class', 'gridRow')
        container.appendChild(row);

        // for loop to construct each row's elements, having num elements
        for (let j = 0; j < num; j++) {
            var element = document.createElement('div');
            element.setAttribute('class', 'element');
            element.style.opacity = 1;
            // calls a helper function to assign eventListeners
            setEvent(element);
            
            row.appendChild(element);
        }
    }
}

// function used to detach all previous nodes once a new size appears
function detachNodes(size) {
    var container = document.querySelector(".container");

    for (let i = 0; i < size; i++) {
        var row = document.querySelector(".gridRow");
        for (let j = 0; j < size; j++) {
            var element = document.querySelector(".element");
            row.removeChild(element);
        }
        container.removeChild(row);
    }
}

// helper function used to assign eventListeners to each box
function setEvent(element) {
    element.addEventListener("mouseover", () => {
        // values used to randomize color
        /*
        let rValue = Math.random() * 255;
        let bValue = Math.random() * 255;
        let gValue = Math.random() * 255;
        element.style.backgroundColor = 'rgb('+rValue+','+bValue+','+gValue+')';
        */

        element.style.opacity = element.style.opacity - 0.1;
        element.style.backgroundColor = "red";
    });
}

// function to add the change size button's evenListener and function
function createSizeButton() {
    var btn = document.querySelector(".change-size");
    btn.addEventListener('click', () => {
        var newSize = parseInt(prompt("What x by x size grid would you like?"));
        if (Number.isInteger(newSize) && newSize <= 100) {
            detachNodes(currentSize);
            currentSize = newSize;
            createGrid(currentSize);    
        }
        else {
            alert("Please only input positive integers to 100")
        }
    })
}

function startPlay(num) {
    createGrid(num);
    createSizeButton();
}

let currentSize = 16;

startPlay(currentSize);