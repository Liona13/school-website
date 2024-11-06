import AcademicsHero from '@/components/public/academics/AcademicsHero';
import ProgramsSection from '@/components/public/academics/ProgramsSection';
import CurriculumSection from '@/components/public/academics/CurriculumSection';
import FacultySection from '@/components/public/academics/FacultySection';

export default function AcademicsPage() {
  return (
    <main>
      <AcademicsHero />
      <ProgramsSection />
      <CurriculumSection />
      <FacultySection />
    </main>
  );
} 