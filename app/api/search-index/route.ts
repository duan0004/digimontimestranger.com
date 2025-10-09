import { NextResponse } from 'next/server';
import { getSearchIndex } from '@/lib/search-data';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const searchIndex = await getSearchIndex();
    return NextResponse.json(searchIndex);
  } catch (error) {
    console.error('Error generating search index:', error);
    return NextResponse.json(
      { error: 'Failed to generate search index' },
      { status: 500 }
    );
  }
}
