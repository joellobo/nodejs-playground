const fs = require("fs");

(async () => {
  const buffer = await fs.readFile('file.txt');
  buffer.toString(); 
})();
