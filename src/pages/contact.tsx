import Head from 'next/head';
import { Layout, ContactForm } from '@/components';
import { client } from '../../tina/__generated__/client';

interface ContactProps {
  settings: any;
}

export default function Contact({ settings }: ContactProps) {
  return (
    <Layout showPlantInventory={settings?.showPlantInventory}>
      <Head>
        <title>Contact | The Sunshine Collective</title>
        <meta name="description" content="Get in touch with The Sunshine Collective for permaculture design consultations, native habitat restoration, or workshop inquiries." />
      </Head>

      {/* Hero */}
      <section className="py-20 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-forest-green mb-6">
              Let&apos;s Create Something Beautiful
            </h1>
            <p className="text-xl text-gray-600">
              Ready to transform your landscape? I&apos;d love to hear about your project 
              and explore how we can work together.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-display font-bold text-forest-green mb-6">
                Get in Touch
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-sage-green/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-sage-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <a href={`mailto:${settings?.contactEmail || 'hello@sunshinecollective.com'}`} className="text-sage-green hover:text-forest-green transition-colors">
                      {settings?.contactEmail || 'hello@sunshinecollective.com'}
                    </a>
                  </div>
                </div>

                {settings?.phone && (
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-sage-green/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-sage-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Phone</h3>
                      <a href={`tel:${settings.phone}`} className="text-sage-green hover:text-forest-green transition-colors">
                        {settings.phone}
                      </a>
                    </div>
                  </div>
                )}

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-sage-green/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-sage-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Service Area</h3>
                    <p className="text-gray-600">
                      {settings?.location || 'Pacific Northwest'}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 p-6 bg-sage-green/10 rounded-2xl">
                <h3 className="font-display font-bold text-forest-green mb-3">
                  What to Expect
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-sage-green mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Response within 24-48 hours
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-sage-green mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Free 15-minute discovery call
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-sage-green mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Customized project proposal
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-sage-green mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    No pressure, just conversation
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-cream rounded-2xl p-8">
                <h2 className="text-2xl font-display font-bold text-forest-green mb-6">
                  Send a Message
                </h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6">
              <h3 className="font-display font-bold text-forest-green mb-2">
                What areas do you serve?
              </h3>
              <p className="text-gray-600">
                I primarily serve the Pacific Northwest region, but I&apos;m available for 
                remote consultations and design work anywhere in North America.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6">
              <h3 className="font-display font-bold text-forest-green mb-2">
                How long does a typical project take?
              </h3>
              <p className="text-gray-600">
                Project timelines vary based on scope. A simple consultation might be 
                completed in a day, while a comprehensive design can take 4-8 weeks. 
                Installation timelines depend on the season and project size.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6">
              <h3 className="font-display font-bold text-forest-green mb-2">
                Do you offer payment plans?
              </h3>
              <p className="text-gray-600">
                Yes! I offer flexible payment options for larger projects. We can discuss 
                what works best for your situation during our initial consultation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  let settings = { showPlantInventory: false };

  try {
    const settingsResponse = await client.queries.settings({ relativePath: 'settings.json' });
    settings = settingsResponse.data.settings;
  } catch (e) {
    console.log('No settings yet');
  }

  return {
    props: {
      settings,
    },
  };
}
