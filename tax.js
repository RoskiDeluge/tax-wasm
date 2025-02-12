import init, { calculate_tax } from "./pkg/tax_wasm.js";

async function run() {
  await init();
  function calculateTax() {
    const income = parseFloat(document.getElementById("income").value);
    const tax = calculate_tax(income);
    document.getElementById("result").innerHTML = `Tax:$${tax.toFixed(2)}`;
  }
  document
    .getElementById("calculateButton")
    .addEventListener("click", calculateTax);
}

run();
