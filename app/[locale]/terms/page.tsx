import { Metadata } from 'next';
import { generateMetadata as generateSEO } from '@/lib/seo';
import { getTranslations } from 'next-intl/server';

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'terms' });

  return generateSEO({
    title: t('title'),
    description: t('description'),
    url: `/${locale}/terms`,
  });
}

export default async function TermsPage({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'terms' });

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
          {t('title')}
        </h1>
        <p className="text-slate-600 dark:text-slate-400 mb-8">
          Last Updated: October 9, 2025
        </p>

        <div className="prose prose-slate dark:prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
              1. Agreement to Terms
            </h2>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
              These Terms of Service ("Terms") govern your access to and use of Digimon Time Stranger website at{' '}
              <a href="https://digimontimestranger.com" className="text-primary-600 dark:text-primary-400 hover:underline">
                digimontimestranger.com
              </a>{' '}
              (the "Site"), operated by Digimon Time Stranger ("we," "us," or "our").
            </p>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
              By accessing or using the Site, you agree to be bound by these Terms. If you disagree with any part of these Terms, you may not access the Site.
            </p>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              We reserve the right to update, change, or replace any part of these Terms by posting updates and/or changes to our Site. It is your responsibility to check this page periodically for changes. Your continued use of or access to the Site following the posting of any changes constitutes acceptance of those changes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
              2. Description of Service
            </h2>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
              Digimon Time Stranger provides:
            </p>
            <ul className="list-disc pl-6 mb-4 text-slate-700 dark:text-slate-300 space-y-2">
              <li>Information and guides about the Digimon Time Stranger game</li>
              <li>Database of Digimon, items, skills, and evolution paths</li>
              <li>Community forum and discussion platform (powered by GitHub Discussions)</li>
              <li>Game walkthroughs, strategies, and tips</li>
              <li>News and updates about the game</li>
            </ul>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              The Site is a fan-made, unofficial resource and is not affiliated with, endorsed by, or connected to Bandai Namco Entertainment Inc. or any other official entity related to the Digimon franchise.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
              3. User Accounts and Community Participation
            </h2>

            <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">
              3.1 GitHub Account Requirement
            </h3>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
              To participate in our community forum, you must have a GitHub account. By using GitHub to authenticate and post comments, you agree to comply with GitHub's Terms of Service and Community Guidelines.
            </p>

            <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">
              3.2 Account Responsibilities
            </h3>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
              You are responsible for:
            </p>
            <ul className="list-disc pl-6 mb-4 text-slate-700 dark:text-slate-300 space-y-2">
              <li>Maintaining the security of your GitHub account</li>
              <li>All activities that occur under your account</li>
              <li>Ensuring your account information is accurate and up to date</li>
              <li>Notifying us immediately of any unauthorized use of your account</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
              4. Acceptable Use Policy
            </h2>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
              You agree not to use the Site for any unlawful purpose or in any way that could damage, disable, overburden, or impair the Site. Prohibited activities include, but are not limited to:
            </p>

            <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">
              4.1 Content Restrictions
            </h3>
            <ul className="list-disc pl-6 mb-4 text-slate-700 dark:text-slate-300 space-y-2">
              <li>Posting content that is illegal, harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, or otherwise objectionable</li>
              <li>Posting content that infringes any patent, trademark, trade secret, copyright, or other proprietary rights</li>
              <li>Posting spam, unsolicited advertising, or promotional materials</li>
              <li>Posting malicious code, viruses, or any other harmful computer code</li>
              <li>Impersonating any person or entity, or falsely stating or misrepresenting your affiliation with a person or entity</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">
              4.2 Behavioral Restrictions
            </h3>
            <ul className="list-disc pl-6 mb-4 text-slate-700 dark:text-slate-300 space-y-2">
              <li>Harassing, bullying, or intimidating other users</li>
              <li>Engaging in hate speech or discrimination based on race, ethnicity, religion, gender, sexual orientation, disability, or any other protected characteristic</li>
              <li>Sharing personal information of others without their consent</li>
              <li>Engaging in any form of cheating, hacking, or exploiting game mechanics (when discussing gameplay)</li>
              <li>Attempting to gain unauthorized access to any portion of the Site or any systems or networks connected to the Site</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">
              4.3 Technical Restrictions
            </h3>
            <ul className="list-disc pl-6 mb-4 text-slate-700 dark:text-slate-300 space-y-2">
              <li>Using any robot, spider, scraper, or other automated means to access the Site</li>
              <li>Interfering with or disrupting the Site or servers or networks connected to the Site</li>
              <li>Attempting to probe, scan, or test the vulnerability of any system or network</li>
              <li>Bypassing any measures we may use to prevent or restrict access to the Site</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
              5. User-Generated Content
            </h2>

            <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">
              5.1 Your Content
            </h3>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
              Our Site allows you to post, submit, or transmit content, including comments, discussions, and other materials ("User Content"). You retain all ownership rights to your User Content.
            </p>

            <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">
              5.2 License to Use Your Content
            </h3>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
              By posting User Content to the Site, you grant us a worldwide, non-exclusive, royalty-free, perpetual, irrevocable license to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, and display such content in connection with operating and providing the Site.
            </p>

            <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">
              5.3 Content Responsibility
            </h3>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
              You are solely responsible for your User Content. You represent and warrant that:
            </p>
            <ul className="list-disc pl-6 mb-4 text-slate-700 dark:text-slate-300 space-y-2">
              <li>You own or have the necessary rights to post your User Content</li>
              <li>Your User Content does not violate any third-party rights</li>
              <li>Your User Content complies with these Terms and all applicable laws</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">
              5.4 Content Moderation
            </h3>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
              We reserve the right, but have no obligation, to:
            </p>
            <ul className="list-disc pl-6 mb-4 text-slate-700 dark:text-slate-300 space-y-2">
              <li>Monitor, review, or edit User Content</li>
              <li>Remove or refuse to post any User Content for any reason</li>
              <li>Terminate or suspend your access to the community features for violations of these Terms</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
              6. Intellectual Property Rights
            </h2>

            <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">
              6.1 Our Intellectual Property
            </h3>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
              The Site and its original content (excluding User Content and third-party content), features, and functionality are owned by Digimon Time Stranger and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
            </p>

            <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">
              6.2 Digimon Franchise Rights
            </h3>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
              Digimon, Digimon Time Stranger, and all related characters, names, and distinctive likenesses are the property of Bandai Namco Entertainment Inc. This Site is a fan-made resource and is not officially affiliated with or endorsed by Bandai Namco Entertainment Inc.
            </p>

            <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">
              6.3 Fair Use
            </h3>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
              We use game-related content, including images, character names, and game mechanics information, under the doctrine of fair use for the purposes of commentary, criticism, education, and information. All such content is used with respect to the original copyright holders.
            </p>

            <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">
              6.4 DMCA Compliance
            </h3>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
              We respect the intellectual property rights of others. If you believe that any content on the Site infringes your copyright, please contact us with:
            </p>
            <ul className="list-disc pl-6 mb-4 text-slate-700 dark:text-slate-300 space-y-2">
              <li>A description of the copyrighted work that you claim has been infringed</li>
              <li>A description of where the material that you claim is infringing is located on the Site</li>
              <li>Your contact information</li>
              <li>A statement that you have a good faith belief that the disputed use is not authorized by the copyright owner</li>
              <li>A statement, made under penalty of perjury, that the information in your notice is accurate and that you are the copyright owner or authorized to act on the copyright owner's behalf</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
              7. Third-Party Links and Services
            </h2>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
              Our Site may contain links to third-party websites or services that are not owned or controlled by Digimon Time Stranger. These include:
            </p>
            <ul className="list-disc pl-6 mb-4 text-slate-700 dark:text-slate-300 space-y-2">
              <li>GitHub (for community discussions)</li>
              <li>Social media platforms</li>
              <li>Gaming platforms and stores</li>
              <li>Partner and affiliate websites</li>
            </ul>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
              We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services. You acknowledge and agree that we shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods, or services available on or through any such websites or services.
            </p>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              We strongly advise you to read the terms and conditions and privacy policies of any third-party websites or services that you visit.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
              8. Disclaimers and Limitations of Liability
            </h2>

            <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">
              8.1 "As Is" and "As Available" Basis
            </h3>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
              The Site is provided on an "AS IS" and "AS AVAILABLE" basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>

            <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">
              8.2 No Guarantee of Accuracy
            </h3>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
              While we strive to provide accurate and up-to-date information about Digimon Time Stranger, we make no guarantees about:
            </p>
            <ul className="list-disc pl-6 mb-4 text-slate-700 dark:text-slate-300 space-y-2">
              <li>The accuracy, completeness, or reliability of any content on the Site</li>
              <li>That the Site will be uninterrupted, timely, secure, or error-free</li>
              <li>The results that may be obtained from the use of the Site</li>
              <li>The quality of any products, services, information, or other material obtained through the Site</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">
              8.3 Game Updates and Changes
            </h3>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
              Game mechanics, stats, and other information may change due to game updates, patches, or balancing changes made by the game developers. We are not responsible for keeping all content immediately updated to reflect these changes, though we make reasonable efforts to do so.
            </p>

            <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">
              8.4 Limitation of Liability
            </h3>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
              In no event shall Digimon Time Stranger, its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
            </p>
            <ul className="list-disc pl-6 mb-4 text-slate-700 dark:text-slate-300 space-y-2">
              <li>Your access to or use of or inability to access or use the Site</li>
              <li>Any conduct or content of any third party on the Site</li>
              <li>Any content obtained from the Site</li>
              <li>Unauthorized access, use, or alteration of your transmissions or content</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
              9. Indemnification
            </h2>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
              You agree to defend, indemnify, and hold harmless Digimon Time Stranger and its licensee and licensors, and their employees, contractors, agents, officers, and directors, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney's fees), resulting from or arising out of:
            </p>
            <ul className="list-disc pl-6 mb-4 text-slate-700 dark:text-slate-300 space-y-2">
              <li>Your use of and access to the Site</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any third-party right, including without limitation any copyright, property, or privacy right</li>
              <li>Any claim that your User Content caused damage to a third party</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
              10. Termination
            </h2>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
              We may terminate or suspend your access to the Site immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms.
            </p>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
              Upon termination, your right to use the Site will immediately cease. If you wish to terminate your access to the Site, you may simply discontinue using the Site.
            </p>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              All provisions of these Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
              11. Governing Law and Dispute Resolution
            </h2>

            <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">
              11.1 Governing Law
            </h3>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
              These Terms shall be governed and construed in accordance with the laws of the jurisdiction in which the Site operator is based, without regard to its conflict of law provisions.
            </p>

            <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">
              11.2 Dispute Resolution
            </h3>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
              Any dispute arising from or relating to the subject matter of these Terms shall be finally settled by arbitration in accordance with the applicable arbitration rules, using the English language.
            </p>

            <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">
              11.3 Exceptions
            </h3>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
              Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
              12. Advertising and Monetization
            </h2>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
              The Site may display advertisements from third-party advertising networks, including Google AdSense. These advertisements may be targeted based on the content of the Site or information about you.
            </p>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
              By using the Site, you acknowledge and agree that:
            </p>
            <ul className="list-disc pl-6 mb-4 text-slate-700 dark:text-slate-300 space-y-2">
              <li>Advertisements may be displayed on the Site</li>
              <li>We may earn revenue from advertisements and affiliate links</li>
              <li>You are responsible for any transactions with advertisers</li>
              <li>We are not responsible for the content or practices of advertisers</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
              13. Changes to the Site
            </h2>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
              We reserve the right to:
            </p>
            <ul className="list-disc pl-6 mb-4 text-slate-700 dark:text-slate-300 space-y-2">
              <li>Modify or discontinue, temporarily or permanently, the Site (or any part thereof) with or without notice</li>
              <li>Change the features, functionality, or content of the Site at any time</li>
              <li>Impose limits on certain features or restrict access to parts or all of the Site</li>
            </ul>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              You agree that we shall not be liable to you or to any third party for any modification, suspension, or discontinuance of the Site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
              14. Entire Agreement
            </h2>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
              These Terms, together with our Privacy Policy, constitute the entire agreement between you and Digimon Time Stranger regarding the use of the Site, superseding any prior agreements between you and Digimon Time Stranger relating to your use of the Site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
              15. Contact Information
            </h2>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
              If you have any questions about these Terms, please contact us:
            </p>
            <ul className="list-none mb-4 text-slate-700 dark:text-slate-300 space-y-2">
              <li><strong>Website:</strong> <a href="https://digimontimestranger.com" className="text-primary-600 dark:text-primary-400 hover:underline">https://digimontimestranger.com</a></li>
              <li><strong>GitHub:</strong> <a href="https://github.com/duan0004/digimontimestranger.com/discussions" target="_blank" rel="noopener noreferrer" className="text-primary-600 dark:text-primary-400 hover:underline">Community Discussions</a></li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
              16. Acknowledgment
            </h2>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
              BY USING THE SITE, YOU ACKNOWLEDGE THAT YOU HAVE READ THESE TERMS OF SERVICE AND AGREE TO BE BOUND BY THEM.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
