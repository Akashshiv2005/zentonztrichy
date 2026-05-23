const fs = require('fs');
const path = require('path');

const filesToUpdate = [
  'src/components/About/AboutValues.tsx',
  'src/components/Services/ServicesCTA.tsx',
  'src/components/About/AboutStory.tsx',
  'src/components/About/AboutTestimonials.tsx',
  'src/components/About/AboutHero.tsx',
  'src/components/Footer.tsx',
  'src/components/home/AboutPreviewSection.tsx',
  'src/components/home/HeroSection.tsx',
  'src/components/home/ServicesSection.tsx',
  'src/components/About/AboutCTA.tsx',
  'src/components/Contact/ContactMap.tsx',
  'src/components/Contact/ContactInfo.tsx',
  'src/components/About/AboutTimeline.tsx',
  'src/components/ui/InteractiveMembershipCard.tsx',
  'src/pages/Membership.tsx'
];

for (const relPath of filesToUpdate) {
  const fullPath = path.join('/Users/apple/Documents/zentonez project/zentonez', relPath);
  if (fs.existsSync(fullPath)) {
    let content = fs.readFileSync(fullPath, 'utf8');
    // Replace Zentonez with Zen Tonez globally
    content = content.replace(/Zentonez/g, 'Zen Tonez');
    fs.writeFileSync(fullPath, content, 'utf8');
    console.log(`Updated ${relPath}`);
  } else {
    console.log(`Not found: ${relPath}`);
  }
}
