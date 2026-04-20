const fs = require("fs");

const myWelcomeText = fs.readFileSync("./welcome.txt", "utf-8");

console.log(myWelcomeText);
