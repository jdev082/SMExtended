const header = document.getElementById("header-logo")
const bottom = document.getElementById("bottom")
const canvas = document.getElementById("instrument-canvas")
const tempoSlider = document.getElementsByName("tempo")
const rangeCover = document.getElementsByClassName('range-cover')[0]
const settingsBtn = document.getElementById("settings-button")

header.innerText = "Song Maker Extended"
tempoSlider[0].max = "1000"
rangeCover.childNodes[0].max = "350"

function createBreak(parent = document, height = 1) {
    var br = document.createElement("br")
    br.style.lineHeight = height
    parent.appendChild(br)
}

createBreak(rangeCover, 2.8)
var tempoInput = document.createElement("input")
tempoInput.placeholder = "Tempo (Precise)"
tempoInput.addEventListener("change", () => {
    tempoSlider[0].value = tempoInput.value
})
rangeCover.appendChild(tempoInput)

//settingsBtn.addEventListener("click", () => {
//    bars = document.getElementById("bars")
//    bars.max = "9999"
//})

console.log(o)