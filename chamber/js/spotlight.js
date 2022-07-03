/* ===== Spotlights =====*/
const URLrequest = "https://mjhaymond.github.io/wdd230/chamber/json/data.json";
const containers = document.querySelector(".box6");

fetch(URLrequest)
.then(function (response) {
    return response.json();
})
.then(function (jsonObject) {
    const companies = jsonObject["directory"];
    companies.forEach(fillSpotlight);
});

function fillSpotlight(company) {
    let card = document.querySelector(".busSec");
    let logo = document.querySelector(".busLogo");
    let companyName = document.querySelector(".busName");
    let phoneNumber = document.querySelector(".busPhone");
    let website = document.querySelector(".busWebsite");
    let membership = document.querySelector(".busMembership");
    

    logo.setAttribute('src', "images/" + company.logo);
    logo.setAttribute('alt', `${company.companyName}`);

    companyName.innerHTML = `${company.companyName}`;
    phoneNumber.innerHTML = company.phoneNumber;
    website.innerHTML = `${company.website}`;
    membership.innerHTML = company.membership;

    containers.appendChild(card);
}