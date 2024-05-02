// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  let is_party = false;
  let has_selected = false;
  const horn = document.getElementById("horn-select");
  const sound_img = document.querySelector("img");
  const slider = document.getElementById("volume");
  const vol_img = document.querySelector("div > img");
  const audio = document.querySelector("audio");
  const btn = document.querySelector("button");
  const jsConfetti = new JSConfetti();

  horn.addEventListener("change", (event) => {
      if(event.target.value == "air-horn"){
        is_party = false;
        has_selected = true;
        sound_img.src = "assets/images/air-horn.svg";
        audio.src = "assets/audio/air-horn.mp3";
      }else if(event.target.value == "car-horn"){
        is_party = false;
        has_selected = true;
        sound_img.src = "assets/images/car-horn.svg";
        audio.src = "assets/audio/car-horn.mp3";
      }else if(event.target.value == "party-horn"){
        is_party = true;
        has_selected = true;
        sound_img.src = "assets/images/party-horn.svg";
        audio.src = "assets/audio/party-horn.mp3";
      }else{
        is_party = false;
        has_selected = false;
        sound_img.src = "assets/images/no-image.png";
        audio.src = "";
      }
  });

  slider.addEventListener("input", function() {
    let vol = Number(this.value);
    audio.volume = vol/100;
    if(vol == 0){
      vol_img.src = "assets/icons/volume-level-0.svg";
    }
    else if (vol < 33){
      vol_img.src = "assets/icons/volume-level-1.svg";
    }
    else if (vol < 67){
      vol_img.src = "assets/icons/volume-level-2.svg";
    }
    else{
      vol_img.src = "assets/icons/volume-level-3.svg";
    }
  });

  btn.addEventListener("click", function(){
    if(has_selected){
      audio.play();
      if(is_party){
        jsConfetti.addConfetti();
      }
    }
  });
}