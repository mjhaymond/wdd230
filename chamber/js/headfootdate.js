/**************************************************************************/
/*********************** Get Current Date for Header **********************/
const currentDateSpan = document.querySelector("#currentDate");

const now = new Date();
currentDateSpan.textContent = new Intl.DateTimeFormat("en-GB", {
  dateStyle: "full",
}).format(now);

function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
  }
  
  const x = document.getElementById('hamburgerBtn')
  x.onclick = toggleMenu;


/**************************************************************************/
/********************* Date for the footer********************************/
let newDate = new Date();

document.getElementById("currentYear").textContent = newDate.getFullYear();

let lastUpdated = document.lastModified;

document.getElementById("updatedDate").textContent = lastUpdated;




