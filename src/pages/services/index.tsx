import Head from 'next/head';
import Link from 'next/link';
import { Layout, ServiceCard } from '@/components';
import { client } from '../../tina/__generated__/client';

interface ServicesProps {
  services: any[];
  settings: any;
}

export default function Services({ services, settings }: ServicesProps) {
  return (
    <Layout showPlantInventory={settings?.showPlantInventory}>
      <Head>
        <title>Services | The Sunshine Collective</title>
        <meta name="description" content="Permaculture design consulting, native habitat restoration, and educational workshop services from The Sunshine Collective." />
      </Head>

      {/* Hero */}
      <section className="py-20 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-forest-green mb-6">
              Services
            </h1>
            <p className="text-xl text-gray-600">
              From initial consultations to comprehensive design implementation, 
              I offer a range of services to help you create your dream landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {services && services.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service: any) => (
                <ServiceCard
                  key={service._sys.filename}
                  title={service.title}
                  shortDescription={service.shortDescription}
                  price={service.price}
                  image={service.image}
                  slug={service._sys.filename}
                />
              ))}
            </div>
          ) : (
            /* Default Services */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="card p-8">
                <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-display font-bold text-forest-green mb-3">
                  Initial Site Consultation
                </h3>
                <p className="text-gray-600 mb-4">
                  A comprehensive 2-hour on-site assessment of your property, including soil, 
                  water patterns, sun exposure, and existing vegetation.
                </p>
                <p className="text-sage-green font-semibold">From $200</p>
              </div>

              <div className="card p-8">
                <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-display font-bold text-forest-green mb-3">
                  Permaculture Design
                </h3>
                <p className="text-gray-600 mb-4">
                  Full permaculture design package including detailed plans, plant lists, 
                  implementation phases, and maintenance guidelines.
                </p>
                <p className="text-sage-green font-semibold">From $1,500</p>
              </div>

              <div className="card p-8">
                <div className="w-14 h-14 bg-gradient-accent rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-display font-bold text-forest-green mb-3">
                  Native Habitat Restoration
                </h3>
                <p className="text-gray-600 mb-4">
                  Specialized plans for restoring native ecosystems, supporting pollinators, 
                  and creating wildlife corridors on your property.
                </p>
                <p className="text-sage-green font-semibold">From $800</p>
              </div>

              <div className="card p-8">
                <div className="w-14 h-14 bg-gradient-earth rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-display font-bold text-forest-green mb-3">
                  Workshops & Education
                </h3>
                <p className="text-gray-600 mb-4">
                  Hands-on workshops covering composting, native plants, food forests, 
                  water harvesting, and permaculture principles.
                </p>
                <p className="text-sage-green font-semibold">From $25/person</p>
              </div>

              <div className="card p-8">
                <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-display font-bold text-forest-green mb-3">
                  Implementation Support
                </h3>
                <p className="text-gray-600 mb-4">
                  On-site guidance during installation, plant selection assistance, 
                  and contractor coordination for your project.
                </p>
                <p className="text-sage-green font-semibold">From $75/hour</p>
              </div>

              <div className="card p-8">
                <div className="w-14 h-14 bg-gradient-accent rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-display font-bold text-forest-green mb-3">
                  Seasonal Coaching
                </h3>
                <p className="text-gray-600 mb-4">
                  Quarterly site visits to guide seasonal tasks, troubleshoot issues, 
                  and help your landscape evolve over time.
                </p>
                <p className="text-sage-green font-semibold">From $150/visit</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-12">How We Work Together</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-forest-green text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="font-display font-bold text-lg mb-2">Discovery Call</h3>
              <p className="text-gray-600">
                Free 15-minute call to discuss your vision and determine if we&apos;re a good fit.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-sage-green text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="font-display font-bold text-lg mb-2">Site Visit</h3>
              <p className="text-gray-600">
                Comprehensive assessment of your property&apos;s unique characteristics.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-turquoise text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="font-display font-bold text-lg mb-2">Design</h3>
              <p className="text-gray-600">
                Detailed plans tailored to your goals, budget, and timeline.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-earth-brown text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                4
              </div>
              <h3 className="font-display font-bold text-lg mb-2">Implementation</h3>
              <p className="text-gray-600">
                Support through installation with ongoing guidance as your landscape matures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-moss-green text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-display font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-white/80 mb-8">
            Every project begins with a conversation. Let&apos;s talk about your vision.
          </p>
          <Link href="/contact" className="btn-secondary">
            Book Your Free Discovery Call
          </Link>
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  let services: any[] = [];
  let settings = { showPlantInventory: false };

  try {
    const servicesResponse = await client.queries.serviceConnection();
    services = servicesResponse.data.serviceConnection.edges?.map(edge => edge?.node) || [];
    services.sort((a: any, b: any) => (a.order || 0) - (b.order || 0));
  } catch (e) {
    console.log('No services yet');
  }

  try {
    const settingsResponse = await client.queries.settings({ relativePath: 'settings.json' });
    settings = settingsResponse.data.settings;
  } catch (e) {
    console.log('No settings yet');
  }

  return {
    props: {
      services,
      settings,
    },
  };
}
