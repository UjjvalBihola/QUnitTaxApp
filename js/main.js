import IncomeTax from "./IncomeTax.js";
import "https://code.jquery.com/jquery-1.12.1.min.js";

$(document).ready(() => {
  // Focus on the "total_deduction" input field when "Enter" key is pressed in the "total_income" input field
  $("#total_income").keydown(function (event) {
    if (event.key === "Enter") {
      $("#total_deduction").focus();
    }
  });

  // Trigger the "calculate" button click when "Enter" key is pressed in the "total_deduction" input field
  $("#total_deduction").keydown(function (event) {
    if (event.key === "Enter") {
      $("#calculate").click();
    }
  });

  // Calculate and display the taxes when the "calculate" button is clicked
  $("#calculate").click((e) => {
    e.preventDefault();

    // Get the values from the input fields
    const totalIncome = parseFloat($("#total_income").val());
    const totalDeduction = parseFloat($("#total_deduction").val());

    // Create an instance of the IncomeTax class
    const incomeTax = new IncomeTax(totalIncome, totalDeduction);

    // Calculate federal and Ontario taxes
    const federalTax = incomeTax.calculateFederalTax();
    const ontarioTax = incomeTax.calculateOntarioTax();
    const totalTax = federalTax + ontarioTax;

    // Calculate the total tax owing after deductions
    const taxOwing = totalTax - totalDeduction;

    // Display the calculated taxes in the HTML
    $("#fedTax").html(federalTax.toFixed(2));
    $("#onTax").html(ontarioTax.toFixed(2));
    $("#totalTax").html(totalTax.toFixed(2));
    $("#taxOwing").html(taxOwing.toFixed(2));
  });
});
