document.addEventListener("DOMContentLoaded", function () {

const start = document.getElementById("start");
const textDiv = document.getElementById("text");
const album = document.getElementById("album");

/* 🎂 FUNNY COUNTDOWN */
let seconds = 5;
const countdown = document.getElementById("countdown");

const timer = setInterval(()=>{
  countdown.innerHTML = `Unlocking surprise in ${seconds}... ⏳`;
  seconds--;

  if(seconds < 0){
    clearInterval(timer);
    countdown.innerHTML = "Okay fine… just tap already 😂";
  }
},1000);

/* 👉 start */
window.startExperience = function(){
  start.style.display = "none";
  textDiv.classList.remove("hidden");
  showNext();
};

/* 💖 YOUR FULL MESSAGE (NO TRIM) */
const lines = [
`To the most beautiful part of my life, 💖`,

`With you, there’s a quiet kind of happiness I never knew I was missing—soft, steady, and deeply real ❤️`,

`Your kindness and strength don’t just light up my world… they’ve changed the way I see life itself ✨`,

`With you, even silence feels complete, and the smallest moments turn into memories I want to hold onto forever 💫`,

`Here’s to us—growing together, standing by each other, and building a life filled with love, trust, and countless beautiful memories 🤍`,

`Your love has touched my soul in ways words will always fall short of… and I carry that feeling with me, every single day 😘`,

`कहते हैं प्यार शब्दों में नहीं उतरता,  
पर आज कोशिश कर रहा हूँ, ❤️`,

`ताकि तुम्हें बता सकूं कि तुम मेरे लिए कितनी कीमती हो 💖`,

`तुम सिर्फ मेरी खुशी नहीं हो… तुम मेरा सुकून हो, मेरी आदत हो, मेरा सबसे सच्चा एहसास हो 🌸`,

`तुम्हारे साथ, हर डर छोटा लगने लगता है, और हर सपना थोड़ा और करीब ❤️`,

`आज बस इतना जान लो —  
मैं तुम्हारे साथ हूँ… सिर्फ आज नहीं, हर आने वाले कल में भी 🫂❤️`,

`Tumhe life ki har khushi mile, baccha 😘`,

`Aur main hamesha tumhare saath rahunga—tumhari har muskurahat ke peeche, aur har mushkil ke samne khada ❤️`,

`I love you… beyond words, beyond reasons, beyond everything I ever knew 💖😘`,

`Forever yours, always 💫`
];

let i = 0;

function showNext(){
  if(i >= lines.length){
    album.classList.remove("hidden");
    return;
  }

  textDiv.style.opacity = 0;

  setTimeout(()=>{
    textDiv.innerHTML = lines[i];
    textDiv.style.opacity = 1;

    i++;
    setTimeout(showNext, 3200);
  },600);
}

/* 📸 viewer */
window.openImg = function(src){
  document.getElementById("viewer").classList.remove("hidden");
  document.getElementById("fullImg").src = src;
}

window.closeImg = function(){
  document.getElementById("viewer").classList.add("hidden");
}

});
