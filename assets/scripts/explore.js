// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {

}

window.speechSynthesis.onvoiceschanged = () => {
  const synth = window.speechSynthesis;
  const select = document.getElementById("voice-select");
  const input = document.getElementById("text-to-speak");
  const btn = document.querySelector("button");
  const img = document.querySelector("img");
  let voices = synth.getVoices();

  for (let i = 0; i < voices.length; i++) {
    const option = document.createElement("option");
    option.textContent = `${voices[i].name} (${voices[i].lang})`;

    if (voices[i].default) {
      option.textContent += " — DEFAULT";
    }

    option.setAttribute("data-lang", voices[i].lang);
    option.setAttribute("data-name", voices[i].name);
    select.appendChild(option);
  }

  btn.addEventListener("click", function(){
    const utterThis = new SpeechSynthesisUtterance(input.value);
    const selectedOption = select.selectedOptions[0].getAttribute("data-name");
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
        break;
      }
    } 

    utterThis.addEventListener("end", function(){
      img.src = "assets/images/smiling.png";
    });
    img.src = "assets/images/smiling-open.png";
    synth.speak(utterThis);
  });
};