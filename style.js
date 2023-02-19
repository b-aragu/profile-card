window.onload = function () {
    const menuBtn = document.getElementById("menu");
    const socialBox = document.getElementById("social-media-box");
  
    menuBtn.onclick = function () {
      menuBtn.classList.toggle("menu-toggle");
      socialBox.classList.toggle("open");
    };
  };
  