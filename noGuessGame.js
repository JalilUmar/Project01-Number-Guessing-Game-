import inquirer from "inquirer";
const systemGeneratedNo = Math.floor(Math.random());
let answers = await inquirer.prompt([
    {
        type: "number",
        name: "userGuess",
        message: "Write your guess b/w 1 to 10: "
    }
]);
const { userGuess } = answers;
console.log(userGuess, "UserGuess", systemGeneratedNo, "SYs");
if (userGuess === systemGeneratedNo) {
    console.log("Your amswer is correct. \n You Win !");
}
else {
    console.log("Please try again Better luck next time.");
}
