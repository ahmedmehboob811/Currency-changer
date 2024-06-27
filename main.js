#! bin/usr/evn/mode
import inquirer from "inquirer";
const currency = {
    USD: 1,
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280,
};
let currency_converter = await inquirer.prompt([
    {
        name: "from",
        message: " FROM currency",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"]
    },
    {
        name: "to",
        message: " TO currency",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"]
    },
    {
        name: "amount",
        message: "Enter your amount",
        type: "number"
    }
]);
console.log(currency_converter);
let fromAmount = currency[currency_converter.from];
let toAmount = currency[currency_converter.to];
let amount = currency_converter.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
//console.log(fromAmount);
//console.log(toAmount);
//console.log(amount);
//console.log(baseAmount);
console.log(convertedAmount);
