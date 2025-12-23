// Function to create a non-blocking delay
const sleep = milliSeconds => {
  return new Promise(resolve => setTimeout(resolve, milliSeconds));
};

const delayedFunction = async () => {
  console.log("Start delay");
  // The rest of the page remains interactive during this time
  await sleep(8000); 
  console.log("8 seconds passed. Functionality executed.");
};

delayedFunction();
console.log("Code continues to run, UI is responsive.");
