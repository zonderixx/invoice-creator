let myServ = [];
let totalSum = 0;

let isWashCarAlive = true;
let isMowLawnAlive = true;
let isPullWeedsAlive = true;

// const services = ["Wash Car", "Mow Lawn", "Pull Weeds"]; array with objects 
const washCarBtn = document.querySelector("#wash-car-btn");
const mowLawnBtn = document.querySelector("#mow-lawn-btn");
const pullWeedsBtn = document.querySelector("#pull-weeds-btn");
const invoiceBtn = document.querySelector("#invoice-btn");
// const removeBtn = document.querySelector("#remove-btn");

const serviceActive = document.querySelector("#services-activated");
const totalSumEl = document.querySelector("#total-sum-el");


washCarBtn.addEventListener("click", () => {
    if (isWashCarAlive) {
        myServ.unshift({service: "Wash Car", price: 10});
        totalSum += myServ[0].price;
        isWashCarAlive = false;
        renderServices();
    } else {
        alert("You already have this in your list.");
    }
});

mowLawnBtn.addEventListener("click", () => {
    if(isMowLawnAlive) {
        myServ.unshift({service: "Mow Lawn", price: 20});
        totalSum += myServ[0].price;
        isMowLawnAlive = false;
        renderServices();
    } else {
        alert("You already have this in your list.");
    }
});

pullWeedsBtn.addEventListener("click", () => {
    if (isPullWeedsAlive) {
        myServ.unshift({service: "Pull Weeds", price:30});
        totalSum += myServ[0].price;
        isPullWeedsAlive = false;
        renderServices();
    } else {
        alert("You already have this in your list.");
    }
});

function renderTotalSum() {
    totalSumEl.innerHTML = `<td class="note">We accept cash, credit card, or Paypal</td>
                                <td class="total-sum">$${totalSum}</td>`
};

function renderServices() {
  let listServ = ""
  for (let i = 0; i < myServ.length; i++) {
      listServ += `<tr><td>${myServ[i].service}</td>
                    <td class="services-on">$${myServ[i].price}</td></tr>`
  }  
  serviceActive.innerHTML = listServ;
  renderTotalSum()
};

// removeBtn.addEventListener("click", () => {
    
// })

invoiceBtn.addEventListener("click", () => {
    myServ = [];
    totalSum = 0;
    isWashCarAlive = true;
    isMowLawnAlive = true;
    isPullWeedsAlive = true;

    totalSumEl.innerHTML = `<td class="note"></td>
    <td class="total-sum"><span id="total-sum">$0</span></td>`;

    serviceActive.innerHTML = `<tr><td><em></em></td></tr>`;

});

// old script 
// function createServices(input) {
//     myServ.push(input)
//     renderServices()
// };


// function renderServices() {
//     let listServ = "";
//     for (let i = 0; i < myServ.length; i++) {
//             listServ += `
//                 <li>
//                     <p>${myServ[i]}</p>
//                 </li>`
//     }
//     ulEl.innerHTML = listServ;
// };






