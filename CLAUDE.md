# Project Instructions for AI Agents

This project generates PowerPoint presentations from markdown source.

## File Relationships

```
presentation.md  (source of truth for content)
       ↓
generate-pptx.js (must be updated to match)
       ↓
presentation.pptx (generated output, gitignored)
```

**Important:** When `presentation.md` changes, `generate-pptx.js` must be updated to match.

## generate-pptx.js Architecture

### Structure

```javascript
// 1. Setup (lines 1-15)
const pptx = new pptxgen();
const colors = { primary, secondary, dark, light, accent };

// 2. Slides (lines 17-470)
let slideN = pptx.addSlide();
slideN.addText(...);
slideN.addShape(...);
slideN.addNotes(...);

// 3. Save (lines 472-475)
pptx.writeFile({ fileName: 'presentation.pptx' });
```

### Slide Numbering

Slides are numbered sequentially: `slide1`, `slide2`, ... `slide10`

When adding a new slide:
1. Insert at correct position
2. Renumber all subsequent slides
3. Update all variable references

### Common Patterns

**Title slide:**
```javascript
slideN.addText('Title', {
  x: 0.5, y: 2, w: '90%', h: 1.5,
  fontSize: 44, bold: true, color: colors.dark,
  align: 'center'
});
```

**Section header:**
```javascript
slideN.addText('Section Title', {
  fontSize: 36, bold: true, color: colors.dark
});
```

**Subtitle/description:**
```javascript
slideN.addText('Description text', {
  fontSize: 20, color: '666666', italic: true
});
```

**Bullet list:**
```javascript
slideN.addText([
  { text: '• Item 1\n', options: { bullet: false } },
  { text: '• Item 2\n', options: { bullet: false } }
], { fontSize: 18, color: '444444' });
```

**Colored box with text:**
```javascript
slideN.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
  x: 1, y: 1.5, w: 8, h: 0.8,
  fill: { color: colors.primary }
});
slideN.addText('Box text', {
  x: 1, y: 1.5, w: 8, h: 0.8,
  fontSize: 22, bold: true, color: colors.light,
  align: 'center', valign: 'middle'
});
```

**Speaker notes (from markdown HTML comments):**
```javascript
slideN.addNotes('Speaker notes text here');
```

### Color Reference

| Name | Hex | Usage |
|------|-----|-------|
| `primary` | 667eea | Headers, highlights |
| `secondary` | 764ba2 | Secondary elements |
| `dark` | 1a1a2e | Main text |
| `light` | ffffff | Text on colored backgrounds |
| `accent` | 4facfe | Special highlights |

## Syncing Changes from presentation.md

### Mapping Markdown to JS

| Markdown | JS equivalent |
|----------|---------------|
| `# Title` | `addText('Title', { fontSize: 36, bold: true })` |
| `## Subtitle` | `addText('Subtitle', { fontSize: 22 })` |
| `**bold**` | `bold: true` in options |
| `*italic*` | `italic: true` in options |
| `- bullet` | Array of text objects with `• ` prefix |
| `<!-- comment -->` | `addNotes('comment')` |
| `---` | New slide (`let slideN = pptx.addSlide()`) |

### When Adding a New Slide

1. Find the correct position in the slide sequence
2. Add the new slide definition
3. Renumber all subsequent `slideN` variables
4. Update all references to those slides

### When Modifying Text

1. Find the corresponding `addText()` call
2. Update the string content
3. Verify formatting options match markdown styling

### When Deleting a Slide

1. Remove the slide definition block
2. Renumber subsequent slides
3. Update all variable references

## Validation

After making changes:
```bash
node --check generate-pptx.js  # Syntax check
node generate-pptx.js          # Generate and verify
```
