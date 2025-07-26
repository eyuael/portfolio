'use client'
import React from 'react';

export default function FaunaFinderPrivacyPolicy() {
    // Override global body styles for this page
    if (typeof document !== 'undefined') {
        document.body.style.overflow = 'auto';
    }

    return (
        <div className="min-h-screen bg-gray-50 fixed inset-0 overflow-y-auto">
            <div className="max-w-4xl mx-auto px-6 py-12 pb-20">
                <div className="mb-8">
                    <h1 className="text-4xl font-bold text-gray-900 mb-2">Privacy Policy for FaunaFinder</h1>
                    <p className="text-gray-600">Last Updated: July 26, 2025</p>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-8 w-full">
                    <section className="mb-8">
                        <p className="mb-6 text-gray-700 leading-relaxed">
                            Welcome to FaunaFinder! Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application, FaunaFinder (the "App"). Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the application.
                        </p>
                        <p className="mb-6 text-gray-700 leading-relaxed">
                            We reserve the right to make changes to this Privacy Policy at any time and for any reason. We will alert you about any changes by updating the "Last Updated" date of this Privacy Policy. You are encouraged to periodically review this Privacy Policy to stay informed of updates. You will be deemed to have been made aware of, will be subject to, and will be deemed to have accepted the changes in any revised Privacy Policy by your continued use of the App after the date such revised Privacy Policy is posted.
                        </p>
                        <p className="mb-6 text-gray-700 leading-relaxed">
                            This Privacy Policy does not apply to the third-party online/mobile store from which you install the App or make payments, including any in-game virtual items, which may also collect and use data about you. We are not responsible for any of the data collected by any such third party.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">COLLECTION OF YOUR INFORMATION</h2>
                        <p className="mb-6 text-gray-700 leading-relaxed">
                            We may collect information about you in a variety of ways. The information we may collect via the App depends on the content and materials you use, and includes:
                        </p>

                        <div className="mb-6">
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">Personal Data</h3>
                            <p className="mb-6 text-gray-700 leading-relaxed">
                                While using our App, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. For FaunaFinder, this is primarily in the form of images you upload for analysis.
                            </p>
                        </div>

                        <div className="mb-6">
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">Derivative Data</h3>
                            <p className="mb-3 text-gray-700">
                                Information our servers automatically collect when you access the App, such as your unique device ID, your mobile operating system, and your model and manufacturer of your mobile device. Specifically, we collect:
                            </p>
                            <ul className="mb-6 ml-6 space-y-2 text-gray-700 list-disc">
                                <li><strong>Device Identification:</strong> We use a unique device identifier to associate your device with your account and purchases. We may use the Identifier for Vendors (IDFV) on iOS devices and the Android ID on Android devices. If these are not available, we may generate a unique UUID and store it locally on your device.</li>
                                <li><strong>Device Information:</strong> When you first use the App, we may collect your device name, operating system name and version, device brand, and model. This helps us to optimize the App for your device.</li>
                            </ul>
                        </div>

                        <div className="mb-6">
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">Financial Data</h3>
                            <p className="mb-6 text-gray-700 leading-relaxed">
                                All financial information is stored and processed by our payment processor, <a href="https://www.revenuecat.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">RevenueCat</a>. We do not collect or store any financial information on our servers. You are encouraged to review their privacy policy and contact them directly for responses to your questions.
                            </p>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">USE OF YOUR INFORMATION</h2>
                        <p className="mb-3 text-gray-700">
                            Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the App to:
                        </p>
                        <ul className="mb-6 ml-6 space-y-2 text-gray-700 list-disc">
                            <li>Provide the core functionality of animal identification from the images you provide.</li>
                            <li>Create and manage your account, including your scan history and purchase credits/subscriptions.</li>
                            <li>Process payments and refunds.</li>
                            <li>Monitor and analyze usage and trends to improve your experience with the App.</li>
                            <li>Perform other business activities as needed.</li>
                            <li>Prevent fraudulent transactions, monitor against theft, and protect against criminal activity.</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">DISCLOSURE OF YOUR INFORMATION</h2>
                        <p className="mb-6 text-gray-700 leading-relaxed">
                            We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
                        </p>

                        <div className="mb-6">
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">By Law or to Protect Rights</h3>
                            <p className="mb-6 text-gray-700 leading-relaxed">
                                If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.
                            </p>
                        </div>

                        <div className="mb-6">
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">Third-Party Service Providers</h3>
                            <p className="mb-3 text-gray-700">
                                We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, hosting services, and customer service. Our key service providers are:
                            </p>
                            <ul className="mb-6 ml-6 space-y-2 text-gray-700 list-disc">
                                <li><strong>Google Cloud Platform (GCP):</strong> Our backend infrastructure is hosted on GCP, which includes our servers (Cloud Functions) and data storage (Google Cloud Storage). Images you upload are stored securely on Google Cloud Storage.</li>
                                <li><strong>Google Gemini:</strong> We use Google's Gemini AI service to perform the animal identification. Images you submit for analysis will be processed by this service.</li>
                                <li><strong>RevenueCat:</strong> We use RevenueCat to manage in-app purchases and subscriptions.</li>
                            </ul>
                            <p className="text-gray-700 leading-relaxed">
                                We encourage you to review the privacy policies of our third-party service providers.
                            </p>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">SECURITY OF YOUR INFORMATION</h2>
                        <p className="mb-6 text-gray-700 leading-relaxed">
                            We use administrative, technical, and physical security measures to help protect your personal information. We use signed URLs for uploading images directly to Google Cloud Storage, which means your images are sent securely without passing through our servers first. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">POLICY FOR CHILDREN</h2>
                        <p className="mb-6 text-gray-700 leading-relaxed">
                            We do not knowingly solicit information from or market to children under the age of 13. If you become aware of any data we have collected from children under age 13, please contact us using the contact information provided below.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">CONTACT US</h2>
                        <p className="mb-6 text-gray-700">
                            If you have questions or comments about this Privacy Policy, please contact us at:
                        </p>
                        <div className="mb-6 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                            <p className="text-gray-700">
                                <strong>Email:</strong> eyuael.berhe@gmail.com
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
} 