import { Metadata } from 'next';
import { generateMetadata as generateSEO } from '@/lib/seo';

export const metadata: Metadata = generateSEO({
  title: 'Privacy Policy',
  description: 'Privacy Policy for Digimon Time Stranger - Learn how we collect, use, and protect your information.',
  url: '/privacy',
});

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
          Privacy Policy
        </h1>
        <p className="text-slate-600 dark:text-slate-400 mb-8">
          Last Updated: October 9, 2025
        </p>

        <div className="prose prose-slate dark:prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
              1. Introduction
            </h2>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
              Welcome to Digimon Time Stranger ("we," "our," or "us"). We are committed to protecting your privacy and ensuring you have a positive experience on our website. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website{' '}
              <a href="https://digimontimestranger.com" className="text-primary-600 dark:text-primary-400 hover:underline">
                digimontimestranger.com
              </a>{' '}
              (the "Site").
            </p>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              Please read this Privacy Policy carefully. By using the Site, you agree to the collection and use of information in accordance with this policy. If you do not agree with the terms of this Privacy Policy, please do not access the Site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
              2. Information We Collect
            </h2>

            <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">
              2.1 Information You Provide
            </h3>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
              When you participate in our community forum (powered by Giscus/GitHub Discussions), you may provide:
            </p>
            <ul className="list-disc pl-6 mb-4 text-slate-700 dark:text-slate-300 space-y-2">
              <li>GitHub account information (username, email address, profile picture)</li>
              <li>Comments and discussion posts</li>
              <li>Any other information you choose to share in your posts</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">
              2.2 Automatically Collected Information
            </h3>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
              When you visit our Site, we may automatically collect certain information about your device, including:
            </p>
            <ul className="list-disc pl-6 mb-4 text-slate-700 dark:text-slate-300 space-y-2">
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>IP address</li>
              <li>Pages visited and time spent on pages</li>
              <li>Referring website addresses</li>
              <li>Device identifiers</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">
              2.3 Cookies and Tracking Technologies
            </h3>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
              We use cookies and similar tracking technologies to track activity on our Site and hold certain information. Cookies are files with small amounts of data that may include an anonymous unique identifier.
            </p>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
              Types of cookies we use:
            </p>
            <ul className="list-disc pl-6 mb-4 text-slate-700 dark:text-slate-300 space-y-2">
              <li><strong>Essential Cookies:</strong> Required for the operation of our Site</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our Site (Google Analytics)</li>
              <li><strong>Preference Cookies:</strong> Remember your settings and preferences (e.g., dark mode)</li>
              <li><strong>Advertising Cookies:</strong> Used to deliver relevant advertisements (Google AdSense)</li>
            </ul>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
              3. How We Use Your Information
            </h2>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
              We use the collected information for various purposes:
            </p>
            <ul className="list-disc pl-6 mb-4 text-slate-700 dark:text-slate-300 space-y-2">
              <li>To provide and maintain our Site</li>
              <li>To enable community features (comments, discussions, forums)</li>
              <li>To notify you about changes to our Site</li>
              <li>To provide customer support</li>
              <li>To gather analysis or valuable information to improve our Site</li>
              <li>To monitor the usage of our Site</li>
              <li>To detect, prevent, and address technical issues</li>
              <li>To provide you with relevant advertisements and content</li>
              <li>To analyze trends and user behavior</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
              4. Third-Party Services
            </h2>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
              We use third-party services that may collect information used to identify you. These services include:
            </p>

            <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">
              4.1 Google Analytics
            </h3>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
              We use Google Analytics to analyze the use of our Site. Google Analytics gathers information about website use by means of cookies. The information gathered is used to create reports about the use of our Site. Google's privacy policy is available at:{' '}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary-600 dark:text-primary-400 hover:underline">
                https://policies.google.com/privacy
              </a>
            </p>

            <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">
              4.2 Google AdSense
            </h3>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
              We use Google AdSense to display advertisements on our Site. Google AdSense uses cookies to serve ads based on your prior visits to our Site or other websites. You may opt out of personalized advertising by visiting{' '}
              <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-primary-600 dark:text-primary-400 hover:underline">
                Google Ads Settings
              </a>.
            </p>

            <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">
              4.3 Giscus (GitHub Discussions)
            </h3>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
              Our community forum is powered by Giscus, which uses GitHub Discussions. When you comment or participate in discussions, your information is subject to GitHub's privacy policy. GitHub's privacy policy is available at:{' '}
              <a href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement" target="_blank" rel="noopener noreferrer" className="text-primary-600 dark:text-primary-400 hover:underline">
                https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement
              </a>
            </p>

            <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">
              4.4 Vercel (Hosting)
            </h3>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
              Our Site is hosted on Vercel. Vercel may collect certain technical information about your visit. Vercel's privacy policy is available at:{' '}
              <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-primary-600 dark:text-primary-400 hover:underline">
                https://vercel.com/legal/privacy-policy
              </a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
              5. Data Sharing and Disclosure
            </h2>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
              We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
            </p>
            <ul className="list-disc pl-6 mb-4 text-slate-700 dark:text-slate-300 space-y-2">
              <li><strong>With Service Providers:</strong> We may share your information with third-party service providers who perform services on our behalf (e.g., analytics, advertising)</li>
              <li><strong>For Legal Reasons:</strong> We may disclose your information if required to do so by law or in response to valid requests by public authorities</li>
              <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred</li>
              <li><strong>With Your Consent:</strong> We may share your information for any other purpose with your consent</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
              6. Data Security
            </h2>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
              The security of your data is important to us. We use commercially acceptable means to protect your personal information, including:
            </p>
            <ul className="list-disc pl-6 mb-4 text-slate-700 dark:text-slate-300 space-y-2">
              <li>HTTPS encryption for all data transmission</li>
              <li>Secure hosting infrastructure (Vercel)</li>
              <li>Regular security updates and monitoring</li>
              <li>Limited access to personal information</li>
            </ul>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              However, no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
              7. Your Data Rights
            </h2>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
              Depending on your location, you may have the following rights regarding your personal information:
            </p>
            <ul className="list-disc pl-6 mb-4 text-slate-700 dark:text-slate-300 space-y-2">
              <li><strong>Access:</strong> You can request access to your personal information</li>
              <li><strong>Correction:</strong> You can request correction of inaccurate personal information</li>
              <li><strong>Deletion:</strong> You can request deletion of your personal information</li>
              <li><strong>Objection:</strong> You can object to processing of your personal information</li>
              <li><strong>Restriction:</strong> You can request restriction of processing of your personal information</li>
              <li><strong>Data Portability:</strong> You can request transfer of your personal information</li>
              <li><strong>Withdraw Consent:</strong> You can withdraw consent at any time where we relied on your consent</li>
            </ul>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              To exercise these rights, please contact us using the contact information provided below.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
              8. Children's Privacy
            </h2>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
              Our Site is not intended for children under the age of 13. We do not knowingly collect personally identifiable information from children under 13. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us. If we become aware that we have collected personal information from children without verification of parental consent, we take steps to remove that information from our servers.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
              9. International Data Transfers
            </h2>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
              Your information, including personal data, may be transferred to and maintained on computers located outside of your state, province, country, or other governmental jurisdiction where the data protection laws may differ from those of your jurisdiction.
            </p>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              If you are located outside the United States and choose to provide information to us, please note that we transfer the data, including personal data, to the United States and process it there. Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
              10. Links to Other Sites
            </h2>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
              Our Site may contain links to other sites that are not operated by us. If you click on a third-party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit.
            </p>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
              11. Changes to This Privacy Policy
            </h2>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top of this Privacy Policy.
            </p>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
              You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
              12. Contact Us
            </h2>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <ul className="list-none mb-4 text-slate-700 dark:text-slate-300 space-y-2">
              <li><strong>Website:</strong> <a href="https://digimontimestranger.com" className="text-primary-600 dark:text-primary-400 hover:underline">https://digimontimestranger.com</a></li>
              <li><strong>GitHub:</strong> <a href="https://github.com/duan0004/digimontimestranger.com/discussions" target="_blank" rel="noopener noreferrer" className="text-primary-600 dark:text-primary-400 hover:underline">Community Discussions</a></li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
              13. GDPR Compliance (For EU Users)
            </h2>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
              If you are a resident of the European Economic Area (EEA), you have certain data protection rights covered by GDPR. We aim to take reasonable steps to allow you to correct, amend, delete, or limit the use of your personal information.
            </p>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
              <strong>Legal basis for processing:</strong>
            </p>
            <ul className="list-disc pl-6 mb-4 text-slate-700 dark:text-slate-300 space-y-2">
              <li><strong>Consent:</strong> You have given consent for processing your data for specific purposes</li>
              <li><strong>Legitimate Interests:</strong> Processing is necessary for our legitimate interests (analytics, security)</li>
              <li><strong>Legal Obligation:</strong> Processing is necessary to comply with the law</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
              14. California Privacy Rights (CCPA)
            </h2>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
              If you are a California resident, you have specific rights regarding your personal information under the California Consumer Privacy Act (CCPA):
            </p>
            <ul className="list-disc pl-6 mb-4 text-slate-700 dark:text-slate-300 space-y-2">
              <li>Right to know what personal information is being collected</li>
              <li>Right to know whether your personal information is sold or disclosed and to whom</li>
              <li>Right to say no to the sale of personal information</li>
              <li>Right to access your personal information</li>
              <li>Right to equal service and price, even if you exercise your privacy rights</li>
            </ul>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              We do not sell your personal information.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
