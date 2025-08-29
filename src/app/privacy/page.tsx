'use client'
import React from 'react';

export default function LockedInPrivacyPolicy() {
    // Override global body styles for this page
    if (typeof document !== 'undefined') {
        document.body.style.overflow = 'auto';
    }

    return (
        <div className="min-h-screen bg-gray-50 fixed inset-0 overflow-y-auto">
            <div className="max-w-4xl mx-auto px-6 py-12 pb-20">
                <div className="mb-8">
                    <h1 className="text-4xl font-bold text-gray-900 mb-2">Privacy Policy for LockedIn</h1>
                    <p className="text-gray-600">Last updated: 29/08/2025</p>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-8 w-full">
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
                        <p className="mb-6 text-gray-700 leading-relaxed">
                            LockedIn ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our mobile application.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
                        
                        <div className="mb-6">
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">Information You Provide</h3>
                            <ul className="mb-6 ml-6 space-y-2 text-gray-700 list-disc">
                                <li>App usage preferences and settings</li>
                                <li>Custom blocking rules and schedules you create</li>
                                <li>Timer and session configurations</li>
                            </ul>
                        </div>

                        <div className="mb-6">
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">Automatically Collected Information</h3>
                            <ul className="mb-6 ml-6 space-y-2 text-gray-700 list-disc">
                                <li>Device information (iOS version, device model)</li>
                                <li>App usage analytics and performance data</li>
                                <li>Crash reports and diagnostic information</li>
                            </ul>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Services</h2>
                        
                        <div className="mb-6">
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">RevenueCat</h3>
                            <p className="mb-3 text-gray-700">We use RevenueCat to manage in-app purchases and subscriptions. RevenueCat may collect:</p>
                            <ul className="mb-3 ml-6 space-y-2 text-gray-700 list-disc">
                                <li>Purchase transaction data</li>
                                <li>Device identifiers</li>
                                <li>App usage data related to subscription management</li>
                            </ul>
                            <p className="mb-6 text-gray-700">
                                For more information about RevenueCat's privacy practices, please visit: <a href="https://www.revenuecat.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://www.revenuecat.com/privacy</a>
                            </p>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
                        <p className="mb-3 text-gray-700">We use the collected information to:</p>
                        <ul className="mb-6 ml-6 space-y-2 text-gray-700 list-disc">
                            <li>Provide and maintain the app's functionality</li>
                            <li>Process in-app purchases and manage subscriptions</li>
                            <li>Improve app performance and user experience</li>
                            <li>Provide customer support</li>
                            <li>Analyze app usage patterns to enhance features</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Storage and Security</h2>
                        <ul className="mb-6 ml-6 space-y-2 text-gray-700 list-disc">
                            <li>Your blocking rules and preferences are stored locally on your device</li>
                            <li>We implement appropriate security measures to protect your information</li>
                            <li>Subscription data is securely processed through RevenueCat's infrastructure</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Screen Time and Device Access</h2>
                        <p className="mb-3 text-gray-700">LockedIn requires Screen Time permissions to:</p>
                        <ul className="mb-3 ml-6 space-y-2 text-gray-700 list-disc">
                            <li>Monitor app usage for blocking functionality</li>
                            <li>Implement app restrictions based on your rules</li>
                            <li>Display usage statistics</li>
                        </ul>
                        <p className="mb-6 text-gray-700 leading-relaxed">
                            This data is processed locally on your device and is not transmitted to our servers.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Sharing</h2>
                        <p className="mb-3 text-gray-700">We do not sell, trade, or otherwise transfer your personal information to third parties, except:</p>
                        <ul className="mb-6 ml-6 space-y-2 text-gray-700 list-disc">
                            <li>With RevenueCat for subscription management</li>
                            <li>When required by law or to protect our rights</li>
                            <li>With your explicit consent</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
                        <p className="mb-3 text-gray-700">You have the right to:</p>
                        <ul className="mb-6 ml-6 space-y-2 text-gray-700 list-disc">
                            <li>Access your personal information</li>
                            <li>Correct inaccurate information</li>
                            <li>Delete your account and associated data</li>
                            <li>Opt-out of data collection where applicable</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Children's Privacy</h2>
                        <p className="mb-6 text-gray-700 leading-relaxed">
                            Our app is not intended for children under 13. We do not knowingly collect personal information from children under 13.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Privacy Policy</h2>
                        <p className="mb-6 text-gray-700 leading-relaxed">
                            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy in the app and updating the "Last updated" date.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
                        <p className="mb-6 text-gray-700">
                            If you have any questions about this Privacy Policy, please contact us at:
                        </p>
                        <div className="mb-6 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                            <p className="text-gray-700">
                                <strong>Email:</strong> [Your contact email]<br/>
                                <strong>Address:</strong> [Your contact address if applicable]
                            </p>
                        </div>
                    </section>

                    <div className="mt-8 p-6 bg-gray-100 rounded-lg border-l-4 border-blue-500">
                        <p className="text-sm text-gray-600 mb-0">
                            This privacy policy is effective as of 29/08/2025 and applies to all users of the LockedIn mobile application.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}