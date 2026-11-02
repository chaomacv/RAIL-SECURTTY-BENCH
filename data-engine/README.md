# RailMind Data Engine

Independent static page at `data-engine/index.html`. No build, package installation, API key or backend is required. Chinese and English content are included; the language selection is stored only in the visitor's browser.

## Example images

The controlled synthesis example uses **noise-barrier post corrosion**. The owner supplied an original background, three generated results and a real target-reference image. The browser assets are WebP copies; source files remain unchanged. Images use `object-fit: contain` to retain the complete field of view.

| Asset key | File | Purpose |
| --- | --- | --- |
| `background` | `assets/noise-barrier-background.webp` | Shared original background |
| `direct` | `assets/noise-barrier-direct.webp` | Direct-prompt generation result |
| `refined` | `assets/noise-barrier-refined.webp` | Detailed-prompt generation result |
| `guided` | `assets/noise-barrier-guided.webp` | Reference-guided generation result |
| `reference` | `assets/noise-barrier-reference.webp` | Real corroded-post target reference |
| `supervision` | `assets/supervision-scenes.webp` | Owner-supplied scene montage for textual-supervision input |

The bilingual prompts are illustrative descriptions of the three strategies, not a claim that these exact prompts produced the supplied images. Review criteria remain questions awaiting assessment. Missing assets fall back to the designed placeholder. Relative image paths resolve from `data-engine/`.

## Content and demonstrations

- `content.js`: bilingual prompts, stage descriptions, review criteria, workflow steps and QA templates.
- `app.js`: bilingual interface, tabs and keyboard support, image fallbacks, comparison view, workflow playback and pause, prompt component explorer, task templates and prompt copying.
- `styles.css`: responsive visual presentation and reduced-motion support.
- Review criteria remain pending until actual samples are assessed. The JSON panel is an illustrative presentation schema; it is not a claim about a repository export format or a generated result. QA answers contain template fields only. No live model calls occur.
- The detection branch remains distinct from teacher-generated text. Human box annotations are not presented as model-generated ground truth.

## Local preview

Serve the repository root with a static HTTP server, for example `python -m http.server 4173`, then open `http://localhost:4173/data-engine/`. The parent project page links to this page from its navigation, Data Engine method stage, benchmark section and resource section.

## Publication

Place this folder beside the existing root `index.html`. Publish the repository root through the existing GitHub Pages configuration. The intended public URL is `https://chaomacv.github.io/RAIL-SECURTTY-BENCH/data-engine/`. No change to benchmark images or evaluation data is required.

