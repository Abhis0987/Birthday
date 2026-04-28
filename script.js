const envelope = document.getElementById("envelope");
const letterBox = document.getElementById("letterBox");
const text = document.getElementById("text");
const music = document.getElementById("music");

envelope.onclick = () => {
  envelope.style.display = "none";
  letterBox.classList.remove("hidden");
  music.play();
  type();
};

const msg = `To the one who owns my heart... Baacha ❤️

Pata hai...
life itni beautiful kab lagti hai?

Jab tum mere saath hoti ho.

Tum meri aadat ho,
meri peace ho,
aur meri sabse beautiful feeling ho.

Main promise karta hoon...
main kabhi bhi is pyaar ko fade nahi hone dunga.

Happy Birthday Baacha ❤️`;

let i = 0;

function type(){
  if(i < msg.length){
    text.innerHTML += msg.charAt(i);
    i++;
    setTimeout(type,40);
  }
}

function startMemories(){
  document.getElementById("memories").classList.remove("hidden");

  let imgs = ["assets/img1.jpg","assets/img2.jpg","assets/img3.jpg"];
  let index = 0;

  setInterval(()=>{
    index = (index + 1) % imgs.length;
    document.getElementById("slide").src = imgs[index];
  },2000);

  setTimeout(()=>{
    document.getElementById("ending").classList.remove("hidden");
  },7000);
}

/* playful NO button */
function moveNo(){
  const btn = document.querySelector(".no");
  btn.style.position = "absolute";
  btn.style.left = Math.random()*80 + "%";
  btn.style.top = Math.random()*80 + "%";
}
