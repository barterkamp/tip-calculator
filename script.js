"use strict";

const billInput = document.querySelector("#bill");
const peopleInput = document.querySelector("#people");
const button15 = document.querySelector(".num15");
const tipAmount = document.querySelector(".tip-amount");
const tipPerPerson = document.querySelector(".total-person");
const error = document.querySelector(".calc__people—error");
const resetBtn = document.querySelector(".btn--reset");

// schrijf een functie die de berekning uitvoert op basis van
// gegevens uit illInput en peopleInput.

// eventlistener op 10% button
button15.addEventListener("click", function () {
  // check of er een input is en of de input een number is
  if (Number(peopleInput.value) === 0 || !peopleInput.value) {
    // error als niet aan de bovenstaande voorwaardem is voldaan
    error.style.display = "block";
    peopleInput.style.border = "2px solid red";
    return;
  } else {
    error.style.display = "none";
    peopleInput.style.border = "none";
  }
  // bereken tip amount
  const totalTipAmount = (billInput.value * 0.15) / peopleInput.value;

  tipAmount.textContent = totalTipAmount;
  // bereken totaalbedrag
  const totalPerPerson = parseFloat(
    billInput.value / peopleInput.value + totalTipAmount
  ).toFixed(2);

  tipPerPerson.textContent = totalPerPerson;
});

// const totalPerPerson = billInput.value / totalAmount;
// tipPerPerson.textContent = totalPerPerson;
// resetBtn.style.backgroundColor = "#26C2AE";
