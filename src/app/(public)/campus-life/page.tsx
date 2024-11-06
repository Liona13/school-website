import ActivitiesSection from '@/components/public/campus-life/ActivitiesSection'
import FacilitiesSection from '@/components/public/campus-life/FacilitiesSection'
import EventsSection from '@/components/public/campus-life/EventsSection'
import CampusLifeHero from '@/components/public/campus-life/CampusLifeHero'

export default function CampusLifePage() {
  return (
    <main>
      <CampusLifeHero />
      <ActivitiesSection />
      <FacilitiesSection />
      <EventsSection />
    </main>
  )
} 