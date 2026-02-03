import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { Layout, BlogCard, GalleryCard, ServiceCard } from '@/components';
import { client } from '../../tina/__generated__/client';

interface HomeProps {
  featuredPosts: any[];
  recentGallery: any[];
  services: any[];
  settings: any;
}

export default function Home({ featuredPosts, recentGallery, services, settings }: HomeProps) {
  return (
    <Layout showPlantInventory={settings?.showPlantInventory}>
      <Head>
        <title>The Sunshine Collective | Permaculture Design & Native Habitat Restoration</title>
      </Head>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center hero-gradient overflow-hidden">
        <div className="absolute inset-0 sun-rays" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <span className="inline-block text-sage-green font-semibold mb-4 tracking-wider uppercase">
                Permaculture Design & Restoration
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-forest-green leading-tight mb-6">
                Cultivating
                <span className="block text-sage-green">Regenerative</span>
                Landscapes
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-lg">
                Transform your space into a thriving ecosystem. Native habitat restoration, 
                permaculture design, and sustainable food systems that work with nature.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary">
                  Book a Consultation
                </Link>
                <Link href="/services" className="btn-outline">
                  View Services
                </Link>
              </div>
            </div>
            <div className="relative animate-fade-in-up stagger-2">
              <div className="relative h-96 lg:h-[500px] rounded-3xl overflow-hidden organic-blob bg-gradient-primary">
                <div className="absolute inset-4 rounded-2xl overflow-hidden">
                  <Image
                    src="/uploads/hero-garden.jpg"
                    alt="Beautiful permaculture garden"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts Section */}
      {featuredPosts && featuredPosts.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="section-title">Upcoming Events & Featured</h2>
              <p className="section-subtitle">
                Don&apos;t miss our workshops and latest resources
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPosts.map((post: any) => (
                <BlogCard
                  key={post._sys.filename}
                  title={post.title}
                  date={post.date}
                  category={post.category}
                  excerpt={post.excerpt}
                  image={post.image}
                  slug={post._sys.filename}
                  featured={true}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Services Section */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Services</h2>
            <p className="section-subtitle">
              Comprehensive permaculture solutions for every landscape
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services && services.length > 0 ? (
              services.map((service: any) => (
                <ServiceCard
                  key={service._sys.filename}
                  title={service.title}
                  shortDescription={service.shortDescription}
                  price={service.price}
                  image={service.image}
                  slug={service._sys.filename}
                />
              ))
            ) : (
              <>
                <div className="card p-8">
                  <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-display font-bold text-forest-green mb-3">
                    Permaculture Design
                  </h3>
                  <p className="text-gray-600">
                    Comprehensive site analysis and design plans for regenerative landscapes.
                  </p>
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
                  <p className="text-gray-600">
                    Restore native ecosystems and support local wildlife with native plantings.
                  </p>
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
                  <p className="text-gray-600">
                    Hands-on learning experiences for sustainable gardening and permaculture.
                  </p>
                </div>
              </>
            )}
          </div>
          <div className="text-center mt-10">
            <Link href="/services" className="btn-outline">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Project Gallery</h2>
            <p className="section-subtitle">
              See the transformations from before to after
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentGallery && recentGallery.length > 0 ? (
              recentGallery.map((item: any) => (
                <GalleryCard
                  key={item._sys.filename}
                  title={item.title}
                  category={item.category}
                  beforeImage={item.beforeImage}
                  afterImage={item.afterImage}
                  slug={item._sys.filename}
                  client={item.client}
                />
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-500">Gallery coming soon!</p>
              </div>
            )}
          </div>
          <div className="text-center mt-10">
            <Link href="/gallery" className="btn-primary">
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-moss-green text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative h-96 rounded-2xl overflow-hidden">
                <Image
                  src="/uploads/kelly-portrait.jpg"
                  alt="Kelly - The Sunshine Collective"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Meet Kelly
              </h2>
              <p className="text-white/90 text-lg leading-relaxed mb-6">
                With over a decade of experience in permaculture design and native habitat 
                restoration, I&apos;m passionate about creating landscapes that regenerate the 
                earth while providing abundance for people.
              </p>
              <p className="text-white/80 leading-relaxed mb-8">
                Every project begins with understanding the unique characteristics of your 
                land and your vision. Together, we&apos;ll create a living system that grows 
                more beautiful and productive with each passing season.
              </p>
              <Link href="/about" className="btn-secondary">
                Learn More About Kelly
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-title mb-6">Ready to Transform Your Landscape?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Whether you have a small urban garden or a large rural property, 
            let&apos;s work together to create a thriving, regenerative ecosystem.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary">
              Schedule a Consultation
            </Link>
            <Link href="/blog" className="btn-outline">
              Read the Blog
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  try {
    // Fetch featured posts
    let featuredPosts: any[] = [];
    try {
      const postsResponse = await client.queries.blogConnection();
      const allPosts = postsResponse.data.blogConnection.edges?.map(edge => edge?.node) || [];
      const now = new Date();
      featuredPosts = allPosts.filter((post: any) => {
        if (!post?.featured) return false;
        if (post.featuredUntil && new Date(post.featuredUntil) < now) return false;
        return true;
      }).slice(0, 3);
    } catch (e) {
      console.log('No blog posts yet');
    }

    // Fetch recent gallery items
    let recentGallery: any[] = [];
    try {
      const galleryResponse = await client.queries.galleryConnection();
      recentGallery = galleryResponse.data.galleryConnection.edges?.map(edge => edge?.node).slice(0, 3) || [];
    } catch (e) {
      console.log('No gallery items yet');
    }

    // Fetch services
    let services: any[] = [];
    try {
      const servicesResponse = await client.queries.serviceConnection();
      services = servicesResponse.data.serviceConnection.edges?.map(edge => edge?.node) || [];
      services.sort((a: any, b: any) => (a.order || 0) - (b.order || 0));
    } catch (e) {
      console.log('No services yet');
    }

    // Fetch settings
    let settings = { showPlantInventory: false };
    try {
      const settingsResponse = await client.queries.settings({ relativePath: 'settings.json' });
      settings = settingsResponse.data.settings;
    } catch (e) {
      console.log('No settings yet');
    }

    return {
      props: {
        featuredPosts,
        recentGallery,
        services,
        settings,
      },
    };
  } catch (e) {
    return {
      props: {
        featuredPosts: [],
        recentGallery: [],
        services: [],
        settings: { showPlantInventory: false },
      },
    };
  }
}
