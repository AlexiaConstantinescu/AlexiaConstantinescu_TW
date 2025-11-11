import fs from 'fs';
import rimraf from 'rimraf';
import path from 'path';

const dirPath = path.join('.', 'myFolder');
const filePath = path.join(dirPath, 'example.txt');

if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
}

fs.writeFileSync(filePath, 'Acesta este un fișier de test.');

rimraf(dirPath, (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log('Directorul a fost șters.');
    }
});
