'use strict';

// let seattle = {
//     name: 'Seattle',
//     hours:['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
//     minCustomers : 23,
//     maxCustomers : 65,
//     avgNumber : 0,
//     getAvgNumber: function() {
//         // this -> object name
//         this.avgNumber = getRandomNumber(23, 65);
//       }
// }
let laith = ['1','2', '3', '4', '6', '7']

let silwadi = {
    name: 'silwadi',
    minCustomers: 23,
    maxCustomers: 65,
    avgCookieNum: 6.3,
    walaa: function(){
        let randomNumber= document.get ('sales');
        for (let i = 0; i < laith.length; i++);
        let avgCookiePerHour= Math.random()*(this.maxCustomers-this.minCustomers)+this.minCustomers;

    }
}
let data = document.getElementById('data')
let seattle = {
    cookieList : [],
    min: 23,
    cityName: 'Seattle',
    max: 65,
    avg: 6.3,
    // sum: 0,
    getCookieNumber: function () {
        return Math.floor((Math.random() * (this.max - this.min) + this.min)*this.avg);
      }
}
// console.log(math.random())

// function getRandomNumber(min, max) {
//     // let max = 6.3 * 65;
//     // let min = 6.3 * 23;
//     min = Math.ceil(min);
    
//     max = Math.floor(max); 
    
//     return Math.random() * (max - min +1) + min
    
// }
// getAvg(23, 65);

// console.log(seattle)

// let salesElement = document.createElement('sales');
// salmonCookies.appendChild(salesElement);
// let nameTitle = document.createElement('h2');
// salesElement.appendChild(nameTitle);
//     nameTitle.textContent = this.name;

//     let hoursList = document.createElement('ul');
//     salesElement.appendChild(hoursList);

//     for(let i = 0; i < this.hours.length; i++) {
//       let listItem = document.createElement('li');
//       hoursList.appendChild(listItem);
//       listItem.textContent = this.hours[i];
//     }
