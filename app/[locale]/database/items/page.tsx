import { Metadata } from 'next';
import { generateMetadata as generateSEO } from '@/lib/seo';
import { getTranslations } from 'next-intl/server';
import { promises as fs } from 'fs';
import path from 'path';
import Papa from 'papaparse';
import Link from 'next/link';
import { Package, ArrowLeft, ShoppingBag } from 'lucide-react';

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'database.items' });

  return generateSEO({
    title: t('title'),
    description: t('description'),
    url: '/database/items',
  });
}

interface Item {
  id: string;
  name: string;
  category: string;
  subcategory: string;
  effect: string;
  value: string;
  description: string;
  buyPrice: string;
  sellPrice: string;
  rarity: string;
}

async function loadItems(): Promise<Item[]> {
  const filePath = path.join(process.cwd(), 'data', 'items.csv');
  const fileContent = await fs.readFile(filePath, 'utf-8');

  return new Promise((resolve, reject) => {
    Papa.parse<Item>(fileContent, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        resolve(results.data);
      },
      error: (error: Error) => {
        reject(error);
      },
    });
  });
}

const rarityColors: Record<string, string> = {
  common: 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300',
  uncommon: 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300',
  rare: 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300',
  epic: 'bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300',
  legendary: 'bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300',
};

const categoryIcons: Record<string, string> = {
  consumable: '🧪',
  equipment: '⚔️',
  evolution: '✨',
  collectible: '💎',
};

export default async function ItemsPage({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'database.items' });
  const items = await loadItems();

  // Group items by category
  const itemsByCategory = items.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, Item[]>);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href={`/${locale}/database`}
            className="inline-flex items-center gap-2 text-blue-100 hover:text-white mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Database
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <Package className="w-12 h-12" />
            <h1 className="text-4xl md:text-5xl font-bold">
              {t('title')}
            </h1>
          </div>
          <p className="text-xl text-blue-100">
            {t('description')}
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <div className="bg-white/10 px-4 py-2 rounded-lg">
              <strong>{items.length}</strong> Total Items
            </div>
            <div className="bg-white/10 px-4 py-2 rounded-lg">
              <strong>{Object.keys(itemsByCategory).length}</strong> Categories
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Items by Category */}
        {Object.entries(itemsByCategory).map(([category, categoryItems]) => (
          <div key={category} className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="text-3xl">{categoryIcons[category] || '📦'}</span>
              <span className="capitalize">{category}</span>
              <span className="text-lg text-gray-600 dark:text-gray-400">
                ({categoryItems.length} items)
              </span>
            </h2>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {categoryItems.map((item) => (
                <div
                  key={item.id}
                  className="card p-5 hover:shadow-lg transition-shadow"
                >
                  {/* Item Header */}
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white flex-1">
                      {item.name}
                    </h3>
                    <span className={`text-xs font-semibold uppercase px-2 py-1 rounded ${rarityColors[item.rarity]}`}>
                      {item.rarity}
                    </span>
                  </div>

                  {/* Subcategory Badge */}
                  <div className="mb-3">
                    <span className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded capitalize">
                      {item.subcategory.replace(/-/g, ' ')}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    {item.description}
                  </p>

                  {/* Effect Badge */}
                  {item.effect && item.effect !== 'sell-value' && item.effect !== 'collection' && (
                    <div className="mb-4">
                      <span className="text-xs bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 px-2 py-1 rounded">
                        {item.effect.replace(/-/g, ' ')}
                        {item.value !== '0' && ` (${item.value})`}
                      </span>
                    </div>
                  )}

                  {/* Pricing */}
                  <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex justify-between text-sm">
                      {item.buyPrice !== '0' ? (
                        <div className="flex items-center gap-1">
                          <ShoppingBag className="w-4 h-4 text-gray-500" />
                          <span className="text-gray-500 dark:text-gray-500">Buy:</span>
                          <span className="font-semibold text-gray-900 dark:text-white">
                            {parseInt(item.buyPrice).toLocaleString()}
                          </span>
                        </div>
                      ) : (
                        <div className="text-xs text-gray-500 italic">
                          Cannot be purchased
                        </div>
                      )}
                      <div className="flex items-center gap-1">
                        <span className="text-gray-500 dark:text-gray-500">Sell:</span>
                        <span className="font-semibold text-gray-900 dark:text-white">
                          {parseInt(item.sellPrice).toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Shop Guide */}
        <div className="card p-6 mt-12 bg-gradient-to-br from-blue-50 to-primary-50 dark:from-blue-900/20 dark:to-primary-900/20 border-2 border-primary-200 dark:border-primary-800">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            💰 Shopping Tips
          </h3>
          <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li className="flex items-start gap-2">
              <span className="text-primary-600 dark:text-primary-400 mt-1">•</span>
              <span><strong>HP/SP Capsules</strong>: Stock up on these early - they&apos;re essential for long dungeon runs</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary-600 dark:text-primary-400 mt-1">•</span>
              <span><strong>Stat Chips</strong>: Expensive but provide permanent boosts - save them for your main team</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary-600 dark:text-primary-400 mt-1">•</span>
              <span><strong>Evolution Stones</strong>: Required for special evolutions - collect them from quests and bosses</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary-600 dark:text-primary-400 mt-1">•</span>
              <span><strong>Gems</strong>: Sell these for quick gold when you need it</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary-600 dark:text-primary-400 mt-1">•</span>
              <span><strong>Attachments</strong>: Equip element-specific attachments to maximize damage output</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
