function createSnow() {
    const snow = document.createElement("div");
  
    snow.innerHTML = "<img id='snowflake' src='https://static.vecteezy.com/system/resources/previews/001/194/635/non_2x/snowflake-png.png'>";
    snow.classList.add("snow");
  
    document.body.appendChild(snow);
  
    snow.style.left = Math.random() * 100 + "vw";
  
    snow.style.animationDuration = math.random() * 5 + 8 + "s";
  
    setTimeout(() => {
      snow.remove();
    }, 5000);
  }
  
  setInterval(createSnow, 800);
  