const radiusInput = document.getElementById("radiusInput");
const calcButton = document.getElementById("calcButton");
const outputContainer = document.getElementById("output");
const PI = 3.14;

calcButton.addEventListener('click', handleClick);

function handleClick(){
    let radius = radiusInput.value
    let area = PI * radius * radius;
    let circumference = 2 * PI * radius;
    outputContainer.innerText = `Laukums: ${area}; R.L garums: ${circumference}`;

    // console.log(radiusInput.value)
}