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
let percentage = 0;
let people = 1;

// Get input from billInput
billInput.addEventListener("input", () => {
  bill = +billInput.value.replace(",", ".");
  calcTip();
});

// Loop through the buttons and add clickevent on buttons

button.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    // remove active class from buttons
    button.forEach((btn) => {
      btn.classList.remove("btn--active");

      // add active class on active buttons
      if (e.target.textContent === btn.textContent) {
        btn.classList.add("btn--active");
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
  if (+peopleInput.value <= 0) {
    error.style.display = "block";
    peopleInput.style.border = "2px solid red";
    return;
  } else {
    error.style.display = "none";
    peopleInput.style.border = "none";
    calcTip();
  }
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
  peopleInput.value = "";
  bill = 0;
  percentage = 0;
  people = 1;
  resetBtn.style.backgroundColor = "#0d686d";
});
