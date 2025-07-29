

const readline = require('readline');
const { getBotResponse } = require('./chatbotModule'); // Import our chatbot module

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Welcome to our Chatbot!");
console.log("Type 'exit' to quit.");

function askQuestion() {
    rl.question('You: ', (userInput) => {
        if (userInput.toLowerCase() === 'exit') {
            console.log(getBotResponse('exit')); // Get a goodbye message
            rl.close();
            return;
        }

        const botResponse = getBotResponse(userInput);
        console.log(`Bot: ${botResponse}`);

        askQuestion(); // Ask the next question
    });
}

askQuestion(); // Start the conversation