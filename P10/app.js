// Display __dirname and __filename
console.log('Current directory (__dirname):', __dirname);
console.log('Current file (__filename):', __filename);

// Set and access a global variable
global.myGlobalValue = 'Hello from the global object!';
console.log('Global value:', global.myGlobalValue);

// Using setTimeout (delayed execution)
setTimeout(() => {
  console.log('setTimeout called after 1 second');
}, 1000);

// Using setInterval (repeating timer)
let count = 0;
const intervalId = setInterval(() => {
  count++;
  console.log(`setInterval: count = ${count}`);
  if (count === 3) {
    clearInterval(intervalId); // Stop after 3 runs
    console.log('Interval cleared');
  }
}, 1000);

// Access process info
console.log('Process PID:', process.pid);
console.log('Platform:', process.platform);
console.log('Node version:', process.version);

// Log environment variables
console.log('NODE_ENV:', process.env.NODE_ENV || 'not set');
