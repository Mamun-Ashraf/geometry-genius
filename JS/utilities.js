// To show and hide cards input field

function updateCardsInputValue(isEdit, cardUpdateButtonId, cardInputFieldId, firstSideValueId, secondSideValueId, firstSideValueInputId, secondSideValueInputId) {
    if (isEdit) {
        document.getElementById(cardUpdateButtonId).addEventListener('click', function () {
            const cardInputField = document.getElementById(cardInputFieldId);
            cardInputField.classList.remove('hidden');
        })
    }
    else {
        document.getElementById(cardUpdateButtonId).addEventListener('click', function () {
            const cardInputField = document.getElementById(cardInputFieldId);
            cardInputField.classList.add('hidden');

            const firstSideValue = document.getElementById(firstSideValueId);
            const secondSideValue = document.getElementById(secondSideValueId);
            const firstSideValueInput = document.getElementById(firstSideValueInputId).value;
            const secondSideValueInput = document.getElementById(secondSideValueInputId).value;

            firstSideValue.innerText = firstSideValueInput;
            secondSideValue.innerText = secondSideValueInput;
        })
    }
}

// To calculate area of shapes and display in calculate area section

function calculateArea(btnCalculateId, shapeNameId, firstSideValueId, secondSideValueId) {
    document.getElementById(btnCalculateId).addEventListener('click', function () {

        let { shapeName, firstSideValue, secondSideValue } = getShapeInfo(shapeNameId, firstSideValueId, secondSideValueId);

        if (!firstSideValue || !secondSideValue || firstSideValue <= 0 || secondSideValue <= 0) {
            alert('Please enter a positive integer or fraction number');
        } else {
            let areaString;
            switch (shapeName) {
                case 'Triangle':
                case 'Rhombus':
                case 'Pentagon':
                    areaString = (0.5 * firstSideValue * secondSideValue).toFixed(2);
                    break;
                case 'Rectangle':
                case 'Parallelogram':
                    areaString = (firstSideValue * secondSideValue).toFixed(2);
                    break;
                case 'Ellipse':
                    areaString = (3.1416 * firstSideValue * secondSideValue).toFixed(2);
                    break;
                default:
                    alert('Not a valid geometrical shape');
                    break;
            }

            if (areaString) {
                const area = parseFloat(areaString);
                addListItem(area, shapeNameId, firstSideValueId, secondSideValueId);
            }
        }

    })
}

// Getting shapes information to calculate area

function getShapeInfo(shapeNameId, firstSideValueId, secondSideValueId) {
    let shapeName = document.getElementById(shapeNameId).innerText;

    const firstSideString = document.getElementById(firstSideValueId).innerText;
    const firstSideValue = parseFloat(firstSideString);
    const secondSideString = document.getElementById(secondSideValueId).innerText;
    const secondSideValue = parseFloat(secondSideString);

    return { shapeName, firstSideValue, secondSideValue };
}

// Add list of areas to the 'calculate area'

function addListItem(area, shapeNameId, firstSideValueId, secondSideValueId) {

    const { shapeName, firstSideValue, secondSideValue } = getShapeInfo(shapeNameId, firstSideValueId, secondSideValueId);

    const list = document.getElementById('calculated-area-list');
    const li = document.createElement('li');

    li.innerHTML = `
        <p class='font-bold'>
        Area of ${shapeName} is : <span class='text-green-400 font-bold text-2xl'>${area} </span><span id='meterOrCm'>cm</span><sup>2, <br /> <span class='text-sm text-blue-400'>(when b = ${firstSideValue} cm and h = ${secondSideValue} cm)</span>
        </p>
        <button id='btn-m-sq' class='bg-blue-400 text-white font-bold rounded px-2 py-1 my-2'>
            Convert to m<sup>2
        </button>
        <button id='btn-cm-sq' class='hidden bg-blue-400 text-white font-bold rounded px-2 py-1 my-2'>
            Convert to cm<sup>2
        </button>
        <button id='btn-delete-area' class='text-2xl font-bold text-red-500 bg-white rounded px-3 py-1 ml-6'>X</button>
    `
    list.appendChild(li);
    li.querySelector('#btn-delete-area').addEventListener('click', function () {
        li.remove();
    })

    const areaInSquareMetersString = (area / 10000).toFixed(3);
    const areaInSquareMeters = parseFloat(areaInSquareMetersString);
    const btnSqM = li.querySelector('#btn-m-sq');
    btnSqM.addEventListener('click', function () {
        btnSqM.classList.add('hidden');
        const btnSqCm = li.querySelector('#btn-cm-sq');
        btnSqCm.classList.remove('hidden');
        li.querySelector('.text-green-400').textContent = areaInSquareMeters;
        li.querySelector('#meterOrCm').textContent = 'm';
    })

    const areaInSquareCentimetersString = ((area / 10000) * 10000).toFixed(3);
    const areaInSquareCentimeters = parseFloat(areaInSquareCentimetersString);
    const btnSqCm = li.querySelector('#btn-cm-sq');
    btnSqCm.addEventListener('click', function () {
        const btnSqM = li.querySelector('#btn-m-sq');
        btnSqM.classList.remove('hidden');
        btnSqCm.classList.add('hidden');
        li.querySelector('.text-green-400').textContent = areaInSquareCentimeters;
        li.querySelector('#meterOrCm').textContent = 'cm';
    })

}


function convertArea(btnConvertId) {

    const convertSqM = document.getElementById('btn-m-sq').textContent;
    const convertSqCm = document.getElementById('btn-sq-cm').textContent;
    const deleteArea = document.getElementById('btn-delete-area').textContent;
}
