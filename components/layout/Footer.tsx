import Link from 'next/link';

const footerLinks = {
  guides: [
    { name: 'Best Starters', href: '/guides/best-starters' },
    { name: 'Evolution Guide', href: '/guides/evolution-guide' },
    { name: 'Team Building', href: '/guides/team-building' },
    { name: 'Fast Leveling', href: '/guides/fast-leveling' },
  ],
  tools: [
    { name: 'Team Builder', href: '/tools/team-builder' },
    { name: 'Evolution Tree', href: '/evolution' },
    { name: 'Digidex', href: '/digidex' },
  ],
  resources: [
    { name: 'Community Forum', href: '/community' },
    { name: 'PC Settings', href: '/pc/steam-deck' },
    { name: 'Updates & Patches', href: '/updates' },
    { name: 'About', href: '/about' },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 no-print">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-primary-600 to-primary-800">
                <span className="text-white font-bold text-xl">DTS</span>
              </div>
              <div>
                <div className="text-sm font-bold gradient-text">
                  Digimon Time Stranger
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  Strategy Guide
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Complete guides, evolution paths, and team building tools for Digimon Story: Time Stranger.
            </p>
          </div>

          {/* Guides */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-3">
              Guides
            </h3>
            <ul className="space-y-2">
              {footerLinks.guides.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-3">
              Tools
            </h3>
            <ul className="space-y-2">
              {footerLinks.tools.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-3">
              Resources
            </h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="text-sm text-gray-600 dark:text-gray-400">
              <p className="mb-1">
                © {currentYear} Digimon Time Stranger Guide. All rights reserved.
              </p>
              <p className="text-xs">
                <strong>Disclaimer:</strong> This is an unofficial fan site. Digimon and all related
                properties are trademarks of Bandai Namco Entertainment. We are not affiliated with or
                endorsed by Bandai Namco.
              </p>
            </div>
            <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
              <span>Built with ❤️ for Tamers</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
