const switchTransactionTypeButton = document.getElementById("changeTypeButton");
const transactionTable = document.getElementById("transactionTable");
const transactionList = document.getElementById("transactionList");
const exportTransactions = document.getElementById("exportButton");

switchTransactionTypeButton.addEventListener("click", function () {
  console.log("clicked");
  transactionTable.classList.toggle("hidden");
  transactionList.classList.toggle("hidden");
});
