let tipPercent = 15;

function setTip(percent) {
  tipPercent = percent;

  document.querySelectorAll(".buttons button").forEach(btn => {
    btn.classList.remove("active");
  });

  event.target.classList.add("active");
  calculate();
}

function calculate() {
  let bill = parseFloat(document.getElementById("bill").value) || 0;
  let tip = (bill * tipPercent) / 100;

  let total = bill + tip;

  let round = document.getElementById("round").checked;

  if (round) {
    total = Math.round(total);
  }

  document.getElementById("tip").innerText = tip.toFixed(2);
  document.getElementById("total").innerText = total.toFixed(2);
}

document.getElementById("bill").addEventListener("input", calculate);

function clearAll() {
  document.getElementById("bill").value = "";
  document.getElementById("tip").innerText = "0.00";
  document.getElementById("total").innerText = "0.00";
}