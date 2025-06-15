export default function TermsOfUse() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-black mb-6">Terms of Use</h1>
            <p className="text-xl text-blue-100">Please read these terms carefully before using our services.</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
            <div>
              <p className="text-gray-600 mb-6">
                <strong>Last updated:</strong> {new Date().toLocaleDateString()}
              </p>
              <p className="text-gray-700 leading-relaxed">
                These Terms of Use ("Terms") govern your use of the MORARIHUB website and services. By accessing or
                using our platform, you agree to be bound by these Terms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Acceptance of Terms</h2>
              <p className="text-gray-700">
                By creating an account, making a purchase, or using any of our services (Consultation Hub, Automation
                Hub, Fitness Hub, or Product Hub), you acknowledge that you have read, understood, and agree to be bound
                by these Terms and our Privacy Policy.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Services Overview</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Consultation Hub</h3>
                  <p className="text-gray-700">
                    Provides 1-on-1 career coaching sessions and digital career guides. Bookings are managed through
                    Calendly integration.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Automation Hub</h3>
                  <p className="text-gray-700">
                    Offers business automation tools and services for service providers, including missed call
                    automation, web chat systems, and social media management.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Fitness Hub</h3>
                  <p className="text-gray-700">
                    Provides digital fitness transformation resources, meal plans, workout routines, and premium gymwear
                    products.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Product Hub</h3>
                  <p className="text-gray-700">
                    Curated marketplace for trending tech items, fitness gear, and productivity tools.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">User Accounts</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>You must provide accurate and complete information when creating an account</li>
                <li>You are responsible for maintaining the security of your account credentials</li>
                <li>You must notify us immediately of any unauthorized use of your account</li>
                <li>One person may not maintain multiple accounts</li>
                <li>We reserve the right to suspend or terminate accounts that violate these Terms</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Payment and Billing</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Pricing</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Consultation sessions: 30-minute (£50), 60-minute (£90)</li>
                    <li>Digital guides: £25 each</li>
                    <li>Automation services: Tiered pricing from £79-£299</li>
                    <li>Product prices as displayed on the platform</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Payment Terms</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>All payments are processed securely through our payment partners</li>
                    <li>Digital products are delivered instantly upon payment confirmation</li>
                    <li>Consultation bookings require advance payment</li>
                    <li>Prices are subject to change with notice</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Refund Policy</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Digital Products</h3>
                  <p className="text-gray-700">
                    30-day money-back guarantee if you're not satisfied with the quality or content of our digital
                    guides and resources.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Consultation Services</h3>
                  <p className="text-gray-700">
                    Refunds available if cancelled 24+ hours before scheduled session. No-shows are non-refundable.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Physical Products</h3>
                  <p className="text-gray-700">
                    30-day return policy for unused items in original condition. Customer responsible for return
                    shipping.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Intellectual Property</h2>
              <p className="text-gray-700 mb-4">
                All content, materials, and intellectual property on MORARIHUB are owned by us or our licensors. This
                includes:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Digital guides, eBooks, and educational materials</li>
                <li>Automation tools and software solutions</li>
                <li>Fitness programs, meal plans, and workout routines</li>
                <li>Website design, logos, and branding elements</li>
                <li>You may not reproduce, distribute, or create derivative works without permission</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">User Conduct</h2>
              <p className="text-gray-700 mb-4">You agree not to:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Use our services for any illegal or unauthorized purpose</li>
                <li>Share account credentials or digital products with others</li>
                <li>Attempt to reverse engineer or copy our automation tools</li>
                <li>Submit false or misleading information</li>
                <li>Interfere with the proper functioning of our platform</li>
                <li>Harass, abuse, or harm other users or our staff</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Services</h2>
              <p className="text-gray-700 mb-4">
                Our platform integrates with third-party services. Your use of these services is subject to their
                respective terms:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>
                  <strong>Calendly:</strong> For consultation booking and scheduling
                </li>
                <li>
                  <strong>Payment Processors:</strong> For secure payment processing
                </li>
                <li>
                  <strong>Shipping Partners:</strong> For physical product delivery
                </li>
                <li>
                  <strong>Email Services:</strong> For communications and newsletters
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Disclaimers</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Consultation Services</h3>
                  <p className="text-gray-700">
                    Career guidance is provided for informational purposes. Results may vary and are not guaranteed.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Fitness Content</h3>
                  <p className="text-gray-700">
                    Consult healthcare professionals before starting any fitness or nutrition program. We are not liable
                    for health-related issues.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Automation Tools</h3>
                  <p className="text-gray-700">
                    Business results from automation services may vary. Success depends on implementation and market
                    factors.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
              <p className="text-gray-700">
                MORARIHUB shall not be liable for any indirect, incidental, special, consequential, or punitive damages
                arising from your use of our services. Our total liability shall not exceed the amount paid for the
                specific service in question.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Termination</h2>
              <p className="text-gray-700">
                We may terminate or suspend your account and access to our services at our discretion, with or without
                notice, for violations of these Terms or other reasons we deem appropriate.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
              <p className="text-gray-700">For questions about these Terms of Use, please contact us at:</p>
              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <p className="text-gray-800">
                  <strong>Email:</strong> customer-service@morarihub.com
                  <br />
                  <strong>Subject:</strong> Terms of Use Inquiry
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to Terms</h2>
              <p className="text-gray-700">
                We reserve the right to modify these Terms at any time. Changes will be effective immediately upon
                posting. Your continued use of our services constitutes acceptance of the modified Terms.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
