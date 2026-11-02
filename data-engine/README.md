# RailMind Data Engine

Independent static page at `data-engine/index.html`. No build, package installation, API key or backend is required. Chinese and English content are included; the language selection is stored only in the visitor's browser.

## Images to provide

Keep the image paths in `content.js` as `null` until images are available. Missing files automatically fall back to the designed placeholder. Relative paths are resolved from `data-engine/`.

| Asset key | Suggested file | Purpose |
| --- | --- | --- |
| `background` | `assets/background.webp` | Shared original background for the three strategies |
| `reference` | `assets/target-reference.webp` | Reference image or object for strategy 3 |
| `direct` | `assets/result-direct.webp` | Actual result of the simple prompt |
| `refined` | `assets/result-refined.webp` | Actual result of the detailed prompt |
| `guided` | `assets/result-reference.webp` | Actual result with the target reference |
| `supervision` | `assets/supervision-image.webp` | Reviewed image for the textual supervision example |

Example: change `background: null` to `background: 'assets/background.webp'`. Images use `object-fit: contain` to preserve the full field of view. Use the same background and target for the three strategies where possible. Keep provenance and review records alongside the research data, rather than inferring results from the prompt.

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
