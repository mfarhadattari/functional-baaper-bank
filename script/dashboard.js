// Deposit Handler
document.getElementById("deposit-btn").addEventListener("click", function () {
  const newDeposit = getInputFieldValueById("deposit-field");
  if (isNaN(newDeposit) === true) {
    alert("Please Input Correct Deposit Amount ");
    return;
  }
  const previousTotalDeposit = getTextElementValueById("total-deposit");
  const previousTotalBalance = getTextElementValueById("total-balance");
  const newTotalDeposit = previousTotalDeposit + newDeposit;
  setTextElementValueById("total-deposit", newTotalDeposit);

  const newBalance = previousTotalBalance + newDeposit;
  setTextElementValueById("total-balance", newBalance);
});

// Withdraw Handler
document.getElementById("withdraw-btn").addEventListener("click", function () {
  const newWithdraw = getInputFieldValueById("withdraw-field");
  if (isNaN(newWithdraw) === true) {
    alert("Please Input Correct Withdraw Amount ");
    return;
  }
  const previousTotalWithdraw = getTextElementValueById("total-withdraw");
  const previousTotalBalance = getTextElementValueById("total-balance");
  if (newWithdraw > previousTotalBalance) {
    alert("Balance is low");
    return;
  }

  const newTotalWithdraw = previousTotalWithdraw + newWithdraw;
  setTextElementValueById("total-withdraw", newTotalWithdraw);
  const newBalance = previousTotalBalance - newWithdraw;
  setTextElementValueById("total-balance", newBalance);
});
