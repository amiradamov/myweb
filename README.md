# Portfolio Website

A responsive single-page portfolio with a hero portrait header and a vertical progress timeline to showcase milestones. The layout emphasizes gradient accents, roomy spacing, and approachable typography tailored for a product designer/developer profile.

## Getting Started
Open `index.html` in your browser to view the site. Styling lives in `styles.css`, and small interactions (timeline progress and card animations) live in `script.js`.

## Customization
- Update text in `index.html` for your name and description.
- Swap the header portrait URL in the `<img>` tag or point it to your own asset.
- Swap the rotating hero wallpapers by updating the `wallpapers` array in `script.js` (five images cycle every 15 seconds with fade animation).
- Adjust colors, spacing, or radii via the `:root` variables in `styles.css`.
- Edit the `experiences` array in `script.js` to paste your timeline items (year, headline, role, context, link, and bullet points) and set a `background` image for the animated corner art on each card.
- Update the `blogs` array in `script.js` to manage your blog cards (background image URL, badge, read time, title, description, and link). The first three entries appear on the homepage sidebar, and the full list renders on `blogs.html` automatically.
- Swap the social URLs beneath the portrait in `index.html` for your Instagram and GitHub (or other platforms) as needed.
- Replace the hero CTA email with your preferred address in the header.