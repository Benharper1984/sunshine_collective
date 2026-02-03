import Head from 'next/head';
import Image from 'next/image';
import { Layout } from '@/components';
import { client } from '../../tina/__generated__/client';

interface AboutProps {
  page: any;
  settings: any;
}

export default function About({ page, settings }: AboutProps) {
  return (
    <Layout showPlantInventory={settings?.showPlantInventory}>
      <Head>
        <title>About Kelly | The Sunshine Collective</title>
        <meta name="description" content="Meet Kelly, founder of The Sunshine Collective. Learn about her permaculture journey and philosophy." />
      </Head>

      {/* Hero */}
      <section className="relative py-20 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-forest-green mb-6">
                {page?.title || 'About Kelly'}
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                {page?.subtitle || 'Permaculture designer, native habitat specialist, and passionate advocate for regenerative landscapes.'}
              </p>
            </div>
            <div className="relative">
              <div className="relative h-96 rounded-2xl overflow-hidden">
                <Image
                  src={page?.heroImage || '/uploads/kelly-portrait.jpg'}
                  alt="Kelly - The Sunshine Collective"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose-sunshine">
            <h2>My Journey to Permaculture</h2>
            <p>
              My path to permaculture began in my grandmother&apos;s garden, where I first 
              learned that working with nature—rather than against it—creates abundance 
              beyond measure. Those early lessons in companion planting, composting, and 
              patient observation planted seeds that would later blossom into my life&apos;s work.
            </p>
            <p>
              After completing my Permaculture Design Certificate and studying native 
              habitat restoration, I founded The Sunshine Collective with a simple mission: 
              to help people create landscapes that regenerate the earth while providing 
              beauty, food, and habitat.
            </p>

            <h2>My Philosophy</h2>
            <p>
              I believe that every landscape has the potential to be a thriving ecosystem. 
              Whether it&apos;s a small urban balcony or a sprawling rural property, we can 
              design spaces that:
            </p>
            <ul>
              <li>Work with natural patterns and cycles</li>
              <li>Build soil health and capture water</li>
              <li>Provide habitat for pollinators and wildlife</li>
              <li>Produce food, medicine, and beauty</li>
              <li>Require less maintenance over time</li>
              <li>Connect people with the natural world</li>
            </ul>

            <h2>Education & Credentials</h2>
            <ul>
              <li>Permaculture Design Certificate (PDC)</li>
              <li>Advanced Permaculture Design Course</li>
              <li>Native Plant Society Certified Specialist</li>
              <li>Master Gardener Program Graduate</li>
              <li>Rainwater Harvesting Certification</li>
            </ul>

            <h2>Why &quot;The Sunshine Collective&quot;?</h2>
            <p>
              The sun is the ultimate source of all energy in our gardens and landscapes. 
              Every leaf captures sunlight, transforming it into the abundance we see in 
              nature. The &quot;Collective&quot; represents my belief that we&apos;re all in this 
              together—plants, animals, soil organisms, and humans creating interconnected 
              systems of life.
            </p>
            <p>
              I&apos;m passionate about sharing knowledge and empowering others to become 
              stewards of their own land. That&apos;s why education and workshops are such an 
              important part of what I do.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-12">Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-8 text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-display font-bold text-forest-green mb-3">
                Earth Care
              </h3>
              <p className="text-gray-600">
                Every design decision prioritizes soil health, water conservation, and ecosystem restoration.
              </p>
            </div>
            <div className="card p-8 text-center">
              <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-display font-bold text-forest-green mb-3">
                People Care
              </h3>
              <p className="text-gray-600">
                Creating spaces that nourish body, mind, and spirit while building community connections.
              </p>
            </div>
            <div className="card p-8 text-center">
              <div className="w-16 h-16 bg-gradient-earth rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-xl font-display font-bold text-forest-green mb-3">
                Fair Share
              </h3>
              <p className="text-gray-600">
                Sharing knowledge, resources, and abundance to create a more sustainable world for all.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  let page = null;
  let settings = { showPlantInventory: false };

  try {
    const pageResponse = await client.queries.page({ relativePath: 'about.mdx' });
    page = pageResponse.data.page;
  } catch (e) {
    console.log('No about page content yet');
  }

  try {
    const settingsResponse = await client.queries.settings({ relativePath: 'settings.json' });
    settings = settingsResponse.data.settings;
  } catch (e) {
    console.log('No settings yet');
  }

  return {
    props: {
      page,
      settings,
    },
  };
}
