import Head from 'next/head';
import { useState } from 'react';
import { Layout, PlantCard } from '@/components';
import { client } from '../../tina/__generated__/client';

interface InventoryProps {
  plants: any[];
  settings: any;
}

const categories = ['All', 'Vegetables', 'Herbs', 'Flowers', 'Trees', 'Shrubs', 'Native Plants'];

export default function Inventory({ plants, settings }: InventoryProps) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [showAvailableOnly, setShowAvailableOnly] = useState(false);

  let filteredPlants = activeCategory === 'All' 
    ? plants 
    : plants.filter(plant => plant.category === activeCategory);
  
  if (showAvailableOnly) {
    filteredPlants = filteredPlants.filter(plant => plant.available);
  }

  return (
    <Layout showPlantInventory={settings?.showPlantInventory}>
      <Head>
        <title>Plant Inventory | The Sunshine Collective</title>
        <meta name="description" content="Browse our selection of plants available for purchase from The Sunshine Collective nursery." />
      </Head>

      {/* Hero */}
      <section className="py-20 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-forest-green mb-6">
              Plant Inventory
            </h1>
            <p className="text-xl text-gray-600">
              Browse our selection of carefully grown plants, from native species 
              to edibles—all raised with regenerative practices.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex flex-wrap justify-center md:justify-start gap-3">
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
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={showAvailableOnly}
                onChange={(e) => setShowAvailableOnly(e.target.checked)}
                className="w-5 h-5 rounded border-gray-300 text-forest-green focus:ring-sage-green"
              />
              <span className="text-gray-700">Available only</span>
            </label>
          </div>
        </div>
      </section>

      {/* Plants Grid */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPlants.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredPlants.map((plant: any) => (
                <PlantCard
                  key={plant._sys.filename}
                  name={plant.name}
                  scientificName={plant.scientificName}
                  category={plant.category}
                  price={plant.price}
                  available={plant.available}
                  image={plant.image}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="w-20 h-20 bg-sage-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-sage-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h2 className="text-2xl font-display font-bold text-forest-green mb-3">
                {activeCategory === 'All' ? 'No plants yet' : `No ${activeCategory} available`}
              </h2>
              <p className="text-gray-600">
                Check back soon for new inventory!
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-sage-green/10 rounded-2xl p-8">
              <h3 className="font-display font-bold text-xl text-forest-green mb-4">
                How to Order
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-sage-green text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">1</span>
                  Browse our available plants
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-sage-green text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">2</span>
                  Contact us with your selection
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-sage-green text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">3</span>
                  Pick up at our location
                </li>
              </ul>
            </div>
            <div className="bg-earth-brown/10 rounded-2xl p-8">
              <h3 className="font-display font-bold text-xl text-forest-green mb-4">
                Our Growing Practices
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-sage-green mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  No synthetic pesticides or fertilizers
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-sage-green mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Compost-enriched growing media
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-sage-green mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Locally adapted varieties
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-sage-green mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Water-wise practices
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-moss-green text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-display font-bold mb-4">
            Looking for Something Specific?
          </h2>
          <p className="text-white/80 mb-8">
            Contact us about custom growing requests or wholesale orders.
          </p>
          <a href="/contact" className="btn-secondary">
            Get in Touch
          </a>
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  let plants: any[] = [];
  let settings = { showPlantInventory: false };

  try {
    const settingsResponse = await client.queries.settings({ relativePath: 'settings.json' });
    settings = settingsResponse.data.settings;
  } catch (e) {
    console.log('No settings yet');
  }

  // If plant inventory is hidden, redirect or show message
  if (!settings.showPlantInventory) {
    return {
      notFound: true,
    };
  }

  try {
    const plantsResponse = await client.queries.inventoryConnection();
    plants = plantsResponse.data.inventoryConnection.edges?.map(edge => edge?.node) || [];
  } catch (e) {
    console.log('No plants yet');
  }

  return {
    props: {
      plants,
      settings,
    },
  };
}
