import { mkdir, writeFile } from 'fs/promises';
import { existsSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const baseDir = join(dirname(__dirname), 'src');

const directories = [
  // App directory structure
  'app',
  'app/(public)/about',
  'app/(public)/academics',
  'app/(public)/admissions',
  'app/(public)/campus-life',
  'app/(public)/news',
  'app/(public)/contact',
  'app/(auth)/login',
  'app/(auth)/register',
  'app/(auth)/verify-email',
  'app/(dashboard)/admin',
  'app/(dashboard)/teacher',
  'app/(dashboard)/student',
  'app/(dashboard)/parent',
  
  // Components directory structure
  'components/layout',
  'components/layout/Navigation',
  'components/public',
  'components/dashboard/admin',
  'components/dashboard/teacher',
  'components/dashboard/student',
  'components/dashboard/parent',
  'components/ui',
  
  // Library directory structure
  'lib/supabase',
  'lib/utils',
  'lib/constants',
  
  // Other directories
  'hooks',
  'types',
  'styles',
];

const baseFiles = [
  // Root files
  'app/layout.tsx',
  'app/page.tsx',
  
  // Layout components
  'components/layout/Header.tsx',
  'components/layout/Footer.tsx',
  'components/layout/Navigation/MainNav.tsx',
  
  // Essential UI components
  'components/ui/Button.tsx',
  'components/ui/Input.tsx',
  'components/ui/Card.tsx',
  'components/ui/Alert.tsx',
  'components/ui/LoadingSpinner.tsx',
  
  // Utility files
  'lib/supabase/client.ts',
  'lib/utils/auth.ts',
  'lib/constants/navigation.ts',
  
  // Type definitions
  'types/index.ts',
  
  // Styles
  'styles/globals.css',
];

async function createDirectories() {
  for (const dir of directories) {
    const fullPath = join(baseDir, dir);
    try {
      if (!existsSync(fullPath)) {
        await mkdir(fullPath, { recursive: true });
        console.log(`Created directory: ${fullPath}`);
      }
    } catch (error) {
      console.error(`Error creating directory ${fullPath}:`, error);
    }
  }
}

async function createFiles() {
  for (const file of baseFiles) {
    const fullPath = join(baseDir, file);
    try {
      if (!existsSync(fullPath)) {
        await writeFile(fullPath, '', 'utf8');
        console.log(`Created file: ${fullPath}`);
      }
    } catch (error) {
      console.error(`Error creating file ${fullPath}:`, error);
    }
  }
}

// Execute setup
async function setup() {
  try {
    await createDirectories();
    await createFiles();
    console.log('Setup completed successfully!');
  } catch (error) {
    console.error('Setup failed:', error);
  }
}

setup();