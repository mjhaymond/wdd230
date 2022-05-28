// get all imgs with data-scr attribute
let imagesToLoad = document.querySelectorAll("img[data-src]");
const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {
        image.removeAttribute('data-src')
    };
};

const imgOptions = {
    threshold: 1,
    rootMargin: "0px 0px -200px 0px"
};

if('IntersectionObser' in window) {
    const observer = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if(item.isIntersecting) {
                loadImages(item.target);
                observer.unobserve(item.target);
            }
        });
}, imgOptions);


imagesToLoad.forEach((img) => {
    loadImages(img);
});
} else {
    imagesToLoad.forEach((img) => {
        loadImages(img);
    });
}








/*
// get all imgs with data-scr attribute
let imagesToLoad = document.querySelectorAll("img[data-src]");

function preloadImage(img) {
    const src = img.getAttribute("data-src");
    if(!src) {
        return;
    }

    img.src = src;
}


const imgOptions = {
    threshold: 1,
    rootMargin: "0px 0px -500px 0px"
};

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
entries.forEach(entry => {
    if (!entry.isIntersecting) {
        return;   
    } else {
        preloadImage(entry.target);
        imgObserver.unobserve(entry.target);
    }
})
}, imgOptions)

images.forEach(image => {
    imgObserver.observe(image);
});

*/




















/*
// get all imgs with data-scr attribute
const imagesToLoad = document.querySelectorAll("img[data-src]");


// optional parameters being set for the IntersectionalObserver
const imgOptions = {

};

const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {image.removeAttribute('data-src');};
};

// first check to see if Intersection Observer is spported
if('IntersectionObserver' in window) {
    const imgObserver = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
        });
    }, imgOptions);

    // Loop through each img and check status and load if necessary
    imagesToLoad.forEach((img) => {
        imgObserver.observe(img);
    });
}
else { //load all images if not supported
}
*/