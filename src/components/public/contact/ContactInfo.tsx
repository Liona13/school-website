"use client";

import { motion } from 'framer-motion';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';

const contactInfo = [
  {
    title: 'Call Us',
    icon: <PhoneIcon className="h-6 w-6" />,
    details: [
      { label: 'Main Office', value: '+1 (555) 123-4567' },
      { label: 'Admissions', value: '+1 (555) 234-5678' },
      { label: 'Hours', value: 'Mon-Fri: 8:00 AM - 5:00 PM' }
    ]
  },
  {
    title: 'Email Us',
    icon: <EnvelopeIcon className="h-6 w-6" />,
    details: [
      { label: 'General Inquiries', value: 'info@schoolms.edu' },
      { label: 'Admissions', value: 'admissions@schoolms.edu' },
      { label: 'Support', value: 'support@schoolms.edu' }
    ]
  },
  {
    title: 'Visit Us',
    icon: <MapPinIcon className="h-6 w-6" />,
    details: [
      { label: 'Address', value: '123 Education Street' },
      { label: 'City', value: 'Learning City, ED 12345' },
      { label: 'Country', value: 'United States' }
    ]
  }
];

const ContactInfo = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.title}
              className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-green-100 rounded-lg text-green-600">
                  {info.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {info.title}
                </h3>
              </div>

              <div className="space-y-3">
                {info.details.map((detail) => (
                  <div key={detail.label}>
                    <p className="text-sm text-gray-500">{detail.label}</p>
                    <p className="text-green-700 font-medium">
                      {detail.value}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactInfo; 