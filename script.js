"use strict";

const billInput = document.querySelector("#bill");
const peopleInput = document.querySelector("#people");
const btnPercentage = document.querySelectorAll(".btn--primary");
const tipAmount = document.querySelector(".tip-amount");
const tipPerPerson = document.querySelector(".total-person");
const error = document.querySelector(".calc__people—error");
const resetBtn = document.querySelector(".btn--reset");
const custom = document.querySelector("#custom");

console.log(custom);

btnPercentage.forEach((button) => {
  button.addEventListener("click", function (e) {
    // check if there en of de input een number is
    if (Number(peopleInput.value) === 0 || !peopleInput.value) {
      error.style.display = "block";
      peopleInput.style.border = "2px solid red";
      return;
    } else {
      error.style.display = "none";
      peopleInput.style.border = "none";

      //calculate percentage per button
      const percentage = Number(e.target.dataset.num) / 100;

      // calculate total tip amount per person

      const totalTipAmount = (billInput.value * percentage) / peopleInput.value;
      tipAmount.textContent = `$${totalTipAmount.toFixed(2)}`;

      // calculate Total amount per person
      const totalPerPerson =
        billInput.value / peopleInput.value + totalTipAmount;
      tipPerPerson.textContent = `$${totalPerPerson.toFixed(2)}`;

      resetBtn.style.backgroundColor = "#26C2AE";
    }
  });
});

//Reset functionality
resetBtn.addEventListener("click", function () {
  tipAmount.textContent = "$0.00";
  tipPerPerson.textContent = "$0.00";
  billInput.value = "";
  peopleInput.value = "";
  resetBtn.style.backgroundColor = "#0d686d";
});
