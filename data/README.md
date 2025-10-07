# Digimon Data Entry Guide

This directory contains the CSV database for all Digimon in the game.

## File Structure

- `digimon.csv` - Main database file containing all Digimon data
- `README.md` - This file with instructions for data entry

## CSV Schema

### Columns

| Column | Type | Description | Example |
|--------|------|-------------|---------|
| `id` | string | Unique 4-digit ID with leading zeros | `0001`, `0234` |
| `slug` | string | URL-safe identifier (lowercase, hyphenated) | `agumon`, `metal-greymon` |
| `name` | string | Display name of the Digimon | `Agumon`, `MetalGreymon` |
| `stage` | string | Evolution stage | `Rookie`, `Champion`, `Ultimate`, `Mega`, `Ultra` |
| `attribute` | string | Attribute type | `Vaccine`, `Virus`, `Data`, `Free` |
| `element` | string | Element type | `Fire`, `Water`, `Plant`, `Earth`, `Wind`, `Light`, `Dark`, `Electric`, `Ice`, `Neutral` |
| `memory` | number | Memory cost (1-40) | `4`, `8`, `12` |
| `base_hp` | number | Base HP stat | `55` |
| `base_atk` | number | Base Attack stat | `62` |
| `base_def` | number | Base Defense stat | `45` |
| `base_sp_atk` | number | Base Special Attack stat | `40` |
| `base_sp_def` | number | Base Special Defense stat | `40` |
| `base_speed` | number | Base Speed stat | `55` |
| `skills` | string | Semicolon-separated skill names | `Pepper Breath;Claw Swipe` |
| `locations` | string | Semicolon-separated location names | `Shinjuku;Digital Park` |
| `evolves_to` | JSON string | Array of evolution paths | `[{"target":"greymon","targetName":"Greymon","req":{"level":15}}]` |
| `devolves_to` | JSON string | Array of devolution paths | `[{"target":"koromon","targetName":"Koromon","req":{}}]` |
| `notes` | string | Optional notes/description | `Excellent starter choice` |

## Evolution Path JSON Format

```json
[
  {
    "target": "greymon",
    "targetName": "Greymon",
    "req": {
      "level": 15,
      "stats": {
        "atk": 50
      },
      "item": "Courage Badge",
      "personality": "Brave",
      "friendship": 80,
      "battles": 20
    }
  }
]
```

All fields in `req` are optional. Include only the requirements that apply.

## Data Entry Tips

1. **Always use double quotes** in JSON strings within CSV cells
2. **Escape nested quotes** by doubling them: `""`
3. **Use semicolons** to separate multiple items in skills/locations
4. **Empty evolution arrays** should be `[]`
5. **Consistent naming** - match exact in-game names
6. **Slugs must be unique** and URL-safe (lowercase, hyphens only)

## Example Entry

```csv
0001,agumon,Agumon,Rookie,Vaccine,Fire,4,55,62,45,40,40,55,Pepper Breath;Claw Swipe,Shinjuku;Digital Park,"[{""target"":""greymon"",""targetName"":""Greymon"",""req"":{""level"":15}}]",[],Classic Fire-type Rookie Digimon
```

## Data Collection Strategy

### Priority Levels

**Phase 1 (100 Digimon):**
- All Rookie evolutions
- Popular Champion/Ultimate lines (Agumon, Gabumon, Tentomon, Palmon, Gomamon, Patamon, Gatomon, Veemon)
- All Mega forms

**Phase 2 (250 Digimon):**
- Complete main story Digimon
- Boss Digimon
- Commonly used in early/mid game

**Phase 3 (400+ Digimon):**
- Complete database
- Rare/optional Digimon
- DLC Digimon

### Where to Find Data

1. **Official Wiki:** [wikimon.net](https://wikimon.net)
2. **Game Databases:** DigiDB, Digimon Story guides
3. **Player Communities:** Reddit r/DigimonStory, GameFAQs
4. **In-game Encyclopedia:** Extract stats directly from game

## Data Validation

Before committing new entries:

1. **Check for duplicates:** Ensure ID and slug are unique
2. **Validate JSON:** Use JSON validator for evolution arrays
3. **Test CSV parsing:** Run `npm run validate-data` (if available)
4. **Verify stats:** Cross-reference with reliable sources

## Bulk Entry Template

For faster data entry, you can use spreadsheet software:

1. Open `digimon.csv` in Google Sheets or Excel
2. Use formulas to generate IDs/slugs automatically
3. Copy-paste evolution JSON from template
4. Export as CSV with UTF-8 encoding

## Common Mistakes to Avoid

- ❌ Using single quotes in JSON
- ❌ Forgetting to escape quotes in CSV
- ❌ Inconsistent capitalization in names
- ❌ Spaces in slugs
- ❌ Missing commas in JSON arrays
- ❌ Using invalid stage/attribute/element values
