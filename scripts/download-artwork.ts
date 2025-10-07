/**
 * Automatic Digimon Artwork Downloader
 *
 * This script automatically searches for and downloads official Digimon artwork
 * from multiple sources including:
 * - Digimon Wiki (wikimon.net)
 * - Bandai Namco official assets
 * - DigimonCardGame official images
 *
 * Usage: npm run download-artwork [digimon-name]
 */

import fs from 'fs';
import path from 'path';
import https from 'https';
import http from 'http';
import { loadDigimonData } from '../lib/data-loader';

interface ArtworkSource {
  name: string;
  url: string;
  quality: 'high' | 'medium' | 'low';
}

/**
 * Search for Digimon artwork from multiple sources
 */
async function searchArtwork(digimonName: string): Promise<ArtworkSource[]> {
  const sources: ArtworkSource[] = [];

  // Wikimon - High quality official artwork
  const wikimonUrl = `https://wikimon.net/images/${digimonName.toLowerCase()}.png`;
  sources.push({
    name: 'Wikimon',
    url: wikimonUrl,
    quality: 'high',
  });

  // Alternative naming conventions
  const alternativeNames = [
    digimonName.replace(/\s+/g, '_'),
    digimonName.replace(/\s+/g, ''),
    `${digimonName}_\(Digimon\)`,
  ];

  alternativeNames.forEach(altName => {
    sources.push({
      name: `Wikimon (${altName})`,
      url: `https://wikimon.net/images/${altName}.png`,
      quality: 'high',
    });
  });

  // DigimonCardGame assets
  const cardGameUrl = `https://world.digimoncard.com/images/cardlist/card/${digimonName.toLowerCase()}.png`;
  sources.push({
    name: 'DigimonCardGame',
    url: cardGameUrl,
    quality: 'medium',
  });

  return sources;
}

/**
 * Download image from URL
 */
async function downloadImage(url: string, outputPath: string): Promise<boolean> {
  return new Promise((resolve) => {
    const protocol = url.startsWith('https') ? https : http;

    protocol.get(url, (response) => {
      if (response.statusCode === 200) {
        const fileStream = fs.createWriteStream(outputPath);
        response.pipe(fileStream);

        fileStream.on('finish', () => {
          fileStream.close();
          console.log(`✅ Downloaded: ${path.basename(outputPath)}`);
          resolve(true);
        });

        fileStream.on('error', (err) => {
          console.error(`❌ File write error: ${err.message}`);
          fs.unlinkSync(outputPath);
          resolve(false);
        });
      } else {
        console.log(`⚠️  HTTP ${response.statusCode}: ${url}`);
        resolve(false);
      }
    }).on('error', (err) => {
      console.error(`❌ Download error: ${err.message}`);
      resolve(false);
    });
  });
}

/**
 * Download artwork for a single Digimon
 */
async function downloadDigimonArtwork(digimonName: string, slug: string): Promise<boolean> {
  console.log(`\n🔍 Searching artwork for: ${digimonName}`);

  const sources = await searchArtwork(digimonName);
  const outputDir = path.join(process.cwd(), 'public', 'images', 'digimon');

  // Create output directory if it doesn't exist
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const outputPath = path.join(outputDir, `${slug}.png`);

  // Skip if already exists
  if (fs.existsSync(outputPath)) {
    console.log(`⏭️  Already exists: ${slug}.png`);
    return true;
  }

  // Try each source until we find one that works
  for (const source of sources) {
    console.log(`📥 Trying ${source.name}...`);
    const success = await downloadImage(source.url, outputPath);

    if (success) {
      console.log(`✨ Successfully downloaded from ${source.name} (${source.quality} quality)`);
      return true;
    }
  }

  console.log(`❌ No artwork found for ${digimonName}`);
  return false;
}

/**
 * Main function
 */
async function main() {
  const targetDigimon = process.argv[2];

  console.log('🎨 Digimon Artwork Downloader');
  console.log('═'.repeat(50));

  const allDigimon = await loadDigimonData();

  if (targetDigimon) {
    // Download specific Digimon
    const digimon = allDigimon.find(
      d => d.name.toLowerCase() === targetDigimon.toLowerCase() ||
           d.slug === targetDigimon.toLowerCase()
    );

    if (!digimon) {
      console.error(`❌ Digimon not found: ${targetDigimon}`);
      process.exit(1);
    }

    await downloadDigimonArtwork(digimon.name, digimon.slug);
  } else {
    // Download all Digimon
    console.log(`📊 Found ${allDigimon.length} Digimon to process\n`);

    let successCount = 0;
    let failCount = 0;

    for (const digimon of allDigimon) {
      const success = await downloadDigimonArtwork(digimon.name, digimon.slug);
      if (success) {
        successCount++;
      } else {
        failCount++;
      }

      // Rate limiting - wait 500ms between requests
      await new Promise(resolve => setTimeout(resolve, 500));
    }

    console.log('\n' + '═'.repeat(50));
    console.log(`✅ Success: ${successCount}`);
    console.log(`❌ Failed: ${failCount}`);
    console.log(`📊 Total: ${allDigimon.length}`);
    console.log('═'.repeat(50));
  }
}

// Run if called directly
if (require.main === module) {
  main().catch(console.error);
}

export { downloadDigimonArtwork, searchArtwork };
