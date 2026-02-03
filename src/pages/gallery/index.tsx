import Head from 'next/head';
import { useState } from 'react';
import { Layout, GalleryCard } from '@/components';
import { client } from '../../tina/__generated__/client';

interface GalleryProps {
  items: any[];
  settings: any;
}

const categories = ['All', 'Gardens', 'Native Habitat', 'Water Systems', 'Food Production'];

export default function Gallery({ items, settings }: GalleryProps) {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All' 
    ? items 
    : items.filter(item => item.category === activeCategory);

  return (
    <Layout showPlantInventory={settings?.showPlantInventory}>
      <Head>
        <title>Project Gallery | The Sunshine Collective</title>
        <meta name="description" content="View before and after transformations from The Sunshine Collective's permaculture design and native habitat restoration projects." />
      </Head>

      {/* Hero */}
      <section className="py-20 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-forest-green mb-6">
              Project Gallery
            </h1>
            <p className="text-xl text-gray-600">
              See the transformations—from bare lawns to thriving ecosystems, 
              from struggling gardens to abundant food forests.
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

      {/* Gallery Grid */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredItems.map((item: any) => (
                <GalleryCard
                  key={item._sys.filename}
                  title={item.title}
                  category={item.category}
                  beforeImage={item.beforeImage}
                  afterImage={item.afterImage}
                  slug={item._sys.filename}
                  client={item.client}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="w-20 h-20 bg-sage-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-sage-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-2xl font-display font-bold text-forest-green mb-3">
                {activeCategory === 'All' ? 'No projects yet' : `No ${activeCategory} projects`}
              </h2>
              <p className="text-gray-600">
                Check back soon for project photos!
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-moss-green text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-display font-bold mb-4">
            Ready for Your Transformation?
          </h2>
          <p className="text-white/80 mb-8">
            Let&apos;s create a regenerative landscape that&apos;s uniquely yours.
          </p>
          <a href="/contact" className="btn-secondary">
            Start Your Project
          </a>
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  let items: any[] = [];
  let settings = { showPlantInventory: false };

  try {
    const galleryResponse = await client.queries.galleryConnection();
    items = galleryResponse.data.galleryConnection.edges?.map(edge => edge?.node) || [];
    // Sort by date descending
    items.sort((a: any, b: any) => new Date(b.date || 0).getTime() - new Date(a.date || 0).getTime());
  } catch (e) {
    console.log('No gallery items yet');
  }

  try {
    const settingsResponse = await client.queries.settings({ relativePath: 'settings.json' });
    settings = settingsResponse.data.settings;
  } catch (e) {
    console.log('No settings yet');
  }

  return {
    props: {
      items,
      settings,
    },
  };
}
