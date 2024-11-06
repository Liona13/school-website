import ContactHero from '@/components/public/contact/ContactHero'
import ContactForm from '@/components/public/contact/ContactForm'
import LocationSection from '@/components/public/contact/LocationSection'
import ContactInfo from '@/components/public/contact/ContactInfo'

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <LocationSection />
    </main>
  )
} 