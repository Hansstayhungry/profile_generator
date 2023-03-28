const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// storage answer in an object;
let profile = {};

rl.question('What\'s your name? Nicknames are also acceptable :)', (answer) => {
  console.log(`logged: ${answer}`);
  profile.name = answer;

  rl.question('What\'s an activity you like doing?', (answer) => {
    console.log(`logged: ${answer}`);
    profile.activity = answer;

    rl.question('What do you listen to while doing that?', (answer) => {
      console.log(`logged: ${answer}`);
      profile.listen = answer;

      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)', (answer) => {
        console.log(`logged: ${answer}`);
        profile.meal = answer;

        rl.question('What\'s your favourite thing to eat for that meal?', (answer) => {
          console.log(`logged: ${answer}`);
          profile.mealItem = answer;

          rl.question('Which sport is your absolute favourite?', (answer) => {
            console.log(`logged: ${answer}`);
            profile.sport = answer;

            rl.question('What is your superpower? In a few words, tell us what you are amazing at!', (answer) => {
              console.log(`logged: ${answer}`);
              profile.superpower = answer;

              console.log(
              `${profile.name} likes ${profile.activity},
              listens to ${profile.listen} while doing that,
              and the favourite meal is ${profile.meal},
              and the favourite thing to eat for that meal is ${profile.mealItem},
              ${profile.name}'s favourite sport is ${profile.sport},
              and the superpower is ${profile.superpower}`);

              rl.close();
            });           
          });
        });
      });
    });
  });
});