const radiusInput = document.getElementById("radiusInput");
const calcButton = document.getElementById("calcButton");
const outputContainer = document.getElementById("output");
const PI = 3.14;

calcButton.addEventListener('click', handleClick);

function handleClick(){
    outputContainer.innerText = 2 * PI * radiusInput.value;

    // console.log(radiusInput.value)
}