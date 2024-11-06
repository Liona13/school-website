import Link from 'next/link'

const newsItems = [
  {
    id: 1,
    title: 'New Academic Year Registration Open',
    date: '2024-03-15',
    excerpt: 'Registration for the upcoming academic year is now open. Early bird discounts available.',
    href: '/news/registration-open',
  },
  {
    id: 2,
    title: 'Academic Excellence Awards 2024',
    date: '2024-03-10',
    excerpt: 'Annual awards ceremony celebrating outstanding student achievements.',
    href: '/news/excellence-awards',
  },
  {
    id: 3,
    title: 'Summer Programs Announcement',
    date: '2024-03-05',
    excerpt: 'Exciting summer learning opportunities for students of all ages.',
    href: '/news/summer-programs',
  },
]

export default function NewsSection() {
  return (
    <section className="relative overflow-hidden bg-blue-50">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="container-wrapper section-padding relative">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 ml-4 md:ml-8">
          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-800">
              Latest News & Updates
            </h2>
            <div className="absolute -bottom-2 left-0 w-1/3 h-1 bg-blue-500 rounded-full" />
          </div>
          
          <Link 
            href="/news" 
            className="group relative overflow-hidden px-6 py-2 rounded-lg hover:bg-blue-100 transition-all duration-300"
          >
            <span className="relative flex items-center text-blue-700 group-hover:text-blue-800">
              View all news
              <span className="ml-2 transform group-hover:translate-x-1 transition-transform">
                →
              </span>
            </span>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mx-4 md:mx-8">
          {newsItems.map((item) => (
            <article
              key={item.id}
              className="group relative bg-white rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-blue-100"
            >
              <div className="relative p-6">
                <time className="text-sm font-medium text-blue-600">
                  {new Date(item.date).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </time>
                
                <h3 className="text-xl font-semibold mt-3 mb-4 text-blue-900 group-hover:text-blue-700 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-blue-800/80 mb-6 line-clamp-3">
                  {item.excerpt}
                </p>
                
                <Link
                  href={item.href}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700"
                >
                  <span className="relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-blue-600 
                    after:origin-left after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:duration-300">
                    Read more
                  </span>
                  <span className="ml-2 transform group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
} 