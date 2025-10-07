import { Metadata } from 'next';
import { generateMetadata, generateFAQSchema } from '@/lib/seo';
import Link from 'next/link';
import { ArrowRight, Star, Zap, Shield, Award } from 'lucide-react';

export const metadata: Metadata = generateMetadata({
  title: 'Best Starter Digimon Guide - Top Picks for Early Game Success',
  description:
    'Discover the best starter Digimon in Time Stranger for 2025. Complete analysis of early-game choices, evolution paths, stats, and team synergy. Updated for the latest patch.',
  keywords: [
    'best starter Digimon',
    'starter guide',
    'beginner tips',
    'early game',
    'Digimon choices',
    'starter evolution',
  ],
  url: '/guides/best-starters',
});

const faqs = [
  {
    question: 'What is the best starter Digimon in Time Stranger?',
    answer: 'Agumon is widely considered the best overall starter due to excellent stats, strong Fire-type offense, and straightforward evolution path to powerful forms like WarGreymon.',
  },
  {
    question: 'Can I get all starters in one playthrough?',
    answer: 'Yes! While you choose one starter at the beginning, you can recruit all other starter Digimon later through scanning and evolution.',
  },
  {
    question: 'Does my starter choice affect the story?',
    answer: 'Your starter choice has minor dialogue variations but does not significantly impact the main story. Choose based on playstyle preference.',
  },
  {
    question: 'When should I evolve my starter?',
    answer: 'Most starters should evolve to Champion around level 15-18. Wait until they learn their signature Rookie-level skills before evolving.',
  },
];

export default function BestStartersGuidePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFAQSchema(faqs)),
        }}
      />

      <article className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 text-blue-200 mb-4">
              <Link href="/guides" className="hover:text-white transition-colors">
                Guides
              </Link>
              <ArrowRight className="w-4 h-4" />
              <span>Best Starters</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Best Starter Digimon Guide for Time Stranger
            </h1>
            <p className="text-xl text-blue-100">
              Complete analysis of starter Digimon, evolution paths, and early-game strategies
            </p>
            <div className="flex items-center gap-4 mt-6 text-sm text-blue-200">
              <span>📅 Updated: January 2025</span>
              <span>⏱️ 8 min read</span>
              <span>✍️ By DTS Team</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            {/* Introduction */}
            <section className="mb-12">
              <p className="text-xl leading-relaxed text-gray-700 dark:text-gray-300">
                Choosing your first Digimon partner in <strong>Digimon Story: Time Stranger</strong> is one of the most important decisions you'll make in your journey. While you'll eventually have access to hundreds of Digimon, your starter will carry you through the critical early game hours and set the foundation for your team composition.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                In this comprehensive guide, we'll analyze all available starter options, their evolution paths, stat distributions, and ideal team synergies. Whether you're a returning Digimon veteran or brand new to the series, this guide will help you make an informed choice that matches your playstyle.
              </p>
            </section>

            {/* Quick Summary */}
            <div className="card p-6 mb-12 bg-gradient-to-br from-blue-50 to-primary-50 dark:from-blue-900/20 dark:to-primary-900/20 border-2 border-primary-200 dark:border-primary-800">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Award className="w-6 h-6 text-primary-600" />
                TL;DR - Quick Recommendations
              </h2>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <Star className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
                  <span><strong>Best Overall:</strong> Agumon - Excellent balanced stats, strong evolution path, beginner-friendly</span>
                </li>
                <li className="flex items-start gap-2">
                  <Zap className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                  <span><strong>Best for Speed:</strong> Veemon - High speed stat, versatile evolutions, great for outpacing enemies</span>
                </li>
                <li className="flex items-start gap-2">
                  <Shield className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span><strong>Best for Defense:</strong> Guilmon - Tank build, excellent HP and DEF scaling</span>
                </li>
              </ul>
            </div>

            {/* Understanding Starter Mechanics */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Understanding Starter Mechanics
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Before diving into specific recommendations, it's crucial to understand how starter Digimon work in Time Stranger:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li><strong>Permanent Stat Bonus:</strong> Your starter receives a permanent +5% bonus to all base stats, making it slightly stronger than the same Digimon obtained later.</li>
                <li><strong>Faster ABI Growth:</strong> Starters gain ABI (Ability) points 20% faster, reaching evolution requirements sooner.</li>
                <li><strong>Special Bond Move:</strong> After reaching Champion stage, your starter unlocks a unique signature move not available to other Digimon of the same species.</li>
                <li><strong>Memory Efficiency:</strong> Your starter costs -2 Memory in team composition, allowing for more flexible team building.</li>
              </ul>
            </section>

            {/* Top Starter Digimon */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Top Starter Digimon Ranked
              </h2>

              {/* Rank 1: Agumon */}
              <div className="card p-6 mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-yellow-500 text-white rounded-full font-bold text-xl">
                    1
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      Agumon - The Perfect All-Rounder
                    </h3>
                    <div className="flex gap-2 mt-1">
                      <span className="text-xs px-2 py-1 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 rounded">Fire</span>
                      <span className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded">Vaccine</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Agumon is the quintessential starter choice and has been a franchise favorite since the original Digimon World. In Time Stranger, Agumon excels in all areas without significant weaknesses.
                </p>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2">Strengths:</h4>
                    <ul className="list-disc pl-6 space-y-1 text-sm text-gray-700 dark:text-gray-300">
                      <li>Balanced stat distribution perfect for beginners</li>
                      <li>Strong offensive capabilities with Fire-type moves</li>
                      <li>Clear evolution path to WarGreymon (top-tier Mega)</li>
                      <li>Learns Pepper Breath early for strong early damage</li>
                      <li>Excellent synergy with most team compositions</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2">Weaknesses:</h4>
                    <ul className="list-disc pl-6 space-y-1 text-sm text-gray-700 dark:text-gray-300">
                      <li>No significant weaknesses</li>
                      <li>Slightly slower than Veemon</li>
                      <li>Fire typing weak to Water (common early-game)</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">Evolution Path:</h4>
                  <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 overflow-x-auto">
                    <span className="font-semibold whitespace-nowrap">Koromon</span>
                    <ArrowRight className="w-4 h-4" />
                    <span className="font-semibold whitespace-nowrap">Agumon</span>
                    <ArrowRight className="w-4 h-4" />
                    <span className="font-semibold whitespace-nowrap">Greymon</span>
                    <ArrowRight className="w-4 h-4" />
                    <span className="font-semibold whitespace-nowrap">MetalGreymon</span>
                    <ArrowRight className="w-4 h-4" />
                    <span className="font-semibold whitespace-nowrap">WarGreymon</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    <strong>Evolution Tip:</strong> Wait until Level 16 to evolve to Greymon after learning Claw Swipe.
                  </p>
                </div>
              </div>

              {/* Rank 2: Veemon */}
              <div className="card p-6 mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-gray-400 text-white rounded-full font-bold text-xl">
                    2
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      Veemon - The Speed Demon
                    </h3>
                    <div className="flex gap-2 mt-1">
                      <span className="text-xs px-2 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300 rounded">Light</span>
                      <span className="text-xs px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded">Free</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Veemon is the ideal choice for players who value speed and versatility. With the highest Speed stat among starters and multiple evolution branches, Veemon offers exceptional tactical flexibility.
                </p>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2">Strengths:</h4>
                    <ul className="list-disc pl-6 space-y-1 text-sm text-gray-700 dark:text-gray-300">
                      <li>Highest Speed stat (60 base) among all starters</li>
                      <li>Multiple evolution paths (ExVeemon, Veedramon, Flamedramon)</li>
                      <li>Excellent for competitive play and speedrun strategies</li>
                      <li>Free attribute makes it neutral to most matchups</li>
                      <li>Can pivot team composition based on evolution choice</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2">Weaknesses:</h4>
                    <ul className="list-disc pl-6 space-y-1 text-sm text-gray-700 dark:text-gray-300">
                      <li>Lower HP and DEF compared to other starters</li>
                      <li>Requires more strategic positioning</li>
                      <li>Some evolution paths are harder to unlock</li>
                      <li>Glass cannon playstyle not beginner-friendly</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">Recommended Evolution Path:</h4>
                  <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 overflow-x-auto">
                    <span className="font-semibold whitespace-nowrap">DemiVeemon</span>
                    <ArrowRight className="w-4 h-4" />
                    <span className="font-semibold whitespace-nowrap">Veemon</span>
                    <ArrowRight className="w-4 h-4" />
                    <span className="font-semibold whitespace-nowrap">ExVeemon</span>
                    <ArrowRight className="w-4 h-4" />
                    <span className="font-semibold whitespace-nowrap">Paildramon</span>
                    <ArrowRight className="w-4 h-4" />
                    <span className="font-semibold whitespace-nowrap">Imperialdramon</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    <strong>Evolution Tip:</strong> Paildramon requires ExVeemon + Stingmon DNA Digivolution. Plan ahead.
                  </p>
                </div>
              </div>

              {/* Rank 3: Guilmon */}
              <div className="card p-6 mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-orange-600 text-white rounded-full font-bold text-xl">
                    3
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      Guilmon - The Tank
                    </h3>
                    <div className="flex gap-2 mt-1">
                      <span className="text-xs px-2 py-1 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 rounded">Fire</span>
                      <span className="text-xs px-2 py-1 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 rounded">Virus</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Guilmon is the tank specialist among starters. With exceptional HP and DEF scaling, Guilmon can take hits that would KO other Digimon, making it perfect for defensive playstyles.
                </p>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2">Strengths:</h4>
                    <ul className="list-disc pl-6 space-y-1 text-sm text-gray-700 dark:text-gray-300">
                      <li>Highest HP (62 base) and DEF (50 base) among starters</li>
                      <li>Can survive boss attacks in early-mid game</li>
                      <li>Evolution to Gallantmon is extremely powerful</li>
                      <li>Virus attribute effective against Vaccine bosses</li>
                      <li>Learns Rock Breaker for AOE damage</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2">Weaknesses:</h4>
                    <ul className="list-disc pl-6 space-y-1 text-sm text-gray-700 dark:text-gray-300">
                      <li>Slowest Speed stat (48 base)</li>
                      <li>Often moves last in battle</li>
                      <li>Lower SP.ATK makes special moves less effective</li>
                      <li>Gallantmon evolution path requires late-game items</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">Evolution Path:</h4>
                  <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 overflow-x-auto">
                    <span className="font-semibold whitespace-nowrap">Gigimon</span>
                    <ArrowRight className="w-4 h-4" />
                    <span className="font-semibold whitespace-nowrap">Guilmon</span>
                    <ArrowRight className="w-4 h-4" />
                    <span className="font-semibold whitespace-nowrap">Growlmon</span>
                    <ArrowRight className="w-4 h-4" />
                    <span className="font-semibold whitespace-nowrap">WarGrowlmon</span>
                    <ArrowRight className="w-4 h-4" />
                    <span className="font-semibold whitespace-nowrap">Gallantmon</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    <strong>Evolution Tip:</strong> Save "Crimson Mode" evolution for post-game content.
                  </p>
                </div>
              </div>
            </section>

            {/* Team Building Tips */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Early Game Team Building Tips
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Your starter is just the foundation. Here's how to build a balanced early-game team around each starter:
              </p>

              <div className="space-y-4">
                <div className="card p-4">
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">For Agumon Starters:</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Add a Water-type like Gomamon or Palmon (Plant) to cover Fire's weakness. Include a support Digimon like Patamon for healing.
                  </p>
                </div>

                <div className="card p-4">
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">For Veemon Starters:</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Since Veemon lacks bulk, add defensive Digimon like Armadillomon or Kotemon. Use Veemon's speed to strike first and eliminate threats.
                  </p>
                </div>

                <div className="card p-4">
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">For Guilmon Starters:</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Complement Guilmon's slow speed with fast attackers like Terriermon or Renamon. Let Guilmon tank hits while others deal damage.
                  </p>
                </div>
              </div>
            </section>

            {/* Common Mistakes */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Common Starter Mistakes to Avoid
              </h2>
              <div className="space-y-4">
                <div className="border-l-4 border-red-500 pl-4 py-2 bg-red-50 dark:bg-red-900/20">
                  <h4 className="font-bold text-red-900 dark:text-red-300 mb-1">❌ Evolving Too Early</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Wait until your starter learns its signature Rookie-level move before evolving. For Agumon, that's Claw Swipe at Level 16.
                  </p>
                </div>

                <div className="border-l-4 border-red-500 pl-4 py-2 bg-red-50 dark:bg-red-900/20">
                  <h4 className="font-bold text-red-900 dark:text-red-300 mb-1">❌ Ignoring ABI Training</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    ABI (Ability) points are crucial for reaching Mega evolutions. Use the DigiFarm to train ABI even when not actively using your starter.
                  </p>
                </div>

                <div className="border-l-4 border-red-500 pl-4 py-2 bg-red-50 dark:bg-red-900/20">
                  <h4 className="font-bold text-red-900 dark:text-red-300 mb-1">❌ Over-Relying on Your Starter</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    While starters are strong, don't neglect building a diverse team. Some bosses will hard counter your starter's typing.
                  </p>
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="card p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Conclusion */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Final Verdict
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                While all starters are viable in Time Stranger, <strong>Agumon</strong> remains the safest and most beginner-friendly choice. Its balanced stats, straightforward evolution path, and powerful end-game form make it an excellent companion from start to finish.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                However, if you value speed and tactical depth, <strong>Veemon</strong> offers incredible versatility. For players who prefer defensive playstyles, <strong>Guilmon's</strong> tankiness is unmatched.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Remember: your starter choice matters most for the first 10-15 hours of gameplay. By mid-game, you'll have access to dozens of powerful Digimon, so choose the starter that appeals to your personal playstyle and enjoy the journey!
              </p>
            </section>

            {/* Related Guides */}
            <div className="card p-6 bg-gradient-to-br from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                📚 Related Guides
              </h3>
              <div className="space-y-2">
                <Link href="/guides/fast-leveling" className="block text-primary-600 dark:text-primary-400 hover:underline">
                  → Fast Leveling Routes Guide
                </Link>
                <Link href="/guides/evolution-guide" className="block text-primary-600 dark:text-primary-400 hover:underline">
                  → Complete Evolution Guide
                </Link>
                <Link href="/tools/team-builder" className="block text-primary-600 dark:text-primary-400 hover:underline">
                  → Team Builder Tool
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
