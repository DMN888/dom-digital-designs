const fs = require('fs');
const path = require('path');

const projectsDir = path.join(__dirname, 'src', 'pages', 'projects');
const files = fs.readdirSync(projectsDir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  const filePath = path.join(projectsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // 1. Change <main className="pt-24 pb-32"> to <main className="pt-8 pb-32">
  content = content.replace(/<main className="pt-24 pb-32">/g, '<main className="pt-8 pb-32">');

  // 2. Replace the hero image with the 3 column gallery
  const heroRegex = /<div className="aspect-video w-full overflow-hidden rounded-2xl mb-16 border border-\[#333\]">[\s\S]*?<\/div>/;
  
  const galleryReplacement = `<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="aspect-square w-full overflow-hidden rounded-2xl border border-[#333]">
            <img 
              src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=600&auto=format&fit=crop" 
              alt="Gallery Image 1" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="aspect-square w-full overflow-hidden rounded-2xl border border-[#333]">
            <img 
              src="https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=600&auto=format&fit=crop" 
              alt="Gallery Image 2" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="aspect-square w-full overflow-hidden rounded-2xl border border-[#333]">
            <img 
              src="https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=600&auto=format&fit=crop" 
              alt="Gallery Image 3" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>`;

  content = content.replace(heroRegex, galleryReplacement);

  // 3. Remove the bottom gallery section
  // Wait, the bottom gallery section in the file might have different whitespace.
  // Let's use a regex instead of string replacement to be safe.
  const bottomGalleryRegex = /\{\/\* 3 Column Gallery \*\/\}[\s\S]*?<div className="mt-24">[\s\S]*?<h3 className="text-2xl font-bold text-white mb-8">Gallery<\/h3>[\s\S]*?<div className="grid grid-cols-1 md:grid-cols-3 gap-6">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/;
  
  content = content.replace(bottomGalleryRegex, '');

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated ${file}`);
}
