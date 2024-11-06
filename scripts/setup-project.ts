import fs from 'fs';
import path from 'path';

const directories = [
  'src/app/(public)',
  'src/app/(auth)',
  'src/app/(dashboard)',
  'src/components/layout',
  'src/components/public',
  'src/components/public/academics',
  'src/components/public/about',
  'src/components/ui',
  'src/lib/utils',
  'src/hooks',
  'src/types',
];

directories.forEach(dir => {
  const fullPath = path.join(process.cwd(), dir);
  if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(fullPath, { recursive: true });
    console.log(`Created directory: ${dir}`);
  }
}); 