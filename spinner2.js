const symbols = '\r|  \r/  \r-  \r\\  \r|  \r/  \r-  \r\\  \r|  \n';
const spinTimeout = function(symbols) {
  // Assign a starting duration placholder
  let duration = 0;
  // Loop through each character of the string, output to console
  for (const char of symbols) {
    // Increment 200 milliseconds to duration time
    duration += 100;
    // Print out each char in 100ms intervals
    setTimeout(() => {
      process.stdout.write(char);
    }, duration);
  }
};
spinTimeout(symbols);