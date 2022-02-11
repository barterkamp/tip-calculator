"use strict";

const billInput = document.querySelector("#bill");
const peopleInput = document.querySelector("#people");
const button5 = document.querySelector(".num5");
const tipAmount = document.querySelector(".tip-amount");
const tipPerPerson = document.querySelector(".total-person");

const error = document.querySelector(".calc__title—error");

// schrijf een functie die de berekning uitvoert op basis van
// gegevens uit illInput en peopleInput.

button5.addEventListener("click", function () {
  if (Number(peopleInput.value) === 0 || !peopleInput.value) {
    error.style.display = "block";
    return;
  } else {
    error.style.display = "none";
  }
  const totalAmount = billInput.value * 0.05;
  tipAmount.textContent = totalAmount;
  const totalPerPerson = totalAmount / peopleInput.value;
  tipPerPerson.textContent = totalPerPerson;
});
