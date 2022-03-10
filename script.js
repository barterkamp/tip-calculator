"use strict";

const billInput = document.querySelector("#bill");
const peopleInput = document.querySelector("#people");
const button = document.querySelectorAll("button");
const tipAmount = document.querySelector(".tip-amount");
const tipPerPerson = document.querySelector(".total-person");
const error = document.querySelector(".calc__people—error");
const resetBtn = document.querySelector(".btn--reset");
const tipustom = document.querySelector("#custom");

// Set default values for bill, percentage and number of persons

let bill = 0;
let percentage = 0.15;
let people = 1;

// Get input from billInput
billInput.addEventListener("input", () => {
  bill = +billInput.value.replace(",", ".");
  calcTip();
});

// Loop through the buttons and add clickevent on buttons
button.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    button.forEach((btn) => {
      // remove active class from buttons
      btn.classList.remove("btn--active");
      // add active class on active buttons
      if (e.target.textContent === btn.textContent) {
        btn.classList.add("btn-active");
        percentage = e.target.dataset.num / 100;
        console.log(percentage);
      }
    });
    //reset custom value
    custom.value = "";
    calcTip();
  });
});

// Get input from custom input
custom.addEventListener("input", () => {
  percentage = +custom.value.replace(",", ".") / 100;
  button.forEach((btn) => {
    btn.classList.remove("btn--active");
  });

  if (custom.value !== "") {
    calcTip();
  }
});

// Get input from peopleInput
peopleInput.addEventListener("input", () => {
  people = +peopleInput.value.replace(",", ".");
  calcTip();
});

function calcTip() {
  // calculate total tip amount
  if (people >= 1) {
    const totalTipAmount = (bill * percentage) / people;
    tipAmount.textContent = `$${totalTipAmount.toFixed(2)}`;

    // calculate total amount per person
    const totalPerPerson = bill / people + totalTipAmount;
    tipPerPerson.textContent = `$${totalPerPerson.toFixed(2)}`;

    resetBtn.style.backgroundColor = "#26C2AE";
  }
}

//Reset functionality

resetBtn.addEventListener("click", function () {
  tipAmount.textContent = "$0.00";
  tipPerPerson.textContent = "$0.00";
  billInput.value = "";
  bill = 0;
  peopleInput.value = "";
  people = 0;
  percentage = 0.15;
  resetBtn.style.backgroundColor = "#0d686d";
});

//       // calculate Total amount per person
//       const totalPerPerson =
//         billInput.value / peopleInput.value + totalTipAmount;
//       tipPerPerson.textContent = `$${totalPerPerson.toFixed(2)}`;

//     btn.forEach((b) => {
//       b.classList.remove("btn--active");
//     });
//     const clicked = e.target;
//     clicked.classList.add("btn--active");
//     percentage = +clicked.dataset.num / 100;
//     console.log(percentage);
//   });
// });

//     if (Number(peopleInput.value) === 0 || !peopleInput.value) {
//       error.style.display = "block";
//       peopleInput.style.border = "2px solid red";
//       return;
//     } else {
//       error.style.display = "none";
//       peopleInput.style.border = "none";

//       //calculate percentage per button
//       const percentage = Number(e.target.dataset.num) / 100;

//       // calculate total tip amount per person

//       const totalTipAmount = (billInput.value * percentage) / peopleInput.value;
//       tipAmount.textContent = `$${totalTipAmount.toFixed(2)}`;

//       // calculate Total amount per person
//       const totalPerPerson =
//         billInput.value / peopleInput.value + totalTipAmount;
//       tipPerPerson.textContent = `$${totalPerPerson.toFixed(2)}`;

//       resetBtn.style.backgroundColor = "#26C2AE";
//     }
//   });
// });
