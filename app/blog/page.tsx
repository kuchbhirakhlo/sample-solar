import { COLORS } from '@/lib/constants';
import { Card } from '@/components/ui/card';
import Link from 'next/link';

export default function BlogPage() {
  const posts = [
    {
      id: 1,
      title: "India's Green Revolution: Solar Power Takes Center Stage",
      excerpt: 'Discover how solar energy is transforming India\'s power landscape and creating a sustainable future.',
      image: '🌍',
      date: 'March 1, 2024',
      author: 'Rajesh Kumar',
      category: 'Industry News',
      slug: 'india-green-revolution',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    },
    {
      id: 2,
      title: 'How to Maximize Your Solar Panel Efficiency',
      excerpt: 'Expert tips for getting the most out of your solar installation and maximizing energy generation.',
      image: '⚡',
      date: 'February 28, 2024',
      author: 'Priya Singh',
      category: 'Tips & Tricks',
      slug: 'maximize-solar-efficiency',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    },
    {
      id: 3,
      title: 'Solar Energy Cost Comparison: Then vs Now',
      excerpt: 'See how solar prices have dropped dramatically in the past decade, making it accessible for everyone.',
      image: '💰',
      date: 'February 25, 2024',
      author: 'Amit Patel',
      category: 'Economics',
      slug: 'solar-cost-comparison',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    },
    {
      id: 4,
      title: 'Government Subsidies for Solar Installation in 2024',
      excerpt: 'Complete guide to all available government incentives and subsidies for residential solar.',
      image: '📋',
      date: 'February 20, 2024',
      author: 'Neha Sharma',
      category: 'Government Schemes',
      slug: 'government-subsidies-2024',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    },
    {
      id: 5,
      title: 'Residential vs Commercial Solar: Key Differences',
      excerpt: 'Understanding the differences between residential and commercial solar systems.',
      image: '🏠',
      date: 'February 15, 2024',
      author: 'Vikram Singh',
      category: 'Comparison',
      slug: 'residential-vs-commercial',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    },
    {
      id: 6,
      title: 'The Future of Solar: Battery Storage Technology',
      excerpt: 'Exploring the latest battery storage technologies and their impact on solar adoption.',
      image: '🔋',
      date: 'February 10, 2024',
      author: 'Rahul Gupta',
      category: 'Technology',
      slug: 'future-solar-battery',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    },
  ];

  return (
    <div>
      {/* Header */}
      <section className="py-20" style={{ backgroundColor: COLORS.lightBlue }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6" style={{ color: COLORS.primary }}>
            Solar Blog
          </h1>
          <p className="text-xl text-gray-700">
            Latest articles, tips, and insights about solar energy
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`}>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer h-full flex flex-col">
                  <div
                    className="h-48 flex items-center justify-center text-6xl"
                    style={{
                      backgroundImage: `linear-gradient(135deg, ${COLORS.primary}20, ${COLORS.gold}20)`,
                    }}
                  >
                    {post.image}
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <div className="flex items-center justify-between mb-3">
                      <span
                        className="text-xs font-bold px-3 py-1 rounded-full text-white"
                        style={{ backgroundColor: COLORS.primary }}
                      >
                        {post.category}
                      </span>
                      <span className="text-xs text-gray-500">{post.date}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3" style={{ color: COLORS.primary }}>
                      {post.title}
                    </h3>
                    <p className="text-gray-600 flex-grow mb-4">{post.excerpt}</p>
                    <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                      <span className="text-sm text-gray-600">By {post.author}</span>
                      <a
                        href={`/blog/${post.slug}`}
                        className="font-semibold text-sm hover:opacity-75 transition-opacity"
                        style={{ color: COLORS.primary }}
                      >
                        Read →
                      </a>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20" style={{ backgroundColor: COLORS.lightBlue }}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6" style={{ color: COLORS.primary }}>
            Subscribe to Our Newsletter
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Get the latest solar insights and tips delivered to your inbox
          </p>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-600"
              required
            />
            <button
              type="submit"
              className="px-8 py-3 rounded-lg font-bold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: COLORS.primary }}
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
