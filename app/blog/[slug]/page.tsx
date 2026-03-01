import { COLORS } from '@/lib/constants';
import Link from 'next/link';
import { Card } from '@/components/ui/card';

export default function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const unwrappedParams = params as unknown as { slug: string };

  const blogPosts: Record<string, any> = {
    'india-green-revolution': {
      title: "India's Green Revolution: Solar Power Takes Center Stage",
      author: 'Rajesh Kumar',
      date: 'March 1, 2024',
      category: 'Industry News',
      image: '🌍',
      content: `
        <h2>The Solar Revolution Begins</h2>
        <p>India is on the cusp of an energy revolution. Solar power, once considered a luxury, is becoming the backbone of India's sustainable energy future. With ambitious targets set by the government and increasing awareness among citizens, solar adoption is accelerating at an unprecedented rate.</p>
        
        <h2>Key Milestones</h2>
        <p>India has already installed over 150GW of renewable energy capacity, with solar accounting for a significant portion. The government's target of 500GW of renewable energy by 2030 is driving massive investments in solar infrastructure.</p>
        
        <h2>Benefits for Consumers</h2>
        <p>As solar becomes mainstream, costs are dropping, making it accessible to more and more households. The average cost of solar installation has decreased by 80% in the last decade, making it an economically viable option for most Indian households.</p>
        
        <h2>Looking Forward</h2>
        <p>The future of solar in India is bright. With technological advancements, improved financing options, and government support, we can expect to see solar energy powering homes and businesses across the nation.</p>
      `,
    },
    'maximize-solar-efficiency': {
      title: 'How to Maximize Your Solar Panel Efficiency',
      author: 'Priya Singh',
      date: 'February 28, 2024',
      category: 'Tips & Tricks',
      image: '⚡',
      content: `
        <h2>Regular Maintenance is Key</h2>
        <p>One of the most important ways to maximize your solar panel efficiency is through regular maintenance. Dust, dirt, and debris can accumulate on your panels, reducing their efficiency by up to 25%.</p>
        
        <h2>Cleaning Guidelines</h2>
        <p>We recommend cleaning your solar panels at least 2-3 times per year. In dusty areas, you might need to clean them more frequently. Use a soft brush and distilled water to avoid damaging the panels.</p>
        
        <h2>Optimal Angle and Direction</h2>
        <p>The angle and direction of your panels are crucial for maximum efficiency. Ideally, panels should face south and be angled at a tilt equal to your latitude. Our team ensures optimal placement during installation.</p>
        
        <h2>Monitor Your System</h2>
        <p>Use your monitoring system to track performance. If you notice a significant drop in output, it might indicate an issue that needs attention. Early detection can prevent costly problems later.</p>
      `,
    },
    'solar-cost-comparison': {
      title: 'Solar Energy Cost Comparison: Then vs Now',
      author: 'Amit Patel',
      date: 'February 25, 2024',
      category: 'Economics',
      image: '💰',
      content: `
        <h2>The Cost Revolution</h2>
        <p>The cost of solar energy has undergone a dramatic transformation over the past decade. In 2010, solar panels cost around ₹300 per watt. Today, they cost less than ₹50 per watt - an 80% reduction!</p>
        
        <h2>Comparing 2010 vs 2024</h2>
        <p>A typical 5KW residential solar system that would have cost ₹15 lakhs in 2010 now costs around ₹2.5 lakhs. This dramatic price drop has made solar accessible to the masses.</p>
        
        <h2>Why the Price Drop?</h2>
        <p>Several factors have contributed to this cost reduction: increased manufacturing scale, technological improvements, government subsidies, and fierce competition among providers. These factors combined have made solar more affordable than ever.</p>
        
        <h2>Return on Investment</h2>
        <p>With these lower costs, the ROI period for solar systems has shortened from 10+ years to just 4-6 years. This means your system pays for itself quickly, and then provides free electricity for decades.</p>
      `,
    },
    'government-subsidies-2024': {
      title: 'Government Subsidies for Solar Installation in 2024',
      author: 'Neha Sharma',
      date: 'February 20, 2024',
      category: 'Government Schemes',
      image: '📋',
      content: `
        <h2>PM-KUSUM Scheme</h2>
        <p>The Pradhan Mantri Kisan Urja Suraksha evam Utthaan Mahabhiyaan (PM-KUSUM) scheme provides subsidies for solar pumps and rooftop solar systems. Farmers and landowners can avail subsidies up to 60% of the system cost.</p>
        
        <h2>Net Metering Benefits</h2>
        <p>Net metering allows you to feed excess solar electricity back to the grid and receive credits. This can significantly reduce your net electricity bill and improve your ROI.</p>
        
        <h2>Income Tax Deductions</h2>
        <p>You can claim 80% depreciation on solar system costs in the first year under the Income Tax Act, providing substantial tax benefits.</p>
        
        <h2>State-Specific Benefits</h2>
        <p>Various states offer additional subsidies and benefits. We help our customers navigate all available options to maximize their savings.</p>
      `,
    },
    'residential-vs-commercial': {
      title: 'Residential vs Commercial Solar: Key Differences',
      author: 'Vikram Singh',
      date: 'February 15, 2024',
      category: 'Comparison',
      image: '🏠',
      content: `
        <h2>Scale and Capacity</h2>
        <p>Residential solar systems typically range from 1-10 KW, while commercial systems start from 50 KW and can go up to several megawatts. This scale difference affects installation, maintenance, and cost.</p>
        
        <h2>Financing and ROI</h2>
        <p>Residential systems have longer ROI periods (5-8 years) due to lower electricity costs, while commercial systems typically achieve ROI in 3-5 years due to higher electricity consumption and rates.</p>
        
        <h2>Maintenance Requirements</h2>
        <p>Commercial systems require more frequent monitoring and maintenance, while residential systems need minimal upkeep. Commercial buildings also have more complex electrical setups.</p>
        
        <h2>Regulatory Compliance</h2>
        <p>Commercial installations involve more regulatory requirements and safety certifications. Our team handles all compliance aspects to ensure smooth installation.</p>
      `,
    },
    'future-solar-battery': {
      title: 'The Future of Solar: Battery Storage Technology',
      author: 'Rahul Gupta',
      date: 'February 10, 2024',
      category: 'Technology',
      image: '🔋',
      content: `
        <h2>Why Battery Storage Matters</h2>
        <p>Battery storage is revolutionizing solar energy by allowing homes and businesses to use solar electricity 24/7, not just during daylight hours. This is a game-changer for energy independence.</p>
        
        <h2>Latest Technology</h2>
        <p>Modern lithium-ion batteries are becoming more affordable and efficient. Prices have dropped 90% in the last decade, making battery storage increasingly feasible for residential installations.</p>
        
        <h2>Benefits of Storage</h2>
        <p>With battery storage, you can: use solar power at night, have backup power during outages, reduce reliance on the grid, and even earn money by storing and using power during peak hours.</p>
        
        <h2>The Future</h2>
        <p>As battery technology continues to improve and costs decrease further, we expect solar + storage systems to become the standard for new installations, providing complete energy independence.</p>
      `,
    },
  };

  const post = blogPosts[unwrappedParams.slug];

  if (!post) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-4xl font-bold">Post Not Found</h1>
        <Link href="/blog">
          <button className="mt-8 px-6 py-3 rounded-lg font-bold text-white" style={{ backgroundColor: COLORS.primary }}>
            Back to Blog
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div>
      {/* Hero */}
      <section className="py-20" style={{ backgroundColor: COLORS.lightBlue }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-6xl mb-6">{post.image}</div>
          <h1 className="text-5xl font-bold mb-6" style={{ color: COLORS.primary }}>
            {post.title}
          </h1>
          <div className="flex flex-wrap justify-center items-center gap-4 text-gray-700">
            <span>By {post.author}</span>
            <span>•</span>
            <span>{post.date}</span>
            <span>•</span>
            <span
              className="px-4 py-2 rounded-full text-white text-sm"
              style={{ backgroundColor: COLORS.primary }}
            >
              {post.category}
            </span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="prose max-w-none text-gray-700"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </section>

      {/* Related Posts */}
      <section className="py-20" style={{ backgroundColor: COLORS.lightBlue }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12" style={{ color: COLORS.primary }}>
            Related Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(blogPosts)
              .filter(([slug]) => slug !== unwrappedParams.slug)
              .slice(0, 3)
              .map(([slug, post]) => (
                <Link key={slug} href={`/blog/${slug}`}>
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer h-full">
                    <div
                      className="h-32 flex items-center justify-center text-4xl"
                      style={{
                        backgroundImage: `linear-gradient(135deg, ${COLORS.primary}20, ${COLORS.gold}20)`,
                      }}
                    >
                      {post.image}
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold mb-2 line-clamp-2" style={{ color: COLORS.primary }}>
                        {post.title}
                      </h3>
                      <p className="text-sm text-gray-600">{post.date}</p>
                    </div>
                  </Card>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* Back Link */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="hover:underline font-semibold" style={{ color: COLORS.primary }}>
            ← Back to Blog
          </Link>
        </div>
      </section>
    </div>
  );
}
