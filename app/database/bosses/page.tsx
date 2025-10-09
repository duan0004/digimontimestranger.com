import { Metadata } from 'next';
import { generateSEO } from '@/lib/seo';
import BossesClient from './BossesClient';

export const metadata: Metadata = generateSEO({
  title: 'Boss Database',
  description: 'Complete database of all bosses in Digimon Time Stranger with strategies, weaknesses, and recommended teams.',
  path: '/database/bosses',
});

export default function BossesPage() {
  return <BossesClient />;
}
