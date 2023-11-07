// To change background color of cards

function getRandomColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red},${green},${blue})`;
}

const hoverColorCards = document.querySelectorAll('.hover-random-bg');

for (const hoverColorCard of hoverColorCards) {
    hoverColorCard.addEventListener('mouseenter', function () {
        hoverColorCard.style.backgroundColor = getRandomColor();
    });
}

for (const hoverColorCard of hoverColorCards) {
    hoverColorCard.addEventListener('mouseleave', function () {
        hoverColorCard.style.backgroundColor = '#fff';
    })
}

// calling the functions to show and hide cards input field

updateCardsInputValue(true, 'btn-edit-triangle', 'triangle-input-field');
updateCardsInputValue(true, 'btn-edit-rectangle', 'rectangle-input-field');
updateCardsInputValue(true, 'btn-edit-parallelogram', 'parallelogram-input-field');
updateCardsInputValue(true, 'btn-edit-rhombus', 'rhombus-input-field');
updateCardsInputValue(true, 'btn-edit-pentagon', 'pentagon-input-field');
updateCardsInputValue(true, 'btn-edit-ellipse', 'ellipse-input-field');

updateCardsInputValue(false, 'btn-check-triangle', 'triangle-input-field', 'triangle-base', 'triangle-height', 'triangle-base-input', 'triangle-height-input');

updateCardsInputValue(false, 'btn-check-rectangle', 'rectangle-input-field', 'rectangle-width', 'rectangle-length', 'rectangle-width-input', 'rectangle-length-input');

updateCardsInputValue(false, 'btn-check-parallelogram', 'parallelogram-input-field', 'parallelogram-base', 'parallelogram-height', 'parallelogram-base-input', 'parallelogram-height-input');

updateCardsInputValue(false, 'btn-check-rhombus', 'rhombus-input-field', 'rhombus-d1', 'rhombus-d2', 'rhombus-d1-input', 'rhombus-d2-input');

updateCardsInputValue(false, 'btn-check-pentagon', 'pentagon-input-field', 'pentagon-p', 'pentagon-base', 'pentagon-p-input', 'pentagon-base-input');

updateCardsInputValue(false, 'btn-check-ellipse', 'ellipse-input-field', 'ellipse-a', 'ellipse-b', 'ellipse-a-input', 'ellipse-b-input');


// Calling the functions to calculate area of shapes and display in calculate area section

calculateArea('btn-calculate-triangle', 'shape-triangle', 'triangle-base', 'triangle-height');
calculateArea('btn-calculate-rectangle', 'shape-rectangle', 'rectangle-width', 'rectangle-length');
calculateArea('btn-calculate-parallelogram', 'shape-parallelogram', 'parallelogram-base', 'parallelogram-height');
calculateArea('btn-calculate-rhombus', 'shape-rhombus', 'rhombus-d1', 'rhombus-d2');
calculateArea('btn-calculate-pentagon', 'shape-pentagon', 'pentagon-p', 'pentagon-base');
calculateArea('btn-calculate-ellipse', 'shape-ellipse', 'ellipse-a', 'ellipse-b');


