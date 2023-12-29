function calculateTriangleArea() {
  const baseField = document.getElementById("triangle-base");
  const baseFieldValue = baseField.value;
  const baseValue = parseFloat(baseFieldValue);

  const heightField = document.getElementById("triangle-height");
  const heightFieldValue = heightField.value;
  const heightValue = parseFloat(heightFieldValue);

  const area = 0.5 * baseValue * heightValue;
  const areaValue = document.getElementById("triangle-area");
  areaValue.innerText = area;
  console.log(area);
}

function calculateRectangleArea() {
  const width = getInputField("rectangle-width");
  const length = getInputField("rectangle-length");
  const area = width * length;
  setElementValue("rectangle-area", area);
}
function calculateParallelogramArea() {
  const base = getInputField("parallelogram-base");
  const height = getInputField("parallelogram-height");
  const area = base * height;
  setElementValue("parallelogram-area", area);
}

/* Reuseable Function */
function getInputField(inputID) {
  const inputField = document.getElementById(inputID);
  const inputFieldText = inputField.value;
  const value = parseFloat(inputFieldText);
  return value;
}
function setElementValue(elementID, area) {
  const elementTextValue = document.getElementById(elementID);
  elementTextValue.innerText = area;
}
