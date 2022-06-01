
// initialize display elements
const todayDisplay = document.querySelector(".today");
const visitsDisplay = document.querySelector(".visits");

// get the stored value in localStorage
let numVisits = Number(window.localStorage.getItem("visits-ls"));
// get the number of milliseconds (date in milliseconds) the last time the page was visited
let numMills = Number(window.localStorage.getItem("mills-ls"));

// determine if this is the first visit or display the number of visits.
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit!`;
}

// increment the number of visits.
numVisits++;
// store the new number of visits value (writing/saving the new number to the local storage)
localStorage.setItem("visits-ls", numVisits);

// show todays date.
//todayDisplay.textContent = Date.now();

if (numMills !== 0) {
    numDays = Math.round((Date.now() - numMills) / 86400000); 
	todayDisplay.textContent = numDays;

} else {
	todayDisplay.textContent = `This is your first visit!`;
}

// store the current date in number of Milliseconds 
numMills = Date.now();
localStorage.setItem("mills-ls", numMills);