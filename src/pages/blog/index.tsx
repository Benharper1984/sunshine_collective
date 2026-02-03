import Head from 'next/head';
import { useState } from 'react';
import { Layout, BlogCard } from '@/components';
import { client } from '../../tina/__generated__/client';

interface BlogProps {
  posts: any[];
  settings: any;
}

const categories = ['All', 'Seasonal Tips', 'Plant Profiles', 'How-To', 'Workshop'];

export default function Blog({ posts, settings }: BlogProps) {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPosts = activeCategory === 'All' 
    ? posts 
    : posts.filter(post => post.category === activeCategory);

  return (
    <Layout showPlantInventory={settings?.showPlantInventory}>
      <Head>
        <title>Blog | The Sunshine Collective</title>
        <meta name="description" content="Educational resources, seasonal tips, plant profiles, and workshop announcements from The Sunshine Collective." />
      </Head>

      {/* Hero */}
      <section className="py-20 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-forest-green mb-6">
              Blog & Resources
            </h1>
            <p className="text-xl text-gray-600">
              Seasonal tips, plant profiles, how-to guides, and workshop announcements 
              to help you on your regenerative gardening journey.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-forest-green text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-sage-green/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post: any) => (
                <BlogCard
                  key={post._sys.filename}
                  title={post.title}
                  date={post.date}
                  category={post.category}
                  excerpt={post.excerpt}
                  image={post.image}
                  slug={post._sys.filename}
                  featured={post.featured}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="w-20 h-20 bg-sage-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-sage-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
              <h2 className="text-2xl font-display font-bold text-forest-green mb-3">
                {activeCategory === 'All' ? 'No posts yet' : `No ${activeCategory} posts`}
              </h2>
              <p className="text-gray-600">
                Check back soon for new content!
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-moss-green text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-display font-bold mb-4">
            Stay in the Loop
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Get seasonal tips, workshop announcements, and permaculture inspiration 
            delivered to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-5 py-3 rounded-full text-gray-900 outline-none focus:ring-2 focus:ring-turquoise"
            />
            <button type="submit" className="btn-secondary">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  let posts: any[] = [];
  let settings = { showPlantInventory: false };

  try {
    const postsResponse = await client.queries.blogConnection();
    posts = postsResponse.data.blogConnection.edges?.map(edge => edge?.node) || [];
    // Sort by date descending
    posts.sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch (e) {
    console.log('No blog posts yet');
  }

  try {
    const settingsResponse = await client.queries.settings({ relativePath: 'settings.json' });
    settings = settingsResponse.data.settings;
  } catch (e) {
    console.log('No settings yet');
  }

  return {
    props: {
      posts,
      settings,
    },
  };
}
