const header = document.getElementById("header-logo")
const canvas = document.getElementById("instrument-canvas")
const tempoSlider = document.getElementsByName("tempo")

const colorfix = "#topbar { filter: invert(100); }"
style = document.createElement('style')
style.innerHTML = colorfix
document.head.appendChild(style)

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