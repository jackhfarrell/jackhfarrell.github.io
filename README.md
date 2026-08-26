# jackhfarrell.com

Personal academic website hosted with GitHub Pages. The site is plain HTML, CSS, and
JavaScript, with no build step.

## Structure

- `index.html` contains the home page.
- `research/`, `teaching/`, and `talks/` contain the main site sections.
- `styles.css` contains the shared styles, including the responsive layouts.
- `script.js` controls the mobile navigation.
- `assets/`, `papers/`, and `teaching/projects/` contain images and documents.

## Local development

Run the site from the repository root so absolute paths resolve correctly.

```sh
python3 -m http.server 3456
```

Then open <http://localhost:3456>.
