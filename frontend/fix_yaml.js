const fs = require('fs');
const path = require('path');
const dir = path.join(process.cwd(), 'src/content/blogs');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.md'));
files.forEach(f => {
  const p = path.join(dir, f);
  let content = fs.readFileSync(p, 'utf8');
  content = content.replace(/^(Title|Meta Title|Meta Description):\s*(?![\"'])(.*)$/gm, '$1: "$2"');
  fs.writeFileSync(p, content);
});
console.log('Fixed frontmatter in ' + files.length + ' files.');
