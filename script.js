body {
  margin:0;
  background:black;
  color:white;
  font-family:'Segoe UI', sans-serif;
  display:flex;
  justify-content:center;
  align-items:center;
  height:100vh;
  text-align:center;
  overflow:hidden;
}

/* text */
.text {
  max-width:90%;
  font-size:1.2rem;
  line-height:1.7;
  opacity:0;
  transition:1s;
}

/* glow */
.glow {
  animation: glow 2s infinite alternate;
}

@keyframes glow {
  from { text-shadow:0 0 10px pink; }
  to { text-shadow:0 0 30px gold; }
}

/* album */
.album {
  position:absolute;
  bottom:20px;
  width:100%;
}

.album h2 {
  color:gold;
}

/* gallery */
.gallery {
  display:flex;
  justify-content:center;
  gap:10px;
}

.gallery img {
  width:90px;
  height:90px;
  object-fit:cover;
  border-radius:10px;
  transition:0.3s;
}

.gallery img:hover {
  transform:scale(1.1);
}

/* viewer */
.viewer {
  position:fixed;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background:black;
  display:flex;
  justify-content:center;
  align-items:center;
}

.viewer img {
  width:90%;
  max-width:400px;
  border-radius:15px;
}

/* floating hearts */
.heart {
  position:absolute;
  font-size:20px;
  animation: float 6s linear infinite;
}

@keyframes float {
  from { transform:translateY(100vh); opacity:1; }
  to { transform:translateY(-10vh); opacity:0; }
}

/* hidden */
.hidden {
  display:none;
}
