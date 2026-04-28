document.addEventListener("DOMContentLoaded", function () {

const start = document.getElementById("start");
const cakeBox = document.getElementById("cakeBox");
const textDiv = document.getElementById("text");
const album = document.getElementById("album");

/* 🎂 FIXED COUNTDOWN */
let sec = 5;
const countdown = document.getElementById("countdown");

const timer = setInterval(()=>{
  if(sec >= 0){
    countdown.innerHTML = `Unlocking in ${sec}... ⏳`;
    sec--;
  } else {
    clearInterval(timer);
    countdown.innerHTML = "Okay now tap the button 😏";
  }
},1000);

/* start */
window.startExperience = function(){
  start.style.display = "none";
  cakeBox.classList.remove("hidden");
  createDecorations();
};

/* cake */
window.cutCake = function(){
  document.getElementById("cake").innerHTML = "🍰";

  setTimeout(()=>{
    cakeBox.style.display = "none";
    textDiv.classList.remove("hidden");
    showNext();
  },1500);
};

/* 💖 FULL MESSAGE */
const lines = [
`To the most beautiful part of my life, 💖`,
`With you, there’s a quiet kind of happiness I never knew I was missing—soft, steady, and deeply real ❤️`,
`Your kindness and strength don’t just light up my world… they’ve changed the way I see life itself ✨`,
`With you, even silence feels complete, and the smallest moments turn into memories I want to hold onto forever 💫`,
`Here’s to us—growing together, standing by each other, and building a life filled with love, trust, and countless beautiful memories 🤍`,
`Your love has touched my soul in ways words will always fall short of… 😘`,
`कहते हैं प्यार शब्दों में नहीं उतरता… ❤️`,
`तुम सिर्फ मेरी खुशी नहीं हो… तुम मेरा सुकून हो 🌸`,
`तुम्हारे साथ हर सपना थोड़ा और करीब ❤️`,
`मैं तुम्हारे साथ हूँ… आज नहीं, हमेशा 🫂❤️`,
`Tumhe life ki har khushi mile, baccha 😘`,
`I love you… beyond everything 💖`,
`Forever yours, always 💫`
];

let i = 0;

function showNext(){
  if(i >= lines.length){
    album.classList.remove("hidden");
    return;
  }

  textDiv.innerHTML = lines[i];
  i++;
  setTimeout(showNext, 3000);
}

/* 🎈 floating emojis */
function createDecorations(){
  const deco = document.getElementById("decorations");

  setInterval(()=>{
    const el = document.createElement("div");

    const items = ["🎈","💖","💗","💓","✨","🎉","🎊"];
    el.innerHTML = items[Math.floor(Math.random()*items.length)];

    el.classList.add("float");
    el.style.left = Math.random()*100 + "vw";

    deco.appendChild(el);

    setTimeout(()=>el.remove(),8000);
  },200);
}

/* viewer */
window.openImg = function(src){
  document.getElementById("viewer").classList.remove("hidden");
  document.getElementById("fullImg").src = src;
}

window.closeImg = function(){
  document.getElementById("viewer").classList.add("hidden");
}

});
