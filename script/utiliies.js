// input Field Value getting function
function getInputFieldValueById(inputFieldId) {
  const inputField = document.getElementById(inputFieldId);
  const inputFieldValueString = inputField.value;
  const inputFieldValue = parseFloat(inputFieldValueString);
  inputField.value = "";
  return inputFieldValue;
}

// Text Element Value getting function

function getTextElementValueById(elementId) {
  const element = document.getElementById(elementId);
  const elementValueString = element.innerText;
  const elementValue = parseFloat(elementValueString);
  return elementValue;
}

// Text Element Value Setting Funcion
function setTextElementValueById(elementId, setValue) {
  const element = document.getElementById(elementId);
  element.innerText = setValue;
}
