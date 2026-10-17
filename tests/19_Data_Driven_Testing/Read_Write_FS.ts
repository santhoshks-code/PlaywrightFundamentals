const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, 'DDT_Users.json');
console.log('File Path:', filePath);

const fileData = fs.readFileSync(filePath, 'utf-8');
const userDataJSObject = JSON.parse(fileData);
console.log(userDataJSObject);

console.log(userDataJSObject.username);
console.log(userDataJSObject.password);