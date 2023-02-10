#!usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";

const guessedNumber = Math.floor(Math.random() * 10 + 1);

async function main() {
  const questions = [
    {
      type: `number`,
      name: `userInput`,
      message: `Guess a number between 1-10: `,
    },
  ];
  
  const input = await inquirer.prompt(questions);
  const userGuess: number = input[`userInput`];
  
  if (guessedNumber === userGuess) {
    chalkAnimation.rainbow(`You Guessed it right!!`);
  } else {
        chalkAnimation.glitch(`(T-T) Wrong Guess, Try Again`)
        main()
  }
}

main();