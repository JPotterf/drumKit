window.addEventListener("load", () => {
  const sounds = document.querySelectorAll(".sound");
  const pads = document.querySelectorAll(".pads div");
  const visual = document.querySelector(".visual");
  const colors = [
    "#60d394",
    "#d36060",
    "#c060d3",
    "#d3d160",
    "#606bd3",
    "#60c2d3",
    "#65b644",
    "#3c2e8b",
    "#a02d25"
  ];

  pads.forEach((pad, index) => {
    pad.addEventListener("click", function() {
      sounds[index].currentTime = 0;
      sounds[index].play();
      createBubble(index);
    });
  });

  const createBubble = index => {
    //Create bubbles
    const bubble = document.createElement("div");
    visual.appendChild(bubble);
    bubble.style.backgroundColor = colors[index];
    bubble.style.animation = `jump 1s ease`;
    bubble.addEventListener("animationend", function() {
      visual.removeChild(this);
    });
  };
  window.onkeypress = function(e) {
    keyPress(e);
  };

  function keyPress(e) {
    var key = e.keyCode;

    if (key === 97 || key === 65) {
      i = 0;
      activePad("pad1");
    } else if (key === 83 || key === 115) {
      i = 1;
      activePad("pad2");
    } else if (key === 68 || key === 100) {
      i = 2;
      activePad("pad3");
    } else if (key === 70 || key === 102) {
      i = 3;
      activePad("pad4");
    } else if (key === 71 || key === 103) {
      i = 4;
      activePad("pad5");
    } else if (key === 72 || key === 104) {
      i = 5;
      activePad("pad6");
    } else if (key === 74 || key === 106) {
      i = 6;
      activePad("pad7");
    } else if (key === 75 || key === 107) {
      i = 7;
      activePad("pad8");
    } else if (key === 76 || key === 108) {
      i = 8;
      activePad("pad9");
    } else {
      return;
    }

    sounds[i].currentTime = 0;
    sounds[i].play();
    createBubble(i);
  }

  function activePad(pad) {
    var drumPad = document.getElementsByClassName(pad)[0];
    drumPad.classList.add("highlight");
    setTimeout(function() {
      drumPad.classList.remove("highlight");
    }, 100);
  }
});
