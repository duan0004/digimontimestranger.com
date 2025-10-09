'use client';

import { useState } from 'react';
import { Metadata } from 'next';
import { ChevronDown, Search, HelpCircle, Zap, Users, Trophy, Settings, Book } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const categories = [
  { id: 'all', name: 'All Questions', icon: HelpCircle },
  { id: 'getting-started', name: 'Getting Started', icon: Book },
  { id: 'gameplay', name: 'Gameplay', icon: Zap },
  { id: 'evolution', name: 'Evolution', icon: Users },
  { id: 'endgame', name: 'Endgame', icon: Trophy },
  { id: 'technical', name: 'Technical', icon: Settings },
];

const faqs: FAQItem[] = [
  // Getting Started
  {
    question: 'Which starter Digimon should I choose?',
    answer: 'All three starters are viable! Agumon is the most balanced and beginner-friendly with strong offensive evolutions. Gabumon excels at defensive play and has crucial ice attacks for mid-game bosses. Terriermon focuses on speed and utility but is the hardest to master. For your first playthrough, Agumon or Gabumon are recommended.',
    category: 'getting-started',
  },
  {
    question: 'How does the friendship/trust system work?',
    answer: 'Friendship is a hidden stat (0-100) for each partner Digimon that affects endings and unlocks special scenes. Increase it by: winning battles together (+1), choosing compassionate dialogue (+5 to +30), completing side quests (+15 to +25), camping (+2), and feeding favorite foods (+3). Decrease by: letting partners faint (-5), selfish dialogue (-10 to -30), or accepting dark power (-20 to -50).',
    category: 'getting-started',
  },
  {
    question: 'What is the Memory system and how does it work?',
    answer: 'Memory is your team capacity limit. Each Digimon has a memory cost that increases with evolution stage. Your total memory increases as you level up and complete certain quests. Early game you\'ll have ~30 memory, mid-game ~60, and endgame ~100+. Plan your team carefully - you can\'t use more Digimon than your memory allows.',
    category: 'getting-started',
  },
  {
    question: 'How long does it take to beat the game?',
    answer: 'Main story: 35-45 hours for a standard playthrough. Completionist: 80-120 hours to get all Digimon, collectibles, and achievements. Speedrun: Sub-10 hours for experienced players. The game has significant replay value with New Game+ and multiple endings.',
    category: 'getting-started',
  },
  {
    question: 'Can I catch/recruit all 400+ Digimon in one playthrough?',
    answer: 'No, some Digimon are version-specific or require New Game+. However, you can recruit about 85% of all Digimon in a single playthrough if you\'re thorough. Certain Digimon only appear in post-game or require specific story choices.',
    category: 'getting-started',
  },

  // Gameplay
  {
    question: 'What\'s the difference between physical and special attacks?',
    answer: 'Physical attacks use the Attack stat and are affected by Defense. Special attacks use the Intelligence stat and are affected by Magic Defense. Some bosses (like Etemon) have very high Defense but low Magic Defense, making special attacks much more effective. Check enemy resistances to choose the right damage type.',
    category: 'gameplay',
  },
  {
    question: 'How do I increase my Digimon\'s stats?',
    answer: 'Stats increase through: 1) Leveling up (automatic), 2) Equipment (chips, accessories), 3) Personality type (affects growth rates), 4) Training in specific facilities, 5) Using stat-boosting items, and 6) Certain evolution paths. Personality is locked per Digimon but affects how stats grow each level.',
    category: 'gameplay',
  },
  {
    question: 'What are the best grinding locations for each chapter?',
    answer: 'Chapter 1-2: File Island Forest. Chapter 3: Server Desert Oasis. Chapter 4-5: Geko Swamp depths. Chapter 6-7: Machine City Factory floors. Chapter 8-9: Dark Area tunnels. Post-game: Infinity Tower (best EXP/hour). Use EXP boosting items and fight higher-level enemies for faster leveling.',
    category: 'gameplay',
  },
  {
    question: 'How does the turn order/speed system work?',
    answer: 'Turn order is determined by the Speed stat. Higher speed = earlier turns. Some abilities and equipment can grant "priority" to act first regardless of speed. Speed is also checked for dodge rate and critical hit rate. Investing in speed makes your Digimon more versatile.',
    category: 'gameplay',
  },
  {
    question: 'What do the different personality types do?',
    answer: 'Personality affects stat growth rates. For example: "Brave" gives +ATK/-INT, "Calm" gives +INT/-ATK, "Hardy" gives balanced growth, etc. You can\'t change a Digimon\'s personality after recruitment, so recruit multiple copies for different builds if needed.',
    category: 'gameplay',
  },
  {
    question: 'Can I re-spec or reset my Digimon\'s stats?',
    answer: 'No direct stat reset, but you can de-digivolve to a previous form and re-evolve to adjust the evolution path. Stats reset to that stage\'s base stats. This is useful for trying different evolution paths or fixing mistakes.',
    category: 'gameplay',
  },
  {
    question: 'How does type advantage work?',
    answer: 'Elements follow this pattern: Fire > Plant > Earth > Electric > Water > Fire. Vaccine > Virus > Data > Vaccine. Attacks deal 1.5x damage against weak elements and 0.5x against resistant elements. Always check enemy types and build teams with coverage.',
    category: 'gameplay',
  },
  {
    question: 'What\'s the best way to make money?',
    answer: 'Sell duplicate items and equipment you don\'t need. Fight Metal-type Digimon (MetalMamemon, Platinum Sukamon) which drop high-value items. Complete side quests for gold rewards. Post-game, repeatedly farm Infinity Tower floors 40-50.',
    category: 'gameplay',
  },

  // Evolution
  {
    question: 'How do I evolve my Digimon?',
    answer: 'Digimon evolve when they meet level, stat, and sometimes item requirements. Check the evolution tree (menu > Digimon > Evolution) to see requirements. Most evolutions require: minimum level, specific stat thresholds (e.g., 100 ATK), bond level, and sometimes special items or story progress.',
    category: 'evolution',
  },
  {
    question: 'Can I get WarGreymon/MetalGarurumon/MegaGargomon?',
    answer: 'Yes! These are the ultimate evolutions of the three starters. Requirements: Agumon → Greymon (Lv.11) → MetalGreymon (Lv.25, 150 ATK) → WarGreymon (Lv.45, 250 ATK, 80% bond). Similar requirements for Gabumon→MetalGarurumon and Terriermon→MegaGargomon.',
    category: 'evolution',
  },
  {
    question: 'What happens to learned skills when I evolve?',
    answer: 'Digimon keep all learned skills even after evolution, up to their skill slot limit (usually 8-10). New forms learn new skills as they level up. You can manually forget skills to make room. Some powerful inherited skills are only available by evolving specific paths.',
    category: 'evolution',
  },
  {
    question: 'Can I de-digivolve to get different evolution paths?',
    answer: 'Yes! Use a De-Digivolution item (purchasable at shops after Chapter 3) to revert one stage. Stats reset to that form\'s base stats. This is essential for getting alternate evolution paths and achieving 100% Digidex completion.',
    category: 'evolution',
  },
  {
    question: 'What are mega/ultimate evolutions and when can I get them?',
    answer: 'Mega (Ultimate) is the highest evolution stage, typically reached at level 40-50+. Most become available in Chapter 7-8 after story progression unlocks them. Requirements are strict: high level (45+), maxed stats (200+), high bond (70%+), and often special items.',
    category: 'evolution',
  },
  {
    question: 'Do different evolution paths affect final stats?',
    answer: 'Yes significantly! Evolution paths stack stat bonuses. For example, Agumon→Greymon→MetalGreymon→WarGreymon has different final stats than Agumon→Tyrannomon→MasterTyrannomon→Rust Tyrannomon. Plan your path based on desired final stats.',
    category: 'evolution',
  },

  // Endgame
  {
    question: 'What\'s in the post-game/New Game+?',
    answer: 'New Game+ includes: all Digimon/equipment carried over, Omega difficulty mode, 20+ new recruitable Digimon, hidden superbosses, Infinity Tower (100 floors), extended epilogue scenes, and achievement hunting. You keep Digidex completion and can pursue different endings.',
    category: 'endgame',
  },
  {
    question: 'How do I unlock the True Ending?',
    answer: 'Requirements: 1) Max friendship (100) with all 3 starter partners, 2) Collect all 9 Ancient Tablet Fragments, 3) Complete all partner side quests (Chapters 5, 6, 7), 4) Choose "Hope for the Future" dialogue in Chapter 9 final battle. See our Story Branches guide for full details.',
    category: 'endgame',
  },
  {
    question: 'What are the hidden superbosses?',
    answer: 'There are 5 hidden superbosses in post-game: Omega Diaboromon (Infinity Tower Floor 100), Ancient Alphamon (Ancient Cave), Crimson Mode Gallantmon (Trial of Fire), Daemon (Dark Area depths), and Lucemon Satan Mode (secret arena). Each drops exclusive mega-level Digimon.',
    category: 'endgame',
  },
  {
    question: 'How do I access Infinity Tower?',
    answer: 'Complete the main story and defeat Apocalymon. Return to the Digital World hub and talk to Gennai who will unlock the Infinity Tower. It\'s a 100-floor challenge with increasing difficulty. Floors 10, 25, 50, 75, and 100 have boss encounters.',
    category: 'endgame',
  },
  {
    question: 'Can I fight Apocalymon again after beating the game?',
    answer: 'Yes, in the Infinity Tower Rematch Arena (post-game). There\'s also a stronger "Omega Apocalymon" variant on Floor 90 with 2x stats and new attacks.',
    category: 'endgame',
  },
  {
    question: 'What carries over to New Game+?',
    answer: 'Carries over: All recruited Digimon, Digidex completion, equipment/items, money, achievement progress, gallery unlocks, and max memory capacity. Resets: Story progress, friendship levels, Ancient Tablet Fragments, key items.',
    category: 'endgame',
  },

  // Technical
  {
    question: 'Does the game run on Steam Deck?',
    answer: 'Yes, perfectly! The game is Steam Deck Verified. Recommended settings: Graphics Quality: High, 60 FPS cap, FSR enabled. Battery life is 4-5 hours at these settings. All controls work natively with the Steam Deck gamepad.',
    category: 'technical',
  },
  {
    question: 'How do I fix performance issues/lag?',
    answer: 'Try: Lower graphics quality to Medium, disable shadows, reduce resolution to 1080p, close background applications, update graphics drivers, and verify game files on Steam. The game is well-optimized and should run smoothly on most modern PCs.',
    category: 'technical',
  },
  {
    question: 'Is there co-op or multiplayer?',
    answer: 'No, Digimon Time Stranger is single-player only. However, there\'s an online PvP Battle Arena (unlocked post-game) where you can battle other players\' teams asynchronously.',
    category: 'technical',
  },
  {
    question: 'Can I use mods?',
    answer: 'The game supports modding through Steam Workshop. Popular mods include: increased EXP rates, quality-of-life improvements, custom Digimon skins, and rebalance patches. Achievements are disabled when mods are active.',
    category: 'technical',
  },
  {
    question: 'Does the game have controller support?',
    answer: 'Yes, full controller support for Xbox, PlayStation, and Nintendo Switch Pro controllers. Controls are fully remappable in settings. Keyboard + mouse is also fully supported.',
    category: 'technical',
  },
  {
    question: 'How do I backup my save file?',
    answer: 'Saves are located at: C:\\Users\\[YourName]\\AppData\\LocalLow\\BandaiNamco\\DigimonTimeStranger. Steam Cloud saves are enabled by default. For manual backup, copy the entire save folder to a safe location.',
    category: 'technical',
  },
  {
    question: 'Can I play offline?',
    answer: 'Yes, the entire game can be played offline. Only the online PvP arena and leaderboard features require an internet connection.',
    category: 'technical',
  },

  // Specific Questions
  {
    question: 'Where can I find rare Digimon like Veemon, Renamon, or Guilmon?',
    answer: 'Veemon: Recruitable in Chapter 4 Geko Swamp (5% spawn rate) or guaranteed from completing "Lost Dragon" side quest. Renamon: Chapter 5 Spiral Mountain caves (8% spawn). Guilmon: Chapter 6 Machine City secret area or post-game Infinity Tower floors 15-20.',
    category: 'gameplay',
  },
  {
    question: 'What are the missable collectibles and items?',
    answer: 'Missable per chapter: Chapter 3 Desert Crown (post-Etemon only), Chapter 5 Mirror of Truth (required for hidden ending choice), Chapter 7 Ocean Pearl (underwater temple), Chapter 8 Toy Factory Key (before final Puppetmon fight). See our Collectibles Guide for all locations.',
    category: 'gameplay',
  },
  {
    question: 'How do I unlock all 5 endings?',
    answer: 'True Ending: Max friendship + all tablets + right choices. Good Ending: High friendship (70+). Neutral: Medium friendship (40-69). Bad: Low friendship (<40). Dark: Intentionally lose to Apocalymon. You need multiple playthroughs or saves to see all 5.',
    category: 'endgame',
  },
  {
    question: 'What\'s the level cap and can I max all stats?',
    answer: 'Level cap is 99. At level 99 with perfect evolution path, optimal personality, and all stat-boosting items/equipment, you can reach ~350-400 in primary stats and ~250-300 in secondary stats. True max-stat builds require specific evolution paths.',
    category: 'endgame',
  },
];

export default function FAQPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filteredFAQs = faqs.filter((faq) => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        {/* Header */}
        <div className="card p-8 mb-8 bg-gradient-to-br from-indigo-600 to-purple-700 text-white">
          <div className="flex items-center gap-3 mb-4">
            <HelpCircle className="w-12 h-12" />
            <div>
              <h1 className="text-4xl font-bold">Frequently Asked Questions</h1>
              <p className="text-indigo-100 mt-2">Find answers to common questions about Digimon Time Stranger</p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold mb-1">{faqs.length}</div>
              <div className="text-sm text-indigo-100">Questions</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold mb-1">{categories.length - 1}</div>
              <div className="text-sm text-indigo-100">Categories</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold mb-1">24/7</div>
              <div className="text-sm text-indigo-100">Available</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold mb-1">100%</div>
              <div className="text-sm text-indigo-100">Accurate</div>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="card p-6 mb-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-gray-900 dark:text-white"
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className="card p-6 mb-8">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Filter by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {categories.map((category) => {
              const Icon = category.icon;
              const isActive = selectedCategory === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex flex-col items-center gap-2 p-4 rounded-lg transition-all ${
                    isActive
                      ? 'bg-primary-600 text-white shadow-lg'
                      : 'bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  <Icon className="w-6 h-6" />
                  <span className="text-xs font-medium text-center">{category.name}</span>
                  <span className="text-xs opacity-75">
                    {category.id === 'all' ? faqs.length : faqs.filter(f => f.category === category.id).length}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* FAQ List */}
        <div className="space-y-3">
          {filteredFAQs.length === 0 ? (
            <div className="card p-12 text-center">
              <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">No questions found</h3>
              <p className="text-gray-600 dark:text-gray-400">Try adjusting your search or category filter</p>
            </div>
          ) : (
            filteredFAQs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="card overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full p-5 flex items-center justify-between text-left"
                  >
                    <div className="flex-1 pr-4">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="px-2 py-1 text-xs font-bold bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded capitalize">
                          {faq.category.replace('-', ' ')}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                        {faq.question}
                      </h3>
                    </div>
                    <ChevronDown
                      className={`w-6 h-6 text-gray-400 flex-shrink-0 transition-transform ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5">
                      <div className="pt-3 border-t border-gray-200 dark:border-gray-700">
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Still Have Questions */}
        <div className="card p-8 mt-8 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-2 border-blue-200 dark:border-blue-800 text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Still Have Questions?
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Can't find what you're looking for? Join our community forum to ask questions and get help from experienced players.
          </p>
          <a
            href="/community"
            className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors shadow-lg"
          >
            <Users className="w-5 h-5" />
            Visit Community Forum
          </a>
        </div>
      </div>
    </div>
  );
}
