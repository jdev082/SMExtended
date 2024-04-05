const header = document.getElementById("header-logo")
const canvas = document.getElementById("instrument-canvas")
const tempoSlider = document.getElementsByName("tempo")

header.style.color = "white"

let color = browser.storage.sync.get("color");
color.then(setBackground, () => {return})

let tlimit = browser.storage.sync.get("tlimit");
tlimit.then(setTLimit, (error) => {alert(error)});

function setBackground(c) {
    document.body.style.backgroundColor = c.color
}

function setTLimit(t) {
    tempoSlider[0].max = t.tlimit;
}

header.innerText = "Song Maker Extended"