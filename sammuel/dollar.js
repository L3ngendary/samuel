function convertDollarToNaira(dollarAmount, exchangeRate) {
    if (isNaN(dollarAmount) || isNaN(exchangeRate)) {
        throw new Error('Both dollar amount and exchange rate should be numbers');
    }
    return dollarAmount * exchangeRate;
}

try {
    let dollarAmount = parseFloat(prompt("Enter amount in Dollars:"));
    const exchangeRate = 1500; // Example exchange rate: 1 USD = 1500 NGN

    if (!isNaN(dollarAmount)) {
        let nairaAmount = convertDollarToNaira(dollarAmount, exchangeRate);
        alert(`${dollarAmount} USD is equivalent to ${nairaAmount.toFixed(2)} NGN`);
    } else {
        throw new Error('Invalid input. Please enter a valid number for dollar amount.');
    }
} catch (error) {
    alert(error.message);
}
