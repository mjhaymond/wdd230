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
            let  title1 = document.createElement('h3');
            let  address = document.createElement('p');
            let  title2 = document.createElement('h3');
            let  phoneNumber = document.createElement('p');
            let  title3 = document.createElement('h3');
            let  email = document.createElement('p');
            let  title4 = document.createElement('h3');
            let  services = document.createElement('p');
            let  title5 = document.createElement('h3');
            let  announcement = document.createElement('p');
            let  groundbreaking = document.createElement('p');
            let  dedication = document.createElement('p');
           

            // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
            picture.setAttribute('src', "images/" + temple.picture);
            picture.setAttribute('alt', `${temple.templeName}`);
            picture.setAttribute('loading', 'lazy');

          
            // Change the textContent property of the h3 element to contain the companies full name
            templeName.textContent = `${temple.templeName}`;
            title1.textContent = `${temple.title1}`;
            address.textContent = `${temple.address}`;
            title2.textContent = `${temple.title2}`;
            phoneNumber.textContent = `${temple.phoneNumber}`;
            title3.textContent = `${temple.title3}`;
            email.textContent = `${temple.email}`;
            title4.textContent = `${temple.title4}`;
            services.textContent = `${temple.services}`;
            title5.textContent = `${temple.title5}`;
            announcement.textContent = `${temple.announcement}`;
            groundbreaking.textContent = `${temple.groundbreaking}`;
            dedication.textContent = `${temple.dedication}`;
          
          
            // Add/append the section(card) with the h2 element
            group.appendChild(picture);
            group.appendChild(templeName);
            group.appendChild(title1);
            group.appendChild(address);
            group.appendChild(title2);
            group.appendChild(phoneNumber);
            group.appendChild(title3);
            group.appendChild(email);
            group.appendChild(title4);
            group.appendChild(services);
            group.appendChild(title5);
            group.appendChild(announcement);
            group.appendChild(groundbreaking);
            group.appendChild(dedication);
            
          
            // Add/append the existing HTML div with the cards class with the section(card)
            //document.querySelector('div.cards').appendChild(card);
            groups.append(group);
          
    });
  });


