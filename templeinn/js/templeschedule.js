const requestURL = 'https://mjhaymond.github.io/wdd230/templeinn/json/templeschedule.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing

    const schedule = jsonObject['schedule'];
    const groups = document.querySelector('.groups');

    schedule.forEach(item => {
            // Create elements to add to the document  
            let  group = document.createElement('div');
            let  title = document.createElement('h2');        
            let  monday = document.createElement('h3');
            let  monInfo = document.createElement('p');
            let  tuesday = document.createElement('h3');
            let  tueInfo = document.createElement('p');
            let  wednesday = document.createElement('h3');
            let  wedInfo = document.createElement('p');
            let  thursday = document.createElement('h3');
            let  thurInfo = document.createElement('p');
            let  friday = document.createElement('h3');
            let  friInfo = document.createElement('p');
            let  saturday = document.createElement('h3');
            let  satInfo = document.createElement('p');

          
            // Change the textContent property of the h3 element to contain the companies full name
            title.textContent = `${item.title}`;
            monday.textContent = `${item.monday}`;
            monInfo.textContent = `${item.monInfo}`;
            tuesday.textContent = `${item.tuesday}`;
            tueInfo.textContent = `${item.tueInfo}`;
            wednesday.textContent = `${item.wednesday}`;
            wedInfo.textContent = `${item.wedInfo}`;
            thursday.textContent = `${item.thursday}`;
            thurInfo.textContent = `${item.thurInfo}`;
            friday.textContent = `${item.friday}`;
            friInfo.textContent = `${item.friInfo}`;
            saturday.textContent = `${item.saturday}`;
            satInfo.textContent = `${item.satInfo}`;
           
          
            // Add/append the section(card) with the h2 element
            group.appendChild(title);
            group.appendChild(monday);
            group.appendChild(monInfo);
            group.appendChild(tuesday);
            group.appendChild(tueInfo);
            group.appendChild(wednesday);
            group.appendChild(wedInfo);
            group.appendChild(thursday);
            group.appendChild(thursday);
            group.appendChild(thurInfo);
            group.appendChild(friday);
            group.appendChild(friInfo);
            group.appendChild(saturday);
            group.appendChild(satInfo);

          
            // Add/append the existing HTML div with the cards class with the section(card)
            //document.querySelector('div.cards').appendChild(card);
            groups.append(group);
          
    });
  });


