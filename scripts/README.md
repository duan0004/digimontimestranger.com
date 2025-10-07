# Digimon Artwork Downloader

Automatic artwork downloading system for Digimon Time Stranger website.

## Features

- 🎨 Automatically searches for official Digimon artwork from multiple sources
- 🔍 Multiple source fallback (Wikimon, DigimonCardGame, etc.)
- 📊 Batch download all Digimon or specific ones
- ⚡ Rate limiting to avoid server overload
- ✅ Skip already downloaded images
- 📝 Detailed progress reporting

## Usage

### Download All Digimon Artwork

```bash
npm run download-artwork:all
```

This will download artwork for all Digimon in the database (`data/digimon.csv`).

### Download Specific Digimon

```bash
npm run download-artwork agumon
npm run download-artwork "Metal Greymon"
```

You can use either the Digimon name or slug.

## Sources

The script searches for artwork in the following order:

1. **Wikimon** (High Quality)
   - Primary source for official artwork
   - Multiple naming conventions tried

2. **DigimonCardGame** (Medium Quality)
   - Card game official assets
   - Fallback source

## Output

All downloaded images are saved to:
```
public/images/digimon/{slug}.png
```

For example:
- `public/images/digimon/agumon.png`
- `public/images/digimon/greymon.png`

## Rate Limiting

The script includes a 500ms delay between requests to avoid overwhelming servers.

## Manual Downloads

If the automatic system doesn't find artwork for certain Digimon:

1. Search manually on [Wikimon](https://wikimon.net/)
2. Download the image
3. Save it to `public/images/digimon/{slug}.png`
4. Ensure the filename matches the Digimon's slug from the CSV

## Adding More Sources

To add additional artwork sources, edit `scripts/download-artwork.ts` and add to the `searchArtwork()` function:

```typescript
sources.push({
  name: 'Your Source Name',
  url: `https://example.com/images/${digimonName}.png`,
  quality: 'high' | 'medium' | 'low',
});
```

## Troubleshooting

### No artwork found

Some Digimon may have different naming conventions. Check:
- Wikimon directly for the correct image URL
- Try alternative spellings
- Download manually if needed

### HTTP errors

If you see HTTP 403 or 429 errors:
- Wait a few minutes before retrying
- Some sources may require user agent headers (can be added to the script)

## Example Output

```
🎨 Digimon Artwork Downloader
══════════════════════════════════════════════════

📊 Found 63 Digimon to process

🔍 Searching artwork for: Agumon
📥 Trying Wikimon...
✅ Downloaded: agumon.png
✨ Successfully downloaded from Wikimon (high quality)

🔍 Searching artwork for: Greymon
📥 Trying Wikimon...
✅ Downloaded: greymon.png
✨ Successfully downloaded from Wikimon (high quality)

══════════════════════════════════════════════════
✅ Success: 55
❌ Failed: 8
📊 Total: 63
══════════════════════════════════════════════════
```
