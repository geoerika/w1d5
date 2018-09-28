var chalk = require("chalk");

var message = "Hello " + chalk.yellow("World");
console.log(message);

var myText = 'I am finding this a bit challeging';
console.log(chalk.redBright.bgGreenBright(myText));

console.log(chalk.bold.yellow.italic('But I will try to survive'));

console.log(chalk.strikethrough.blueBright('I hate this') + chalk.bold.red('I really love this') + chalk.yellowBright('!!!!!!!!!!'));