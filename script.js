// Paste your milestones here. Add, remove, or reorder items and the UI will update automatically.
const experiences = [
  {
    year: '2024',
    headline: 'Guiding immersive brand platforms',
    role: 'Lead product engineer',
    context: 'Present',
    summary:
      'Own narrative-led web experiences for founders—blending rapid prototyping with polished, accessible production builds.',
    bullets: [
      'Built a modular design system that cut handoff time by 40%.',
      'Introduced motion standards for micro-interactions and hero reveals.',
      'Mentors designers and developers in pairing visual language with semantic HTML.',
    ],
  },
  {
    year: '2022',
    headline: 'Crafted storytelling dashboards',
    role: 'Lead, Atelier',
    context: 'Product design',
    summary:
      'Translated dense data into legible narratives for climate and mobility products, leaning on intentional typography and color.',
    bullets: [
      'Directed a 12-column responsive grid and tokenized spacing scale.',
      'Delivered WCAG-compliant charting with crisp annotation patterns.',
      'Partnered with engineering to prototype in Figma and ship in React.',
    ],
  },
  {
    year: '2020',
    headline: 'Launched playful ecommerce stories',
    role: 'Freelance',
    context: 'Frontend',
    summary:
      'Built expressive landing pages with editorial layouts, layered illustration, and subtle parallax to keep shoppers curious.',
    bullets: [
      'Rolled out headless commerce builds with performance budgets.',
      'Authored animation timelines that preserved scroll performance.',
      'Documented reusable components to accelerate A/B testing.',
    ],
  },
  {
    year: '2018',
    headline: 'Explored generative visuals',
    role: 'Studio',
    context: 'Foundations',
    summary:
      'Experimented with creative coding, translating audio and gesture into motion-first visuals that informed later branding work.',
    bullets: [
      'Built GLSL sketches and audio-reactive canvases for live shows.',
      'Documented learnings on color harmony and responsive type.',
      'Developed an eye for balancing restraint with expressive flair.',
    ],
  },
];

const list = document.querySelector('.milestone-list');
const timeline = document.querySelector('.timeline');
const line = document.querySelector('.timeline-line');
const progressFill = document.querySelector('.progress-fill');

function createMilestone(item) {
  const article = document.createElement('article');
  article.className = 'milestone';

  const marker = document.createElement('div');
  marker.className = 'marker';
  marker.innerHTML = `
    <span class="marker-dot"></span>
    <span class="year">${item.year}</span>
  `;

  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <div class="card-top">
      <span class="pill">${item.context}</span>
      <span class="pill soft">${item.role}</span>
    </div>
    <h3>${item.headline}</h3>
    <p class="muted">${item.summary}</p>
    <ul class="bullets">
      ${item.bullets.map((point) => `<li>${point}</li>`).join('')}
    </ul>
  `;

  article.append(marker, card);
  return article;
}

function renderTimeline() {
  if (!list) return;
  list.innerHTML = '';
  experiences.forEach((item) => list.appendChild(createMilestone(item)));
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function updateProgress() {
  if (!timeline || !line) return;
  const rect = timeline.getBoundingClientRect();
  const start = rect.top + window.scrollY;
  const end = start + rect.height;
  const view = window.scrollY + window.innerHeight * 0.85;
  const progress = clamp((view - start) / (end - start), 0, 1);
  const percent = `${(progress * 100).toFixed(1)}%`;
  line.style.setProperty('--progress', percent);
  if (progressFill) progressFill.style.width = percent;
}

function observeMilestones() {
  const milestones = document.querySelectorAll('.milestone');
  if (!milestones.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );

  milestones.forEach((node) => observer.observe(node));
}

renderTimeline();
observeMilestones();
updateProgress();

window.addEventListener('scroll', updateProgress, { passive: true });
window.addEventListener('resize', updateProgress);
