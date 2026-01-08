# Reader Export Prompt

## Purpose
Use this prompt to generate the `exports/book.html` reader view from your Markdown manuscript. This creates a clean, typographically beautiful HTML file that can be printed to PDF.

---

## Export Pipeline

```
manuscript/
├── 00-meta.md           ──┐
├── 01-outline.md           │
├── chapters/               ├──> build_book.py ──> exports/book.html
│   ├── 01-intro.md         │                            │
│   ├── 02-...md            │                            ▼
│   └── ...                 │                      exports/book.pdf
└── references/           ──┘                      (print from browser)
    └── reading-list.md
```

---

## Reader View Requirements

The generated `book.html` should include:

### Typography
- Readable serif font for body (Georgia, Merriweather, or similar)
- Clear hierarchy for headings
- Comfortable line length (60-75 characters)
- Generous line height (1.5-1.7)
- Proper paragraph spacing

### Structure
- Title page
- Table of contents (with anchor links)
- Chapter content
- References/Reading list
- Footnotes (if any)

### Print Optimization
- Page break hints for PDF export
- Print-specific CSS (hide navigation, optimize margins)
- A4/Letter compatible

---

## HTML Template

Use this template for `exports/book.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>[BOOK_TITLE]</title>
    <style>
        /* ========================================
           CSS VARIABLES
           ======================================== */
        :root {
            --font-body: 'Georgia', 'Times New Roman', serif;
            --font-heading: 'Georgia', 'Times New Roman', serif;
            --font-mono: 'Consolas', 'Monaco', monospace;
            
            --color-text: #1a1a1a;
            --color-text-light: #666;
            --color-accent: #8b4513;
            --color-bg: #fefefe;
            --color-border: #ddd;
            
            --max-width: 680px;
            --line-height: 1.7;
        }

        /* ========================================
           BASE STYLES
           ======================================== */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        html {
            font-size: 18px;
        }

        body {
            font-family: var(--font-body);
            line-height: var(--line-height);
            color: var(--color-text);
            background: var(--color-bg);
            padding: 2rem 1rem;
        }

        /* ========================================
           LAYOUT
           ======================================== */
        .book-container {
            max-width: var(--max-width);
            margin: 0 auto;
        }

        /* ========================================
           TITLE PAGE
           ======================================== */
        .title-page {
            text-align: center;
            padding: 4rem 0;
            margin-bottom: 4rem;
            border-bottom: 1px solid var(--color-border);
            page-break-after: always;
        }

        .title-page h1 {
            font-size: 2.5rem;
            font-weight: normal;
            letter-spacing: 0.05em;
            margin-bottom: 0.5rem;
        }

        .title-page .subtitle {
            font-size: 1.25rem;
            font-style: italic;
            color: var(--color-text-light);
            margin-bottom: 2rem;
        }

        .title-page .author {
            font-size: 1.1rem;
            letter-spacing: 0.1em;
            text-transform: uppercase;
        }

        /* ========================================
           TABLE OF CONTENTS
           ======================================== */
        .toc {
            margin-bottom: 4rem;
            page-break-after: always;
        }

        .toc h2 {
            font-size: 1.5rem;
            margin-bottom: 2rem;
            text-align: center;
        }

        .toc-list {
            list-style: none;
        }

        .toc-list li {
            margin-bottom: 0.75rem;
            display: flex;
            align-items: baseline;
        }

        .toc-list a {
            color: var(--color-text);
            text-decoration: none;
            display: flex;
            align-items: baseline;
            width: 100%;
        }

        .toc-list a:hover {
            color: var(--color-accent);
        }

        .toc-title {
            flex-shrink: 0;
        }

        .toc-dots {
            flex-grow: 1;
            border-bottom: 1px dotted var(--color-border);
            margin: 0 0.5rem;
        }

        .toc-page {
            flex-shrink: 0;
            color: var(--color-text-light);
        }

        /* ========================================
           CHAPTERS
           ======================================== */
        .chapter {
            margin-bottom: 4rem;
            page-break-before: always;
        }

        .chapter:first-of-type {
            page-break-before: auto;
        }

        .chapter-header {
            text-align: center;
            margin-bottom: 3rem;
            padding-bottom: 2rem;
            border-bottom: 1px solid var(--color-border);
        }

        .chapter-number {
            font-size: 0.9rem;
            letter-spacing: 0.2em;
            text-transform: uppercase;
            color: var(--color-text-light);
            margin-bottom: 0.5rem;
        }

        .chapter-title {
            font-size: 2rem;
            font-weight: normal;
        }

        /* ========================================
           TYPOGRAPHY
           ======================================== */
        h1, h2, h3, h4 {
            font-family: var(--font-heading);
            font-weight: normal;
            margin-top: 2.5rem;
            margin-bottom: 1rem;
        }

        h2 {
            font-size: 1.5rem;
            margin-top: 3rem;
        }

        h3 {
            font-size: 1.25rem;
            font-style: italic;
        }

        h4 {
            font-size: 1rem;
            letter-spacing: 0.1em;
            text-transform: uppercase;
        }

        p {
            margin-bottom: 1.25rem;
            text-align: justify;
            hyphens: auto;
        }

        strong {
            font-weight: bold;
        }

        em {
            font-style: italic;
        }

        blockquote {
            margin: 2rem 0;
            padding: 1rem 2rem;
            border-left: 3px solid var(--color-accent);
            font-style: italic;
            color: var(--color-text-light);
        }

        ul, ol {
            margin: 1.5rem 0;
            padding-left: 2rem;
        }

        li {
            margin-bottom: 0.5rem;
        }

        hr {
            border: none;
            text-align: center;
            margin: 3rem 0;
        }

        hr::before {
            content: '* * *';
            letter-spacing: 1em;
            color: var(--color-text-light);
        }

        /* ========================================
           EXERCISES
           ======================================== */
        .exercise {
            margin: 2rem 0;
            padding: 1.5rem;
            background: #f9f9f9;
            border: 1px solid var(--color-border);
        }

        .exercise-title {
            font-weight: bold;
            margin-bottom: 1rem;
        }

        /* ========================================
           REFERENCES
           ======================================== */
        .references {
            page-break-before: always;
            margin-top: 4rem;
            padding-top: 2rem;
            border-top: 1px solid var(--color-border);
        }

        .references h2 {
            text-align: center;
        }

        /* ========================================
           PRINT STYLES
           ======================================== */
        @media print {
            html {
                font-size: 11pt;
            }

            body {
                padding: 0;
            }

            .book-container {
                max-width: 100%;
            }

            a {
                color: var(--color-text);
                text-decoration: none;
            }

            .toc-dots {
                border-bottom-style: dotted;
            }

            @page {
                margin: 1in;
            }

            @page :first {
                margin-top: 2in;
            }

            .chapter {
                page-break-before: always;
            }

            .chapter:first-of-type {
                page-break-before: avoid;
            }

            h2, h3 {
                page-break-after: avoid;
            }

            p {
                orphans: 3;
                widows: 3;
            }
        }

        /* ========================================
           DARK MODE (OPTIONAL)
           ======================================== */
        @media (prefers-color-scheme: dark) {
            :root {
                --color-text: #e0e0e0;
                --color-text-light: #999;
                --color-accent: #d4a574;
                --color-bg: #1a1a1a;
                --color-border: #333;
            }

            .exercise {
                background: #222;
            }
        }
    </style>
</head>
<body>
    <div class="book-container">
        <!-- TITLE PAGE -->
        <div class="title-page">
            <h1>[BOOK_TITLE]</h1>
            <p class="subtitle">[SUBTITLE]</p>
            <p class="author">[AUTHOR_NAME]</p>
        </div>

        <!-- TABLE OF CONTENTS -->
        <nav class="toc">
            <h2>Contents</h2>
            <ol class="toc-list">
                <li>
                    <a href="#chapter-1">
                        <span class="toc-title">1. [Chapter Title]</span>
                        <span class="toc-dots"></span>
                    </a>
                </li>
                <!-- Repeat for each chapter -->
            </ol>
        </nav>

        <!-- CHAPTERS -->
        <article class="chapter" id="chapter-1">
            <header class="chapter-header">
                <p class="chapter-number">Chapter One</p>
                <h1 class="chapter-title">[Chapter Title]</h1>
            </header>
            
            <!-- Chapter content goes here -->
            <p>...</p>
        </article>

        <!-- Repeat for each chapter -->

        <!-- REFERENCES -->
        <section class="references">
            <h2>References & Further Reading</h2>
            <!-- Content from reading-list.md -->
        </section>
    </div>
</body>
</html>
```

---

## Build Script Usage

The `scripts/build_book.py` script automates this process:

```bash
# Build book.html from manuscript
python scripts/build_book.py books/02-your-book

# Output: books/02-your-book/exports/book.html
```

The script:
1. Reads all chapter files in order
2. Converts Markdown to HTML
3. Generates table of contents
4. Inserts into the template
5. Outputs to `exports/book.html`

---

## PDF Export

After generating `book.html`:

1. Open `exports/book.html` in Chrome or Firefox
2. Press `Cmd+P` (Mac) or `Ctrl+P` (Windows)
3. Select "Save as PDF"
4. Settings:
   - Margins: Default or Minimum
   - Headers/footers: Off
   - Background graphics: On (if needed)
5. Save as `exports/book.pdf`

---

## EPUB Export (Optional)

If you need EPUB format and have `pandoc` installed:

```bash
# Convert book.html to EPUB
pandoc exports/book.html -o exports/book.epub \
  --metadata title="[BOOK_TITLE]" \
  --metadata author="[AUTHOR]" \
  --epub-cover-image=cover.jpg
```

---

## Customization

### Fonts

To use custom fonts, add Google Fonts:

```html
<link href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet">
```

Then update CSS:

```css
:root {
    --font-body: 'Merriweather', Georgia, serif;
}
```

### Colors

Update the accent color to match your book's brand:

```css
:root {
    --color-accent: #your-brand-color;
}
```

### Page Numbers

Page numbers are best handled by the browser's print system. If you need custom page numbers, consider using Prince XML or WeasyPrint (advanced).

---

## Quality Checklist

Before exporting final PDF:

- [ ] Title page displays correctly
- [ ] Table of contents links work
- [ ] All chapters present and in order
- [ ] Images (if any) render properly
- [ ] Exercises/callouts styled consistently
- [ ] References section complete
- [ ] Print preview shows proper page breaks
- [ ] No orphaned headings (heading at bottom of page)
- [ ] No widows/orphans in paragraphs (single lines)

---

## Troubleshooting

### Content looks different in PDF
- Check print CSS media query
- Verify font sizes are in `pt` not `rem` for print

### Page breaks in wrong places
- Add `page-break-before: always` to chapter class
- Add `page-break-after: avoid` to headings

### Long words break layout
- Add `word-wrap: break-word` to body
- Add `hyphens: auto` to paragraphs

### Images too large
- Add `max-width: 100%` to img elements
- Consider `page-break-inside: avoid` for figures

