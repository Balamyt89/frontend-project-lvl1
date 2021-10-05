import readlineSync from 'readline-sync';

const greetingsUseer = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};

export default greetingsUseer;
