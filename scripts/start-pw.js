const fs = require('fs');
const path = require('path');

const [, , dest] = process.argv;
if (!dest) {
  console.error('Usage: node scripts/start-pw.js <relative-path-to-new-spec>');
  process.exit(1);
}

const templatePath = path.resolve(__dirname, '../Template/Template.spec.ts');
const targetPath = path.resolve(process.cwd(), dest);

if (fs.existsSync(targetPath)) {
  console.error('Target file already exists:', targetPath);
  process.exit(1);
}

fs.mkdirSync(path.dirname(targetPath), { recursive: true });
fs.copyFileSync(templatePath, targetPath);
console.log('Created', targetPath);
