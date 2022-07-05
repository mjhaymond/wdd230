const requestURL = 'https://mjhaymond.github.io/wdd230/templeinn/json/templeclosure.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing

    const templeclosure = jsonObject['templeclosure'];
    const groups = document.querySelector('.templeCards');

    templeclosure.forEach(templeclosure => {
            // Create elements to add to the document  
            let  group = document.createElement('div');
            let  title = document.createElement('h2');        
            let  date1 = document.createElement('p');
            let  date2 = document.createElement('p');
            let  date3 = document.createElement('p');
            let  date4 = document.createElement('p');
            let  date5 = document.createElement('p');
            let  date6 = document.createElement('p');
            let  date7 = document.createElement('p');
          
          
            // Change the textContent property of the h3 element to contain the companies full name
            title.textContent = `${templeclosure.title}`;
            date1.textContent = `${templeclosure.date1}`;
            date2.textContent = `${templeclosure.date2}`;
            date3.textContent = `${templeclosure.date3}`;
            date4.textContent = `${templeclosure.date4}`;
            date5.textContent = `${templeclosure.date5}`;
            date6.textContent = `${templeclosure.date6}`;
            date7.textContent = `${templeclosure.date7}`;
            date8.textContent = `${templeclosure.date8}`;
           
           
          
            // Add/append the section(card) with the h2 element
            group.appendChild(title);
            group.appendChild(date1);
            group.appendChild(date2);
            group.appendChild(date3);
            group.appendChild(date4);
            group.appendChild(date5);
            group.appendChild(date6);
            group.appendChild(date7);
            group.appendChild(date8);
           

          
            // Add/append the existing HTML div with the cards class with the section(card)
            //document.querySelector('div.cards').appendChild(card);
            groups.append(group);
          
    });
  });