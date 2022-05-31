/* Get Current Date for Header */
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

/* Date for the footer*/
let newDate = new Date();

document.getElementById("currentYear").textContent = newDate.getFullYear();

let lastUpdated = document.lastModified;

document.getElementById("updatedDate").textContent = lastUpdated;

/* Banner on Mondays & Tuesdays */
if(now.getDay() === 2 || now.getDay() === 1) {
  document.getElementById("banner").style.display = "block";
}

const close = document.querySelector("#close");

close.addEventListener("click", () => {
  banner.style.display = "none";
});


/**************************************************************************/
/************************DISCOVER PAGE - LAZY LOAD*************************/
let imagesToLoad = document.querySelectorAll('img[data-src]');
const loadImages = (image) => {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => {
    image.removeAttribute('data-src');
  };
};

const imgOptions = {
  threshold: 0.5,
  rootMargin: "0px 0px -250px 0px"
};

if('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if(item.isIntersecting) {
                loadImages(item.target);
                observer.unobserve(item.target)
            }
        })
    }, imgOptions);

    imagesToLoad.forEach((img) => {
        observer.observe(img);
    });
} else { 
    imagesToLoad.forEach((img) => {
        loadImages(img);
    });
}
