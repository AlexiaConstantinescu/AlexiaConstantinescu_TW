const fs = require("fs");
const path = require("path");
const { rimraf } = require("rimraf"); // ← important: cu acolade!

const dirPath = path.join(__dirname, "testDir");
const filePath = path.join(dirPath, "file.txt");

if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
  console.log("Director creat:", dirPath);
}

fs.writeFileSync(filePath, "Acesta este un fișier de test.");
console.log("Fișier creat:", filePath);

rimraf(dirPath)
  .then(() => console.log("Director șters cu succes!"))
  .catch((err) => console.error("Eroare la ștergere:", err));
