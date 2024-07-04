// creates a num by num grid
function createGrid(num) {
    // creates a reference to the overall container our grid will be in
    const container = document.querySelector(".container");
    container.removechild

    // for loop to construct each row, having num rows
    for (let i = 0; i < num; i++) {
        var row = document.createElement('div');
        row.setAttribute('class', 'gridRow')
        container.appendChild(row);

        // for loop to construct each row's elements, having num elements
        for (let j = 0; j < num; j++) {
            var element = document.createElement('div');
            element.setAttribute('class', 'element');

            // calls a helper function to assign eventListeners
            setEvent(element);
            
            row.appendChild(element);
        }
    }
}

// function used to detach all previous nodes once a new size appears
function detachNodes(size) {
    for (let i = 0; i < size; i++) {
        var row = document.querySelector(".gridRow");
        for (let j = 0; j < size; j++) {
            var element = document.querySelector(".element");
            row.removeChild(element);
        }
    }
}

// helper function used to assign eventListeners to each box
// also used to set the eventListener for the change size button
function setEvent(element) {
    element.addEventListener("mouseover", () => {
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
    })
}

function startPlay(num) {
    createGrid(num);
    createSizeButton();
}

let currentSize = 16;

startPlay(currentSize);