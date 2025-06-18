export default function SourcedPrivacyPage() {
  // Override global body styles for this page
  if (typeof document !== 'undefined') {
    document.body.style.overflow = 'auto';
  }

  return (
    <div className="min-h-screen bg-gray-50 fixed inset-0 overflow-y-auto">
      <div className="max-w-4xl mx-auto px-6 py-12 pb-20">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Privacy Policy for Sourced It</h1>
          <p className="text-gray-600">Last updated: 18/06/2025</p>
        </div>

        {/* Privacy Policy Content */}
        <div className="bg-white rounded-lg shadow-lg p-8 w-full">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
            <p className="mb-6 text-gray-700 leading-relaxed">
              Welcome to Sourced It ("we," "our," or "us"). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application Sourced It (the "App"). Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the application.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">2.1 Personal Information You Provide</h3>
              <p className="mb-3 text-gray-700">We may collect personal information that you voluntarily provide to us when you:</p>
              <ul className="mb-6 ml-6 space-y-2 text-gray-700 list-disc">
                <li><strong>Create an Account:</strong> Email address, name, and profile picture (when signing up via Google or Apple)</li>
                <li><strong>Sign In with Third-Party Services:</strong>
                  <ul className="ml-6 mt-2 space-y-1 list-disc">
                    <li><strong>Google Sign-In:</strong> Google ID, email address, name, and profile picture</li>
                    <li><strong>Apple Sign-In:</strong> Apple ID, email address, and name (when provided)</li>
                  </ul>
                </li>
                <li><strong>Create Search Alerts:</strong> Search terms, category preferences, brand preferences, size preferences, color preferences, material preferences, location preferences, condition preferences, and price ranges</li>
                <li><strong>Favorite Items:</strong> Product listings you mark as favorites</li>
                <li><strong>Make In-App Purchases:</strong> Purchase information processed through Apple App Store or Google Play Store (we do not directly collect payment information)</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">2.2 Information Automatically Collected</h3>
              <p className="mb-3 text-gray-700">When you use our App, we may automatically collect certain information, including:</p>
              <ul className="mb-6 ml-6 space-y-2 text-gray-700 list-disc">
                <li><strong>Device Information:</strong> Device type, operating system, unique device identifiers</li>
                <li><strong>Usage Data:</strong> App usage patterns, features used, time spent in the app</li>
                <li><strong>Push Notification Tokens:</strong> To send you search alerts and notifications</li>
                <li><strong>Authentication Tokens:</strong> Secure tokens for maintaining your logged-in session</li>
                <li><strong>Search and Browse History:</strong> Your search queries, filter selections, and browsing behavior within the app</li>
                <li><strong>Interaction Data:</strong> Items viewed, favorite status changes, listing interactions</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">2.3 Third-Party Data Sources</h3>
              <p className="mb-3 text-gray-700">Our App aggregates publicly available product listings from third-party platforms (primarily Vinted) to provide you with search results. This includes:</p>
              <ul className="mb-6 ml-6 space-y-2 text-gray-700 list-disc">
                <li>Product titles, descriptions, and images</li>
                <li>Pricing information</li>
                <li>Seller information (usernames only)</li>
                <li>Product condition and category information</li>
                <li>Listing URLs and metadata</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
            <p className="mb-3 text-gray-700">We use the information we collect to:</p>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">3.1 Provide App Functionality</h3>
              <ul className="mb-6 ml-6 space-y-2 text-gray-700 list-disc">
                <li>Create and manage your user account</li>
                <li>Authenticate your identity and maintain secure sessions</li>
                <li>Display personalized search results and product listings</li>
                <li>Save your search preferences and favorite items</li>
                <li>Send push notifications for new listings matching your search criteria</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">3.2 Improve Our Services</h3>
              <ul className="mb-6 ml-6 space-y-2 text-gray-700 list-disc">
                <li>Analyze app usage to improve functionality and user experience</li>
                <li>Monitor app performance and fix technical issues</li>
                <li>Develop new features and services</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">3.3 Communicate With You</h3>
              <ul className="mb-6 ml-6 space-y-2 text-gray-700 list-disc">
                <li>Send important app notifications and updates</li>
                <li>Provide customer support</li>
                <li>Send search alert notifications when new items match your criteria</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">3.4 Process Subscriptions</h3>
              <ul className="mb-6 ml-6 space-y-2 text-gray-700 list-disc">
                <li>Manage premium subscription access</li>
                <li>Process subscription payments through Apple App Store or Google Play Store</li>
                <li>Restore subscription access across devices</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Information Sharing and Disclosure</h2>
            <p className="mb-3 text-gray-700">We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:</p>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">4.1 Third-Party Service Providers</h3>
              <ul className="mb-6 ml-6 space-y-2 text-gray-700 list-disc">
                <li><strong>Authentication Services:</strong> Google and Apple for sign-in functionality</li>
                <li><strong>Push Notifications:</strong> Expo push notification service for sending alerts</li>
                <li><strong>In-App Purchases:</strong> Apple App Store and Google Play Store for subscription processing</li>
                <li><strong>Cloud Infrastructure:</strong> Secure cloud services for data storage and app functionality</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">4.2 Legal Requirements</h3>
              <p className="mb-6 text-gray-700">We may disclose your information if required to do so by law or in response to valid requests by public authorities.</p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">4.3 Business Transfers</h3>
              <p className="mb-6 text-gray-700">In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Security</h2>
            <p className="mb-3 text-gray-700">We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:</p>
            <ul className="mb-6 ml-6 space-y-2 text-gray-700 list-disc">
              <li>Secure data transmission using encryption</li>
              <li>Secure authentication tokens and session management</li>
              <li>Regular security assessments and updates</li>
              <li>Limited access to personal information on a need-to-know basis</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Data Retention</h2>
            <p className="mb-3 text-gray-700">We retain your personal information for as long as necessary to:</p>
            <ul className="mb-3 ml-6 space-y-2 text-gray-700 list-disc">
              <li>Provide you with our services</li>
              <li>Comply with legal obligations</li>
              <li>Resolve disputes</li>
              <li>Enforce our agreements</li>
            </ul>
            <p className="mb-6 text-gray-700">When you delete your account, we will delete your personal information, except where we are required to retain certain information for legal or regulatory purposes.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Your Privacy Rights</h2>
            <p className="mb-3 text-gray-700">Depending on your location, you may have the following rights regarding your personal information:</p>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">7.1 Access and Portability</h3>
              <ul className="mb-6 ml-6 space-y-2 text-gray-700 list-disc">
                <li>Request access to your personal information</li>
                <li>Request a copy of your personal information in a portable format</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">7.2 Correction and Deletion</h3>
              <ul className="mb-6 ml-6 space-y-2 text-gray-700 list-disc">
                <li>Update or correct your personal information</li>
                <li>Request deletion of your personal information</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">7.3 Control Over Data Processing</h3>
              <ul className="mb-6 ml-6 space-y-2 text-gray-700 list-disc">
                <li>Opt out of push notifications (while still using the app)</li>
                <li>Manage your search preferences and favorites</li>
                <li>Control third-party authentication preferences</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">7.4 California Privacy Rights (CCPA)</h3>
              <p className="mb-6 text-gray-700">If you are a California resident, you have additional rights under the California Consumer Privacy Act, including the right to know what personal information we collect and how we use it.</p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">7.5 European Privacy Rights (GDPR)</h3>
              <p className="mb-6 text-gray-700">If you are located in the European Economic Area, you have rights under the General Data Protection Regulation, including the right to access, rectify, erase, restrict processing, and data portability.</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Children's Privacy</h2>
            <p className="mb-6 text-gray-700">Our App is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe we have collected personal information from a child under 13, please contact us immediately.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. International Data Transfers</h2>
            <p className="mb-6 text-gray-700">Your information may be transferred to and processed in countries other than your own. We ensure that such transfers comply with applicable data protection laws and that appropriate safeguards are in place.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Third-Party Links and Services</h2>
            <p className="mb-6 text-gray-700">Our App may contain links to third-party websites or services (such as product listings on external platforms). We are not responsible for the privacy practices of these third parties. We encourage you to review their privacy policies before providing any personal information.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Push Notifications</h2>
            <p className="mb-3 text-gray-700">We use push notifications to:</p>
            <ul className="mb-3 ml-6 space-y-2 text-gray-700 list-disc">
              <li>Alert you when new items match your saved searches</li>
              <li>Send important app updates and announcements</li>
              <li>Notify you about account-related activities</li>
            </ul>
            <p className="mb-6 text-gray-700">You can disable push notifications at any time through your device settings or within the app.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Changes to This Privacy Policy</h2>
            <p className="mb-6 text-gray-700">We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy in the app and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Contact Us</h2>
            <p className="mb-6 text-gray-700">If you have any questions about this Privacy Policy or our privacy practices, please contact us at:</p>
            <div className="mb-6 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
              <p className="text-gray-700">
                <strong>Email:</strong> sourced.it.app@gmail.com<br/>
                <strong>App:</strong> Sourced It - Contact section
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Data Processing Legal Bases (GDPR)</h2>
            <p className="mb-3 text-gray-700">For users in the European Economic Area, our legal bases for processing your personal information include:</p>
            <ul className="mb-6 ml-6 space-y-2 text-gray-700 list-disc">
              <li><strong>Consent:</strong> When you provide explicit consent for specific processing activities</li>
              <li><strong>Contract Performance:</strong> To provide you with our services as outlined in our terms of service</li>
              <li><strong>Legitimate Interests:</strong> To improve our services, ensure security, and provide customer support</li>
              <li><strong>Legal Compliance:</strong> To comply with applicable laws and regulations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">15. App Store Compliance</h2>
            <p className="mb-3 text-gray-700">This app complies with Apple App Store and Google Play Store privacy requirements. We do not:</p>
            <ul className="mb-6 ml-6 space-y-2 text-gray-700 list-disc">
              <li>Collect sensitive personal information without explicit consent</li>
              <li>Share personal information with unauthorized third parties</li>
              <li>Use personal information for purposes other than those disclosed in this policy</li>
              <li>Retain personal information longer than necessary</li>
            </ul>
          </section>

          <div className="mt-8 p-6 bg-gray-100 rounded-lg border-l-4 border-blue-500">
            <p className="text-sm text-gray-600 mb-0">
              By using Sourced It, you acknowledge that you have read and understood this Privacy Policy and agree to the collection, use, and disclosure of your information as described herein.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 