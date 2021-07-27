const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name?  ', (answer) => {
  rl.question('What activities do you like?  ', (answer2) => {
    rl.question('What do you listen to while doing that?  ', (answer3) => {
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (answer4) => {
        rl.question('Whats your favourite thing to eat for that meal?  ', (answer5) => {
          rl.question('Which sport is your absolute favourite?  ', (answer6) => {
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer7) => {

              console.log(answer + " likes to do " + answer2 + " very much while listening to " + answer3 + ".");
              console.log("He likes to eat " + answer5 + " in " + answer4 + ". Apart from that he likes to play" + answer6 + "daily. He describes " + answer7 + " as its best capability.");

              rl.close();
            });
          });
        });
      });
    });
  });
});