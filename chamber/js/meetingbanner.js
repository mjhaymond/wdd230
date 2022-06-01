/**************** Meeting Banner on Mondays & Tuesdays ***************/
if(now.getDay() === 2 || now.getDay() === 1) {
    document.getElementById("banner").style.display = "block";
  }
  
  const close = document.querySelector("#close");
  
  close.addEventListener("click", () => {
    banner.style.display = "none";
  });
  