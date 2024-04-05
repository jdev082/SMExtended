function saveOptions(e) {
  e.preventDefault();
  browser.storage.sync.set({
    color: document.querySelector("#color").value,
    tlimit: document.querySelector("#tlimit").value,
  });
}

function restoreOptions() {
  function setColor(result) {
    document.querySelector("#color").value = result.color || "blue";
  }

  function setTLimit(result) {
    document.querySelector("#tlimit").value = result.tlimit || "400";
  }

  function onError(error) {
    console.log(`Error: ${error}`);
  }

  let color = browser.storage.sync.get("color");
  color.then(setColor, onError);

  let tlimit = browser.storage.sync.get("tlimit")
  tlimit.then(setTLimit, onError);
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);
