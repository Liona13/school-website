"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';

const newsArticles = [
  {
    id: 1,
    title: 'New Academic Year Registration Open',
    date: '2024-03-15',
    category: 'Admissions',
    excerpt: 'Registration for the upcoming academic year is now open. Early bird discounts available for registrations before April 30th. Learn about our programs and admission process.',
    image: '/images/news/registration.jpg'
  },
  {
    id: 2,
    title: 'Academic Excellence Awards 2024',
    date: '2024-03-10',
    category: 'Events',
    excerpt: 'Annual awards ceremony celebrating outstanding student achievements across all grades. Join us in recognizing academic excellence and student accomplishments.',
    image: '/images/news/awards.jpg'
  },
  {
    id: 3,
    title: 'Summer Programs Announcement',
    date: '2024-03-05',
    category: 'Programs',
    excerpt: 'Exciting summer learning opportunities for students of all ages. Explore our range of academic and extracurricular programs designed for summer engagement.',
    image: '/images/news/summer.jpg'
  },
  {
    id: 4,
    title: 'Science Fair Winners Announced',
    date: '2024-03-01',
    category: 'Achievements',
    excerpt: 'Congratulations to all participants and winners of this year\'s Science Fair. Discover the innovative projects that impressed our judges.',
    image: '/images/news/science-fair.jpg'
  },
  {
    id: 5,
    title: 'New Sports Facilities Opening',
    date: '2024-02-28',
    category: 'Facilities',
    excerpt: 'State-of-the-art sports complex opening next month. Features include indoor courts, swimming pool, and modern fitness equipment.',
    image: '/images/news/sports.jpg'
  },
  {
    id: 6,
    title: 'Parent-Teacher Conference Schedule',
    date: '2024-02-25',
    category: 'Events',
    excerpt: 'Schedule for upcoming parent-teacher conferences has been released. Book your slots early for productive discussions about student progress.',
    image: '/images/news/conference.jpg'
  }
];

const NewsGrid = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsArticles.map((article, index) => (
            <motion.article
              key={article.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="aspect-w-16 aspect-h-9 bg-gray-100">
                <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-50" />
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <time className="text-sm text-blue-600">
                    {new Date(article.date).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </time>
                  <span className="text-sm px-3 py-1 bg-blue-50 text-blue-700 rounded-full">
                    {article.category}
                  </span>
                </div>

                <h3 className="text-xl font-semibold mb-3 text-gray-900 hover:text-blue-600 transition-colors">
                  <Link href={`/news/${article.id}`}>
                    {article.title}
                  </Link>
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {article.excerpt}
                </p>

                <Link
                  href={`/news/${article.id}`}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700"
                >
                  <span className="border-b border-current">Read more</span>
                  <svg 
                    className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M17 8l4 4m0 0l-4 4m4-4H3" 
                    />
                  </svg>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsGrid; 