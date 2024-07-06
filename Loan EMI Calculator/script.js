document.getElementById("form").addEventListener("submit", handleFormSubmit);
let result = document.getElementById("result");

function handleFormSubmit(event) {
  event.preventDefault();

  const loanAmount = parseFloat(document.getElementById("loanAmount").value);
  const interestRate = parseFloat(document.getElementById("interest").value);
  const tenure = parseFloat(document.getElementById("tenure").value);

  if (!loanAmount || !interestRate || !tenure) {
    alert("Please Fill All The Input Fields ❌");
    return;
  }

  const monthlyInterestRate = interestRate / 12 / 100;
  const numberOfInstallments = tenure * 12;
  const emi =
    (loanAmount *
      monthlyInterestRate *
      Math.pow(1 + monthlyInterestRate, numberOfInstallments)) /
    (Math.pow(1 + monthlyInterestRate, numberOfInstallments) - 1);

  result.textContent = `EMI - ${emi.toFixed(2)}/-RS Per Month `;
}
