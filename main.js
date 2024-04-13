import inquirer from "inquirer";
let myBalance = 20000;
let myPin = 4090;
let pin = await inquirer.prompt([
    {
        name: "userPin",
        type: "number",
        message: "Please enter your pin",
    },
]);
if (pin.userPin != myPin) {
    console.log("Incorrect pin please try again");
}
if (pin.userPin === myPin) {
    let options = await inquirer.prompt([
        {
            name: "operations",
            type: "list",
            message: "Welcome! Please select an option to perform action",
            choices: ["Check Balance", "Withdraw Cash"],
        },
    ]);
    if (options.operations === "Check Balance") {
        console.log(`Your available balance is "${myBalance}"`);
    }
    if (options.operations === "Withdraw Cash") {
        let withDraw = await inquirer.prompt([
            {
                name: "cashWithdraw",
                type: "list",
                message: "Please select a payment to withdraw",
                choices: ["1000", "5000", "10000", "15000", "Enter your amount"],
            },
        ]);
        if (withDraw.cashWithdraw === "1000") {
            console.log(`Successfull withdrawal, Your new balance is "${myBalance - 1000}"`);
        }
        else if (withDraw.cashWithdraw === "5000") {
            console.log(`Successfull withdrawal, Your new balance is "${myBalance - 5000}"`);
        }
        else if (withDraw.cashWithdraw === "10000") {
            console.log(`Successfull withdrawal, Your new balance is "${myBalance - 10000}"`);
        }
        else if (withDraw.cashWithdraw === "15000") {
            console.log(`Successfull withdrawal, Your new balance is "${myBalance - 15000}"`);
        }
        else if (withDraw.cashWithdraw === "Enter your amount") {
            let customAmount = await inquirer.prompt([
                {
                    name: "customOption",
                    type: "number",
                    message: "Enter amount in the multiples of 500",
                },
            ]);
            if (customAmount.customOption > myBalance) {
                console.log("You do not have sufficient balance");
            }
            else if (customAmount.customOption < 0) {
                console.log("Negative numbers are not allowed");
            }
            else if (customAmount.customOption % 500 != 0) {
                console.log("You can only enter amount in the multiples of 500");
            }
            else {
                console.log(`Successfull withdrawal, Your new balance is "${myBalance - customAmount.customOption}"`);
            }
        }
    }
}
