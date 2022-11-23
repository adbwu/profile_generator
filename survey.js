const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const questions = ["What's your name? Nicknames are also acceptable :)", 
  "What's an activity you like doing?", 
  "What do you listen to while doing that?", 
  "Which meal is your favourite (eg: dinner, brunch, etc.)", 
  "What's your favourite thing to eat for that meal?", 
  "Which sport is your absolute favourite?", 
  "What is your superpower? In a few words, tell us what you are amazing at!"];

let ans = [];

rl.question(questions[0], (answer) => {
  console.log(`You said: ${answer}`);
  ans.push(answer);
  rl.question(questions[1], (answer) => {
    console.log(`You said: ${answer}`);
    ans.push(answer);
    rl.question(questions[2], (answer) => {
      console.log(`You said: ${answer}`);
      ans.push(answer);
      rl.question(questions[3], (answer) => {
        console.log(`You said: ${answer}`);
        ans.push(answer);
        rl.question(questions[4], (answer) => {
          console.log(`You said: ${answer}`);
          ans.push(answer);
          rl.question(questions[5], (answer) => {
            console.log(`You said: ${answer}`);
            ans.push(answer);
            rl.question(questions[6], (answer) => {
              console.log(`You said: ${answer}`);
              ans.push(answer);
    
              console.log(`${ans[0]} loves listening to ${ans[2]} while ${ans[1]}, devouring ${ans[4]} for ${ans[3]}, prefers ${ans[5]} over any other sport, and is amazing at ${ans[6]}.`);
              rl.close();
            });
          });
        });
      });
    });
  });
});

console.log(ans);