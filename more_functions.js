// Function to display a mailing label
function displayMailingLabel(name, address, city, state, zip) {
    console.log(`Name: ${name}`);
    console.log(`Address: ${address}`);
    console.log(`City: ${city}`);
    console.log(`State: ${state}`);
    console.log(`ZIP: ${zip}`);
}
console.log ()

// Function to add two numbers and display the result

function addNumbers(num1, num2) {
    const sum = num1 + num2;
    console.log(`${num1} + ${num2} = ${sum}`);
}

// Function to display a receipt and calculate change due
function displayReceipt(totalDue, amountPaid) {
    console.log(`Total Due: $${totalDue}`);
    console.log(`Amount Paid: $${amountPaid}`);

    if (amountPaid < totalDue) {
        const amountShort = totalDue - amountPaid;
        console.log(`Additional Amount Needed: $${amountShort}`);
    } else {
        const changeDue = amountPaid - totalDue;
        console.log(`Change Due: $${changeDue}`);
    }
}

// Example 1: Display a mailing label
displayMailingLabel("Juan Doe", "123 Juan St", "Juan", "CA", "12345");
displayMailingLabel("John Doe", "321 Main Rd", "Miami", "AZ", "54321");

// Example 2: Add two numbers
addNumbers(5, 7);
addNumbers(9, 8);

// Example 3: Display a receipt with different payment scenarios
displayReceipt(50, 60); // Overpaid
displayReceipt(50, 50); // Paid exactly
displayReceipt(50, 40); // Underpaid
