import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Layout } from '@/components';
import { client } from '../../../tina/__generated__/client';
import { TinaMarkdown } from 'tinacms/dist/rich-text';

interface ServiceDetailProps {
  service: any;
  settings: any;
}

export default function ServiceDetail({ service, settings }: ServiceDetailProps) {
  if (!service) {
    return (
      <Layout showPlantInventory={settings?.showPlantInventory}>
        <div className="min-h-screen flex items-center justify-center">
          <p>Service not found</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout showPlantInventory={settings?.showPlantInventory}>
      <Head>
        <title>{service.title} | Services | The Sunshine Collective</title>
        <meta name="description" content={service.shortDescription || `Learn more about ${service.title} from The Sunshine Collective.`} />
      </Head>

      <article>
        {/* Hero */}
        <header className="py-20 hero-gradient">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/services" className="inline-flex items-center text-sage-green hover:text-forest-green transition-colors mb-6">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              All Services
            </Link>
            
            <h1 className="text-4xl md:text-5xl font-display font-bold text-forest-green mb-6">
              {service.title}
            </h1>
            
            {service.shortDescription && (
              <p className="text-xl text-gray-600 max-w-3xl">{service.shortDescription}</p>
            )}
            
            {service.price && (
              <p className="text-2xl font-bold text-sage-green mt-6">From {service.price}</p>
            )}
          </div>
        </header>

        {/* Image */}
        {service.image && (
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
            <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        )}

        {/* Content */}
        {service.body && (
          <section className="py-16">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="prose-sunshine">
                <TinaMarkdown content={service.body} />
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-16 bg-cream">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-display font-bold text-forest-green mb-4">
              Interested in {service.title}?
            </h2>
            <p className="text-gray-600 mb-8">
              Let&apos;s discuss how this service can help transform your landscape.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                Get in Touch
              </Link>
              <Link href="/services" className="btn-outline">
                View All Services
              </Link>
            </div>
          </div>
        </section>
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  try {
    const servicesResponse = await client.queries.serviceConnection();
    const services = servicesResponse.data.serviceConnection.edges || [];
    
    return {
      paths: services.map((service: any) => ({
        params: { slug: service?.node?._sys.filename },
      })),
      fallback: 'blocking',
    };
  } catch (e) {
    return {
      paths: [],
      fallback: 'blocking',
    };
  }
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  let service = null;
  let settings = { showPlantInventory: false };

  try {
    const serviceResponse = await client.queries.service({ relativePath: `${params.slug}.mdx` });
    service = serviceResponse.data.service;
  } catch (e) {
    console.log('Service not found');
    return { notFound: true };
  }

  try {
    const settingsResponse = await client.queries.settings({ relativePath: 'settings.json' });
    settings = settingsResponse.data.settings;
  } catch (e) {
    console.log('No settings yet');
  }

  return {
    props: {
      service,
      settings,
    },
  };
}
