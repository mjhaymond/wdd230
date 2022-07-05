const requestURL = 'https://mjhaymond.github.io/wdd230/templeinn/json/templeclosure.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing

    const closure = jsonObject['closure'];
    const groups = document.querySelector('.closureInfo');

    closure.forEach(item => {
            // Create elements to add to the document  
            let  group = document.createElement('div');
            let  title = document.createElement('h3');        
            let  date1 = document.createElement('p');
            let  date2 = document.createElement('p');
            let  date3 = document.createElement('p');
            let  date4 = document.createElement('p');
            let  date5 = document.createElement('p');
            let  date6 = document.createElement('p');
            let  date7 = document.createElement('p');
          
          
            // Change the textContent property of the h3 element to contain the companies full name
            title.textContent = `${item.title}`;
            date1.textContent = `${item.date1}`;
            date2.textContent = `${item.date2}`;
            date3.textContent = `${item.date3}`;
            date4.textContent = `${item.date4}`;
            date5.textContent = `${item.date5}`;
            date6.textContent = `${item.date6}`;
            date7.textContent = `${item.date7}`;
           
          
            // Add/append the section(card) with the h2 element
            group.appendChild(title);
            group.appendChild(date1);
            group.appendChild(date2);
            group.appendChild(date3);
            group.appendChild(date4);
            group.appendChild(date5);
            group.appendChild(date6);
            group.appendChild(date7);
           

          
            // Add/append the existing HTML div with the cards class with the section(card)
            //document.querySelector('div.cards').appendChild(card);
            groups.append(group);
          
    });
  });