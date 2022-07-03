const requestURL = 'https://mjhaymond.github.io/wdd230/templeinn/json/temples.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing

    const temples = jsonObject['temples'];
    const groups = document.querySelector('.templeCards');

    temples.forEach(temple => {
            // Create elements to add to the document  
            let  picture = document.createElement('img');        
            let  group = document.createElement('div');
            let  templeName = document.createElement('h2');
            let  title = document.createElement('h3');
            let  address = document.createElement('p');
            let  phoneNumber = document.createElement('p');
            let  email = document.createElement('p');
            let  services = document.createElement('p');
            let  announcement = document.createElement('p');
            let  groundbreaking = document.createElement('p');
            let  dedication = document.createElement('p');
           

            // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
            picture.setAttribute('src', "images/" + temple.picture);
            picture.setAttribute('alt', `${temple.templeName}`);
            picture.setAttribute('loading', 'lazy');

          
            // Change the textContent property of the h3 element to contain the companies full name
            templeName.textContent = `${temple.templeName}`;
            title.textContent = `${temple.title}`;
            address.textContent = `${temple.address}`;
            phoneNumber.textContent = `${temple.phoneNumber}`;
            email.textContent = `${temple.email}`;
            services.textContent = `${temple.services}`;
            announcement.textContent = `${temple.announcement}`;
            groundbreaking.textContent = `${temple.groundbreaking}`;
            dedication.textContent = `${temple.dedication}`;
          
          
            // Add/append the section(card) with the h2 element
            group.appendChild(picture);
            group.appendChild(templeName);
            group.appendChild(title);
            group.appendChild(address);
            group.appendChild(phoneNumber);
            group.appendChild(email);
            group.appendChild(services);
            group.appendChild(announcement);
            group.appendChild(groundbreaking);
            group.appendChild(dedication);
            
          
            // Add/append the existing HTML div with the cards class with the section(card)
            //document.querySelector('div.cards').appendChild(card);
            groups.append(group);
          
    });
  });


