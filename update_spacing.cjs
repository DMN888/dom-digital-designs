const fs = require('fs');
const path = require('path');

const projectsDir = path.join(__dirname, 'src', 'pages', 'projects');
const files = fs.readdirSync(projectsDir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  const filePath = path.join(projectsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Change pt-8 to pt-6
  content = content.replace(/<main className="pt-8 pb-32">/g, '<main className="pt-6 pb-32">');
  
  // Change mb-12 to mb-8 on the Link
  content = content.replace(/transition-colors mb-12">/g, 'transition-colors mb-8">');

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated spacing in ${file}`);
}
