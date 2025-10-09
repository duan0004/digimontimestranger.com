import { Metadata } from 'next';
import { generateSEO } from '@/lib/seo';
import SearchResultsClient from './SearchResultsClient';

export const metadata: Metadata = generateSEO({
  title: 'Search',
  description: 'Search for Digimon, guides, tools, and more across the site.',
  path: '/search',
});

export default function SearchPage() {
  return <SearchResultsClient />;
}
