/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const METER_TO_FOOT = 3.28084
const LITER_TO_GALLON = 0.264172
const KILOGRAM_TO_POUND = 2.20462

const inputElm = document.querySelector("#input-form")
const pLength = document.querySelector("#conv-length")
const pVolume = document.querySelector("#conv-volume")
const pMass = document.querySelector("#conv-mass")

render()

document.querySelector("#btn").addEventListener("click", () => {
    render()
})

// Adjust width of input field
// https://stackoverflow.com/questions/3392493/adjust-width-of-input-field-to-its-input
inputElm.addEventListener("input", () => {
    inputElm.style.width = (inputElm.value.length + 2) + "ch"
})

function render() {
    const val = parseFloat(inputElm.value)
    if (val) {
        pLength.textContent = `${val} meters = ${(val * METER_TO_FOOT).toFixed(3)} feet | ${val} feet = ${(val / METER_TO_FOOT).toFixed(3)} meters`
        pVolume.textContent = `${val} liters = ${(inputElm.value * LITER_TO_GALLON).toFixed(3)} gallons | ${val} gallons = ${(inputElm.value / LITER_TO_GALLON).toFixed(3)} liters`
        pMass.textContent = `${val} kilos = ${(inputElm.value * KILOGRAM_TO_POUND).toFixed(3)} pounds | ${val} pounds = ${(inputElm.value / KILOGRAM_TO_POUND).toFixed(3)} kilos`
    }
    else {
        alert("Please enter numbers")
    }
}