'use strict';

// let catFrom = document.getElementById('catForm')
let mainTable = document.getElementById('salesTable');



let OperationHours = ['6am', '7am',
'8am', '9am', '10am', '11am', '12am',
'1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

 
  // let seattle = {
  //     name: 'Seattle',
  //     minCus: 23,
  //     maxCus: 65,
  //     avgCookiesCus: 6.3,
  //     cookiesSoldHour: [],
  //     total: 0,
  //     cookiesSoldPerhours: function() {
  //         for(let i = 0; i < OperationHours.length; i++) {
  //           let avarage = Math.ceil((Math.random() * (this.maxCus - this.minCus + 1) + this.minCus) * this.avgCookiesCus) 
  //           this.cookiesSoldHour.push(avarage)
  //           this.total += avarage
  //     }},
  //     render : function(){
  //       let salesLists = document.getElementById('salesLists1')

      //   let liststArticleElement = document.createElement('article');
      //   salesLists.appendChild(liststArticleElement);
        
        
      //   let locationName = document.createElement('h2');
      //   liststArticleElement.appendChild(locationName);
      //   locationName.textContent = this.name;

      //   let saleslistElement = document.createElement('ul');
      //   liststArticleElement.appendChild(saleslistElement);
    
      //   for(let i = 0; i < this.cookiesSoldHour.length ; i++) {
      //     let listItem = document.createElement('li');
      //     saleslistElement.appendChild(listItem);
      //     listItem.textContent = OperationHours[i] + ': '  + this.cookiesSoldHour[i] + ' cookies'
      //   }
               
      //   let listItem = document.createElement('li');
      //   saleslistElement.appendChild(listItem);
      //   listItem.textContent ='Total: '  + this.total + ' cookies'
      // }}


      // let tokyo = {
      //   name: 'Tokyo',
      //   minCus: 3,
      //   maxCus: 24,
      //   avgCookiesCus: 1.2,
      //   cookiesSoldHour: [],
      //   total: 0,
      //   cookiesSoldPerhours: function() {
      //       for(let i = 0; i < OperationHours.length; i++) {
      //         let avarage = Math.ceil((Math.random() * (this.maxCus - this.minCus + 1) + this.minCus) * this.avgCookiesCus) 
      //         this.cookiesSoldHour.push(avarage)
      //         this.total += avarage
      //   }},
      //   render : function(){
        //   let salesLists = document.getElementById('salesLists1')
  
        //   let liststArticleElement = document.createElement('article');
        //   salesLists.appendChild(liststArticleElement);
          
          
        //   let locationName = document.createElement('h2');
        //   liststArticleElement.appendChild(locationName);
        //   locationName.textContent = this.name;
  
        //   let saleslistElement = document.createElement('ul');
        //   liststArticleElement.appendChild(saleslistElement);
      
        //   for(let i = 0; i < this.cookiesSoldHour.length ; i++) {
        //     let listItem = document.createElement('li');
        //     saleslistElement.appendChild(listItem);
        //     listItem.textContent = OperationHours[i] + ': '  + this.cookiesSoldHour[i] + ' cookies'
        //   }
                 
        //   let listItem = document.createElement('li');
        //   saleslistElement.appendChild(listItem);
        //   listItem.textContent ='Total: '  + this.total + ' cookies'
        // }}
        
      //   let dubai = {
      //       name: 'Dubai',
      //       minCus: 11,
      //       maxCus: 38,
      //       avgCookiesCus: 3.7,
      //       cookiesSoldHour: [],
      //       total: 0,
      //       cookiesSoldPerhours: function() {
      //           for(let i = 0; i < OperationHours.length; i++) {
      //             let avarage = Math.ceil((Math.random() * (this.maxCus - this.minCus + 1) + this.minCus) * this.avgCookiesCus) 
      //             this.cookiesSoldHour.push(avarage)
      //             this.total += avarage
      //       }},
      //       render : function(){
      //         let salesLists = document.getElementById('salesLists1')
      
      //         let liststArticleElement = document.createElement('article');
      //         salesLists.appendChild(liststArticleElement);
              
              
      //         let locationName = document.createElement('h2');
      //         liststArticleElement.appendChild(locationName);
      //         locationName.textContent = this.name;
      
      //         let saleslistElement = document.createElement('ul');
      //         liststArticleElement.appendChild(saleslistElement);
          
      //         for(let i = 0; i < this.cookiesSoldHour.length ; i++) {
      //           let listItem = document.createElement('li');
      //           saleslistElement.appendChild(listItem);
      //           listItem.textContent = OperationHours[i] + ': '  + this.cookiesSoldHour[i] + ' cookies'
      //         }
                     
      //         let listItem = document.createElement('li');
      //         saleslistElement.appendChild(listItem);
      //         listItem.textContent ='Total: '  + this.total + ' cookies'
      //       }}
              

      //   let paris = {
      //       name: 'Paris',
      //       minCus: 20,
      //       maxCus: 38,
      //       avgCookiesCus: 2.3,
      //       cookiesSoldHour: [],
      //       total: 0,
      //       cookiesSoldPerhours: function() {
      //           for(let i = 0; i < OperationHours.length; i++) {
      //             let avarage = Math.ceil((Math.random() * (this.maxCus - this.minCus + 1) + this.minCus) * this.avgCookiesCus) 
      //             this.cookiesSoldHour.push(avarage)
      //             this.total += avarage
      //       }},
      //       render : function(){
      //         let salesLists = document.getElementById('salesLists1')
      
      //         let liststArticleElement = document.createElement('article');
      //         salesLists.appendChild(liststArticleElement);
              
              
      //         let locationName = document.createElement('h2');
      //         liststArticleElement.appendChild(locationName);
      //         locationName.textContent = this.name;
      
      //         let saleslistElement = document.createElement('ul');
      //         liststArticleElement.appendChild(saleslistElement);
          
      //         for(let i = 0; i < this.cookiesSoldHour.length ; i++) {
      //           let listItem = document.createElement('li');
      //           saleslistElement.appendChild(listItem);
      //           listItem.textContent = OperationHours[i] + ': '  + this.cookiesSoldHour[i] + ' cookies'
      //         }
                     
      //         let listItem = document.createElement('li');
      //         saleslistElement.appendChild(listItem);
      //         listItem.textContent ='Total: '  + this.total + ' cookies'
      //       }};

        
      //       let lima = {
      //           name: 'Lima',
      //           minCus: 2,
      //           maxCus: 16,
      //           avgCookiesCus: 4.6,
      //           cookiesSoldHour: [],
      //           total: 0,
      //           cookiesSoldPerhours: function() {
      //               for(let i = 0; i < OperationHours.length; i++) {
      //                 let avarage = Math.ceil((Math.random() * (this.maxCus - this.minCus + 1) + this.minCus) * this.avgCookiesCus) 
      //                 this.cookiesSoldHour.push(avarage)
      //                 this.total += avarage
      //           }},
      //           render : function(){
      //             let salesLists = document.getElementById('salesLists1')
          
      //             let liststArticleElement = document.createElement('article');
      //             salesLists.appendChild(liststArticleElement);
                  
                  
      //             let locationName = document.createElement('h2');
      //             liststArticleElement.appendChild(locationName);
      //             locationName.textContent = this.name;
          
      //             let saleslistElement = document.createElement('ul');
      //             liststArticleElement.appendChild(saleslistElement);
              
      //             for(let i = 0; i < this.cookiesSoldHour.length ; i++) {
      //               let listItem = document.createElement('li');
      //               saleslistElement.appendChild(listItem);
      //               listItem.textContent = OperationHours[i] + ': '  + this.cookiesSoldHour[i] + ' cookies'
      //             }
                         
      //             let listItem = document.createElement('li');
      //             saleslistElement.appendChild(listItem);
      //             listItem.textContent ='Total: '  + this.total + ' cookies'
      //           }};
    
      // seattle.cookiesSoldPerhours();
      // seattle.render();
      //   tokyo.cookiesSoldPerhours();
      //   tokyo.render();
      //   dubai.cookiesSoldPerhours();
      //   dubai.render();
      //   paris.cookiesSoldPerhours();
      //   paris.render();
      //   lima.cookiesSoldPerhours();
      //   lima.render();

      
        function cookiesStand(name, min, max, avgCookiesCus) {
          this.name = name,
          this.minCus = min,
          this.maxCus = max,
          this.avgCookiesCus = avgCookiesCus;
          this.cookiesSoldHour = [];
          this.total = 0;
          
        }
//////////////////////////////////////////////////////////////
        
        cookiesStand.prototype.render = function(){
          let tablesRow= document.createElement('tr')
      mainTable.appendChild(tablesRow);
      let tablesHeader = document.createElement('th')
      tablesHeader.textContent = this.name;

      mainTable.appendChild(tablesHeader);
      for (let i = 0; i < OperationHours.length; i++){
        let dataTable = document.createElement('td');
        dataTable.textContent = this.cookiesSoldHour[i];
        tablesRow.appendChild(dataTable);
         }
         let storeDailyLocationTotal = document.createElement('th');
         tablesRow.appendChild(storeDailyLocationTotal);
         storeDailyLocationTotal.textContent = this.total
         }
         
        //////////////////////////////////////////////////////////////////////

      function tablesHeaderRender(){
        let hoursTables = document.createElement('tr')
        mainTable.appendChild(hoursTables);

        let citiesColoumn = document.createElement('th')
      hoursTables.appendChild(citiesColoumn);
      hoursTables.textContent = '';
      
      for (let i = 0; i < OperationHours.length; i++){
        let hoursRow = document.createElement('th');
        hoursRow.textContent = OperationHours[i];
        hoursTables.appendChild(hoursRow);
      }
      let dailyLocationTotal = document.createElement('th')
      hoursTables.appendChild(dailyLocationTotal);
      dailyLocationTotal.textContent = 'Daily Location Total';
      
    }
    /////////////////////////////////////////////////////////////////
    tablesHeaderRender();
      // let totalDailyCookies = document.createElement('th');
      // totalDailyCookies.textContent = this.total;
      // tablesRow.appendChild(totalDailyCookies);

      //   let liststArticleElement = document.createElement('article');
      //   salesLists.appendChild(liststArticleElement);
        
        
      //   let locationName = document.createElement('h2');
      //   liststArticleElement.appendChild(locationName);
      //   locationName.textContent = this.name;

      //   let saleslistElement = document.createElement('ul');
      //   liststArticleElement.appendChild(saleslistElement);
    
      //   for(let i = 0; i < this.cookiesSoldHour.length ; i++) {
      //     let listItem = document.createElement('li');
      //     saleslistElement.appendChild(listItem);
      //     listItem.textContent = OperationHours[i] + ': '  + this.cookiesSoldHour[i] + ' cookies'
      //   }
               
      //   let listItem = document.createElement('li');
      //   saleslistElement.appendChild(listItem);
      //   listItem.textContent ='Total: '  + this.total + ' cookies'
      // }
    
      cookiesStand.prototype.cooHour = function() {
        for(let i = 0; i < OperationHours.length; i++) {
          let avarage = Math.ceil((Math.random() * (this.maxCus - this.minCus + 1) + this.minCus) * this.avgCookiesCus) 
          this.cookiesSoldHour.push(avarage)
          this.total += avarage
    }}



      let seattle = new cookiesStand('Seattle', 23, 65, 6.3);
      let tokyo = new cookiesStand('Tokyo', 3, 24, 1.2);
      let dubai = new cookiesStand('Dubai', 11, 38, 3.7);
      let paris = new cookiesStand('Paris', 20, 38, 2.3);
      let lima = new cookiesStand('Lima', 2, 16, 4.6);


      seattle.cooHour();
      tokyo.cooHour();
      dubai.cooHour();
      paris.cooHour();
      lima.cooHour();

      seattle.render();
      tokyo.render();
      dubai.render();
      paris.render();
      lima.render();



      // function formSubmission(event) {
        // event.preventDefault();
        //   let name = event.target.kittenName.value;
        //   let breed = event.target.kittenName.value;
        //   let likes = event.target.kittenName.value.split(',');
        //   let img = event.target.kittenName.value;
        //   let cat = event.target.kittenName.value;
        //   let kids = event.target.kittenName.value;
        //   let dogs = event.target.kittenName.value;
        //   let breed= event.target.isGoodWithDogs.checked;
        
        // let newCat  = new cat(name, 0, likes, kids, cat, dog, img, breed)
        // newCat.getAge(3, 12)
        // newCat.reder();
        // }
        // catFrom.addEventListener('submit', formSubmission)