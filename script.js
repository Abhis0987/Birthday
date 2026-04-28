document.addEventListener("DOMContentLoaded", function () {

const start = document.getElementById("start");
const cakeBox = document.getElementById("cakeBox");
const textDiv = document.getElementById("text");
const album = document.getElementById("album");

/* 🎂 countdown */
let sec = 5;
const countdown = document.getElementById("countdown");

setInterval(()=>{
  countdown.innerHTML = `Unlocking in ${sec}... ⏳`;
  sec--;
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

/* 💖 YOUR FULL MESSAGE */
const lines = [
`To the most beautiful part of my life 💖`,
`With you, there’s a quiet kind of happiness I never knew I was missing ❤️`,
`Your kindness changed my life ✨`,
`तुम सिर्फ मेरी खुशी नहीं हो… तुम मेरा सुकून हो 🌸`,
`तुम्हारे साथ हर सपना थोड़ा और करीब ❤️`,
`Happy 24th Birthday Baacha 🎂❤️`,
`I love you… forever 💫`
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

/* emojis floating */
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
