// creates a num by num grid
function createGrid(num) {
    // creates a reference to the overall container our grid will be in
    const container = document.querySelector(".container");

    // for loop to construct each row, having num rows
    for (let i = 0; i < num; i++) {
        var row = document.createElement('div');
        row.setAttribute('class', 'gridRow')
        container.appendChild(row);

        // for loop to construct each row's elements, having num elements
        for (let j = 0; j < num; j++) {
            var element = document.createElement('div');
            element.setAttribute('class', 'element')
            row.appendChild(element);
        }
    }
}

createGrid(16);