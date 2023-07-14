const dollars = parseFloat(prompt("Enter the amount in dollars:"));

if (!isNaN(dollars)) {
  const rupees = dollars * 74.5;
  console.log(`${dollars} dollars is equal to ${rupees} Indian Rupees.`);
} else {
  console.log("Invalid amount. Please try again.");
}
