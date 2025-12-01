// Paste your milestones here. Add, remove, or reorder items and the UI will update automatically.
const experiences = [
  {
    year: '2025',
    headline: 'JestPlus Phase II',
    role: 'Project Lead, DevOps Engineer',
    context: 'Idea Owner',
    link: 'https://jestplus.az/',
    background: "url('https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1200&q=80')",
    summary:
      'Managed project delivery for JestPlus Phase II while designing and maintaining the platform’s AWS infrastructure, CI/CD pipelines, and cloud reliability as Project Lead & DevOps.',
    bullets: [
      'Led the full lifecycle of JestPlus Phase II, coordinating technical, content, and operational teams to deliver a scalable sign-language educational platform.',
      'Designed and maintained AWS infrastructure (EC2, S3, CloudFront, RDS) and implemented CI/CD workflows to ensure secure, stable, and efficient platform operations.',
      'Oversaw development, deployment, and quality assurance, ensuring timely delivery of features, high system availability, and smooth cross-team communication.'
    ],
  },
  {
    year: '2024',
    headline: 'JestPlus',
    role: 'Backend Developer, DevOps Engineer',
    context: 'Idea Owner',
    link: 'https://jestplus.az/',
    background: "url('https://jestplus.az/images/why.jpg')",
    summary:
      'Built JestPlus end-to-end — designing the backend, managing DevOps workflows, and architecting a scalable AWS infrastructure.',
    bullets: [
      'Developed and maintained a scalable Flask backend for the JestPlus mobile app, enabling learning of Azerbaijani Sign Language.',
      'Designed RESTful API architecture (JWT authentication, Google, Apple Sign-In, user progress, dictionary, and multimedia endpoints).',
      'Built and optimized MySQL/AWS Aurora databases with relational models, migrations, and caching logic for performance.',
      'IntegratedAWS services including EC2, S3 (with CloudFront), and MediaConvert (HLS video processing). Automated deployment via Gunicorn + Nginx on Ubuntu servers; managed SSL and domain routing.',
      'Collaborated on infrastructure design (VMware, CI/CD pipelines) and cost optimization across AWS components.'
    ],
  },
  {
    year: '2023',
    headline: 'Neurotime',
    role: 'Backend Developer',
    context: 'DevOps Engineer',
    link: 'https://example.com/storytelling-dashboards',
    background: "url('https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1200&q=80')",
    summary:
      'Managed and automated infrastructure, combining Proxmox virtualization, CI/CD pipelines, and cross-platform integration into a secure, scalable DevOps ecosystem.',
    bullets: [
      'Managed and configured Linux servers and Proxmox virtualization environments.',
      'Set up and maintained CI/CD pipelines and GitLab environments on Ubuntu.',
      'Worked with Airflow, containerization, and automation tools for environment deployment.',
      'Implemented static IP configurations, SSH access management, and GPU passthrough on Proxmox.',
      'Supported cross-platform integrations (Appium, Waydroid, ADB) and security compliance (CIS).'
    ],
  },
  {
    year: '2023',
    headline: 'Web Based Sign Language Vocabulary',
    role: 'Backend Developer',
    context: 'Project Lead',
    link: 'https://www.jestdili.az/',
    background: "url('https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1200&q=80')",
    summary:
      'Led the team, designing the backend architecture and scalable database to support accurate and accessible linguistic data.',
    bullets: [
      'Led a team of developers in building the Azerbaijani Sign Language dictionary website.',
      'Oversaw both backend and frontend developers, optimizingworkflowefficiency and ensuring cohesive integration of design and functionality.',
      'Architected and implemented the website’s database infrastructure, employing best practices to efficiently organize and store comprehensive sign language data..',
    ],
  },
  {
    year: '2022',
    headline: 'EMANAT PAYMENT SYSTEM',
    role: 'Software Engineer',
    context: 'API',
    link: '/',
    background: "url('https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1200&q=80')",
    summary:
      'Contributed to API integration, parsing data, and ensuring reliable system behavior through detailed testing.',
    bullets: [
      'Read API documentation provided by the client to understand the endpoints, authentication requirements, request parameters, and response format.',
      'Proficiently parsed JSON and XML data from API responses, extracting essential product informatio',
      'Seamlessly integrated and presented client products within the application’s user interface, enhancing the customer experience.',
    ],
  },
  {
    year: '2021',
    headline: 'Firma Ac',
    role: 'Mobile Application Developer',
    context: 'Software Engineer',
    link: 'https://github.com/amiradamov/FirmaAs',
    background: "url('https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1200&q=80')",
    summary:
      'Created Flutter-based mobile applications with seamless API integration, intuitive UI design, and requirements-driven collaboration with stakeholders.',
    bullets: [
      'Developed and deployed mobile applications on the Flutter framework, enhancing user experiences.',
      'Parsed XML data from API responses to extract vital product information, ensuring seamless data integration.',
      'Designed intuitive user interfaces to optimize usability and drive user engagement.',
    ],
  },
];

// Manage your blogs here. Add, remove, or reorder entries and the UI will update automatically.
const blogs = [
  {
    background: "url('https://miro.medium.com/v2/resize:fit:4800/format:webp/1*0HjKaLHQ_E4TRM7Zx9B8qQ.png')",
    badge: 'AI & Bots',
    tone: 'tone-a',
    readTime: '6 min read',
    title: 'Developing a Telegram Bot Using Prompt Engineering',
    description: 'How to create a Telegram bot that leverages prompt engineering to enhance user interactions and provide dynamic responses.',
    link: 'https://medium.com/@grounded_tan_salmon_444/developing-a-telegram-bot-using-prompt-engineering-bcc20f4a1c44',
  },
  {
    background: "url('https://miro.medium.com/v2/resize:fit:720/format:webp/0*c--K39R8XS9nNi5F.png')",
    badge: 'Web Development',
    tone: 'tone-b',
    readTime: '7 min read',
    title: 'How a Scalable Sign Language Learning Platform Using AWS was built: A Deep Dive into JestPlus',
    description: 'An in-depth look at the architecture and development of JestPlus, a scalable sign language learning platform built on AWS, highlighting key features and technologies used.',
    link: 'https://medium.com/@grounded_tan_salmon_444/how-a-scalable-sign-language-learning-platform-using-aws-was-built-a-deep-dive-into-jestplus-986159f69cb1',
  },
];

const list = document.querySelector('.milestone-list');
const timeline = document.querySelector('.timeline');
const line = document.querySelector('.timeline-line');
const progressFill = document.querySelector('.progress-fill');
const blogLinks = document.querySelector('.blog-links');
const blogCollection = document.querySelector('.blog-collection');

function createMilestone(item, index) {
  const article = document.createElement('article');
  article.className = 'milestone';
  article.style.setProperty('--delay', `${index * 60}ms`);

  const marker = document.createElement('div');
  marker.className = 'marker';
  marker.innerHTML = `
    <span class="year">${item.year}</span>
    <span class="marker-dot"></span>
  `;

  const card = document.createElement(item.link ? 'a' : 'div');
  card.className = 'card';
  if (item.background) {
    card.style.setProperty('--bg', item.background);
  }
  if (item.link) {
    card.href = item.link;
    card.target = '_blank';
    card.rel = 'noreferrer noopener';
  }
  card.innerHTML = `
    <div class="card-visual" aria-hidden="true">
      <div class="card-visual__glow"></div>
      <div class="card-visual__image"></div>
    </div>
    <div class="card-content">
      <div class="card-top">
        <span class="pill">${item.context}</span>
        <span class="pill soft">${item.role}</span>
      </div>
      <h3>${item.headline}</h3>
      <p class="muted">${item.summary}</p>
      <ul class="bullets">
        ${item.bullets.map((point) => `<li>${point}</li>`).join('')}
      </ul>
    </div>
  `;

  article.append(marker, card);
  return article;
}

let milestoneNodes = [];

function renderTimeline() {
  if (!list) return;
  milestoneNodes = [];
  list.innerHTML = '';
  experiences.forEach((item, index) => {
    const node = createMilestone(item, index);
    milestoneNodes.push(node);
    list.appendChild(node);
  });
}

function createBlogCard(post) {
  const anchor = document.createElement('a');
  anchor.className = 'blog-card';
  anchor.style.setProperty('--bg', post.background);
  anchor.href = post.link;
  anchor.target = '_blank';
  anchor.rel = 'noreferrer noopener';
  anchor.innerHTML = `
    <div class="blog-meta">
      <span class="badge ${post.tone}">${post.badge}</span>
      <span class="pill tiny">${post.readTime}</span>
    </div>
    <p class="blog-title">${post.title}</p>
    <p class="blog-desc">${post.description}</p>
  `;
  return anchor;
}

function renderBlogs() {
  if (blogLinks) {
    blogLinks.innerHTML = '';
    blogs.slice(0, 3).forEach((post) => {
      const card = createBlogCard(post);
      blogLinks.appendChild(card);
    });
  }

  if (blogCollection) {
    blogCollection.innerHTML = '';
    blogs.forEach((post, index) => {
      const tile = document.createElement('a');
      tile.className = 'blog-tile';
      tile.style.setProperty('--bg', post.background);
      tile.href = post.link;
      tile.target = '_blank';
      tile.rel = 'noreferrer noopener';
      tile.style.setProperty('--delay', `${index * 40}ms`);
      tile.innerHTML = `
        <div class="tile-overlay"></div>
        <div class="tile-inner">
          <div class="tile-top">
            <span class="badge ${post.tone}">${post.badge}</span>
            <span class="pill tiny">${post.readTime}</span>
          </div>
          <h3>${post.title}</h3>
          <p class="muted">${post.description}</p>
          <span class="tile-arrow" aria-hidden="true">→</span>
        </div>
      `;
      blogCollection.appendChild(tile);
    });
  }
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

  const centerLine = window.scrollY + window.innerHeight * 0.45;
  let activeIndex = -1;
  milestoneNodes.forEach((node, index) => {
    const top = node.getBoundingClientRect().top + window.scrollY;
    if (top <= centerLine) activeIndex = index;
  });

  milestoneNodes.forEach((node, index) => {
    node.classList.toggle('active', index === activeIndex);
  });
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
renderBlogs();

window.addEventListener('scroll', updateProgress, { passive: true });
window.addEventListener('resize', updateProgress);