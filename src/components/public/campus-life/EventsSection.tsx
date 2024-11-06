"use client";

import { motion } from 'framer-motion';

const events = [
  {
    title: 'Annual Sports Day',
    date: 'April 15, 2024',
    time: '9:00 AM - 4:00 PM',
    location: 'School Sports Complex',
    description: 'A day of athletic competitions, team sports, and physical activities for all students.',
    category: 'Sports'
  },
  {
    title: 'Spring Arts Festival',
    date: 'May 1, 2024',
    time: '6:00 PM - 9:00 PM',
    location: 'School Auditorium',
    description: 'Showcase of student artwork, musical performances, and theatrical productions.',
    category: 'Arts'
  },
  {
    title: 'Science Fair',
    date: 'May 10, 2024',
    time: '10:00 AM - 3:00 PM',
    location: 'School Gymnasium',
    description: 'Exhibition of student research projects and scientific experiments.',
    category: 'Academic'
  },
  {
    title: 'Cultural Day',
    date: 'May 20, 2024',
    time: '11:00 AM - 5:00 PM',
    location: 'School Campus',
    description: 'Celebration of diversity through food, music, dance, and traditional customs.',
    category: 'Cultural'
  }
];

const EventsSection = () => {
  return (
    <section className="py-16 bg-white" id="events">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4">Upcoming Events</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join us for exciting events that enrich our campus life and create lasting memories.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              className="bg-gray-50 rounded-xl p-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold mb-1">{event.title}</h3>
                  <span className="inline-block bg-primary text-white text-sm px-3 py-1 rounded-full">
                    {event.category}
                  </span>
                </div>
                <div className="text-right">
                  <p className="text-gray-600">{event.date}</p>
                  <p className="text-sm text-gray-500">{event.time}</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">{event.description}</p>
              <div className="flex items-center text-gray-500">
                <svg 
                  className="w-5 h-5 mr-2" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" 
                  />
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" 
                  />
                </svg>
                {event.location}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <a 
            href="/calendar" 
            className="inline-block bg-primary text-white px-8 py-3 rounded-lg 
              hover:bg-primary-dark transition-colors"
          >
            View Full Calendar
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default EventsSection; 