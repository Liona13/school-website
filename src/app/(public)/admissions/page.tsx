import AdmissionsHero from '@/components/public/admissions/AdmissionsHero'
import ProcessSection from '@/components/public/admissions/ProcessSection'
import RequirementsSection from '@/components/public/admissions/RequirementsSection'
import ApplicationSection from '@/components/public/admissions/ApplicationSection'

export default function AdmissionsPage() {
  return (
    <main>
      <AdmissionsHero />
      <ProcessSection />
      <RequirementsSection />
      <ApplicationSection />
    </main>
  )
} 