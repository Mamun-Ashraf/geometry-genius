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