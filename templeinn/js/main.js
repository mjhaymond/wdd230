/**************************************************************************/
/*********************** Get Current Date for Header **********************/
const currentDateSpan = document.querySelector("#currentDate");

const now = new Date();
currentDateSpan.textContent = new Intl.DateTimeFormat("en-GB", {
  dateStyle: "full",
}).format(now);



/**************************************************************************/
/********************* Hamburger Menu *************************************/
function toggleMenu() {
	document.getElementsByClassName("mainMenu")[0].classList.toggle("responsive");
}



/**************************************************************************/
/********************* Date for the footer********************************/
let newDate = new Date();

document.getElementById("currentYear").textContent = newDate.getFullYear();

let lastUpdated = document.lastModified;

document.getElementById("updatedDate").textContent = lastUpdated;

