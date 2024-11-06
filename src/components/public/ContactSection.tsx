import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline'

export default function ContactSection() {
  return (
    <section className="relative bg-green-50">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="container-wrapper section-padding relative">
        <div className="text-center mb-16 mx-4 md:mx-8">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
            Get in Touch
          </h2>
          <p className="text-green-700 max-w-2xl mx-auto">
            Have questions? We&apos;re here to help. Contact us through any of the following channels.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mx-4 md:mx-8">
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 
            hover:-translate-y-1 border border-green-100 group">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-green-100 rounded-lg group-hover:bg-green-200 transition-colors">
                <PhoneIcon className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2 text-green-900 group-hover:text-green-700 transition-colors">
                  Call Us
                </h3>
                <p className="text-green-800">+1 (555) 123-4567</p>
                <p className="text-green-700">Mon-Fri: 8:00 AM - 5:00 PM</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 
            hover:-translate-y-1 border border-green-100 group">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-green-100 rounded-lg group-hover:bg-green-200 transition-colors">
                <EnvelopeIcon className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2 text-green-900 group-hover:text-green-700 transition-colors">
                  Email Us
                </h3>
                <p className="text-green-800">info@schoolms.edu</p>
                <p className="text-green-700">admissions@schoolms.edu</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 
            hover:-translate-y-1 border border-green-100 group">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-green-100 rounded-lg group-hover:bg-green-200 transition-colors">
                <MapPinIcon className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2 text-green-900 group-hover:text-green-700 transition-colors">
                  Visit Us
                </h3>
                <p className="text-green-800">123 Education Street</p>
                <p className="text-green-700">Learning City, ED 12345</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 