import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Layout } from '@/components';
import { client } from '../../../tina/__generated__/client';
import { TinaMarkdown } from 'tinacms/dist/rich-text';

interface GalleryItemProps {
  item: any;
  settings: any;
}

export default function GalleryItem({ item, settings }: GalleryItemProps) {
  if (!item) {
    return (
      <Layout showPlantInventory={settings?.showPlantInventory}>
        <div className="min-h-screen flex items-center justify-center">
          <p>Project not found</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout showPlantInventory={settings?.showPlantInventory}>
      <Head>
        <title>{item.title} | Gallery | The Sunshine Collective</title>
        <meta name="description" content={`View the ${item.title} project transformation by The Sunshine Collective.`} />
      </Head>

      <article>
        {/* Hero */}
        <header className="py-20 hero-gradient">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/gallery" className="inline-flex items-center text-sage-green hover:text-forest-green transition-colors mb-6">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Gallery
            </Link>
            
            <div className="flex items-center gap-4 mb-4">
              <span className="text-xs font-semibold text-white bg-sage-green px-3 py-1 rounded-full">
                {item.category}
              </span>
              {item.date && (
                <time className="text-gray-500">
                  Completed {new Date(item.date).toLocaleDateString('en-US', {
                    month: 'long',
                    year: 'numeric',
                  })}
                </time>
              )}
            </div>
            
            <h1 className="text-4xl md:text-5xl font-display font-bold text-forest-green mb-4">
              {item.title}
            </h1>
            
            {item.client && (
              <p className="text-lg text-gray-600">Client: {item.client}</p>
            )}
          </div>
        </header>

        {/* Before/After Section */}
        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-display font-bold text-forest-green mb-8 text-center">
              The Transformation
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {item.beforeImage && (
                <div className="relative">
                  <div className="relative h-72 md:h-96 rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src={item.beforeImage}
                      alt={`${item.title} - Before`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute bottom-4 left-4 px-4 py-2 bg-earth-brown/90 text-white rounded-full font-semibold">
                    Before
                  </div>
                </div>
              )}
              {item.afterImage && (
                <div className="relative">
                  <div className="relative h-72 md:h-96 rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src={item.afterImage}
                      alt={`${item.title} - After`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute bottom-4 left-4 px-4 py-2 bg-forest-green/90 text-white rounded-full font-semibold">
                    After
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Description */}
        {item.body && (
          <section className="py-16 bg-cream">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-display font-bold text-forest-green mb-6">
                About This Project
              </h2>
              <div className="prose-sunshine">
                <TinaMarkdown content={item.body} />
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-12 bg-white border-t">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-2xl font-display font-bold text-forest-green mb-4">
              Ready for Your Own Transformation?
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                Book a Consultation
              </Link>
              <Link href="/gallery" className="btn-outline">
                View More Projects
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
    const galleryResponse = await client.queries.galleryConnection();
    const items = galleryResponse.data.galleryConnection.edges || [];
    
    return {
      paths: items.map((item: any) => ({
        params: { slug: item?.node?._sys.filename },
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
  let item = null;
  let settings = { showPlantInventory: false };

  try {
    const itemResponse = await client.queries.gallery({ relativePath: `${params.slug}.mdx` });
    item = itemResponse.data.gallery;
  } catch (e) {
    console.log('Gallery item not found');
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
      item,
      settings,
    },
  };
}
