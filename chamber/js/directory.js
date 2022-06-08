const requestURL = 'https://mjhaymond.github.io/wdd230/chamber/json/data.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing

    const directory = jsonObject['directory'];
    const cards = document.querySelector('.cards');

    directory.forEach(company =>{
            // Create elements to add to the document
           
            let card = document.createElement('section');
            let logo = document.createElement('logo');
            let h2 = document.createElement('h2');
            let  address = document.createElement('p');
            let  phone = document.createElement('p');
            let  website = document.createElement('p');
            let  mlevel = document.createElement('p');
            let picture = document.createElement
           
          
            // Change the textContent property of the h2 element to contain the prophet's full name
            h2.textContent = `${company.name}`;
            address.textContent = `company address: ${company.address}`;
            phone.textContent = `company phone number: ${company.phone}`;
            website.textContent = `company website: ${company.website}`;
            mlevel.textContent = `company membership level: ${company.mlevel}`;
          
            // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
            logo.setAttribute('src', `${logo.imageurl}`);
            logo.setAttribute('alt', `Logo of ${company.name} company logo`);
            logo.setAttribute('loading', 'lazy');
          
            // Add/append the section(card) with the h2 element
            card.appendChild(h2);
            card.appendChild(address);
            card.appendChild(phone);
            card.appendChild(website);
            card.appendChild(mlevel);
          
            // Add/append the existing HTML div with the cards class with the section(card)
            //document.querySelector('div.cards').appendChild(card);
            cards.append(cards);
          
    });
  });
