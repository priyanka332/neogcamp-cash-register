const billamount = document.querySelector("#bill-amount");
const giveCash = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

checkButton.addEventListener("click", function valid() {
  message.style.display = "none";
    if (billamount.value > 0) {
        if (giveCash.value >= billamount.value) {
            const amountToBeReturned = giveCash.value - billamount.value; 
            calculateChange(amountToBeReturned);
        } 
        else {
            showMessage("Do you wanna wash plates?");
        }
    }
    else {
        showMessage("invalid Bill Amount your bill amount should be in numbers");
    }
});

function calculateChange(amountToBeReturned) {
  for (let i = 0; i < availableNotes.length; i++) {
    const numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);
    amountToBeReturned = amountToBeReturned % availableNotes[i];
    noOfNotes[i].innerText = numberOfNotes;
  }
}

function showMessage(msg) {
  message.style.display = "block";
  message.innerText = msg;
}