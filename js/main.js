/* ===================================================================
   ARCHANA THANUWANA - PORTFOLIO INTERACTIVITY SCRIPT
   High-performance Vanilla JS with Live GitHub API Auto-Sync Engine
   =================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // -----------------------------------------------------------------
  // 1. Dark / Light Mode Toggle with Persistence
  // -----------------------------------------------------------------
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = themeToggle ? themeToggle.querySelector('i') : null;
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const savedTheme = localStorage.getItem('portfolio-theme');

  const setTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
    if (themeIcon) {
      if (theme === 'light') {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
      } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
      }
    }
  };

  if (savedTheme) {
    setTheme(savedTheme);
  } else if (!prefersDark) {
    setTheme('light');
  } else {
    setTheme('dark');
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'dark';
      setTheme(current === 'dark' ? 'light' : 'dark');
    });
  }

  // -----------------------------------------------------------------
  // 2. Dynamic Typing Effect in Hero
  // -----------------------------------------------------------------
  const typeTextElement = document.getElementById('typing-text');
  if (typeTextElement) {
    const roles = [
      'IT Undergraduate @ UOM FIT',
      'AI & Agentic Systems Builder',
      'Full-Stack Software Developer',
      'Flutter & Mobile Enthusiast',
      'Embedded & IoT Tinkerer'
    ];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typeSpeed = 90;
    const eraseSpeed = 45;
    const delayBetween = 2000;

    function typeLoop() {
      const currentRole = roles[roleIndex];
      if (isDeleting) {
        typeTextElement.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
      } else {
        typeTextElement.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
      }

      let timeout = isDeleting ? eraseSpeed : typeSpeed;

      if (!isDeleting && charIndex === currentRole.length) {
        timeout = delayBetween;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        timeout = 400;
      }

      setTimeout(typeLoop, timeout);
    }

    setTimeout(typeLoop, 500);
  }

  // -----------------------------------------------------------------
  // 3. Mobile Navigation Menu (Responsive & Touch-Friendly)
  // -----------------------------------------------------------------
  const mobileToggle = document.getElementById('mobile-toggle');
  const navLinks = document.getElementById('nav-links');

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      navLinks.classList.toggle('open');
      const icon = mobileToggle.querySelector('i');
      if (icon) {
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-xmark');
      }
    });

    // Close when clicking any nav link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        const icon = mobileToggle.querySelector('i');
        if (icon) {
          icon.classList.add('fa-bars');
          icon.classList.remove('fa-xmark');
        }
      });
    });

    // Close when clicking outside menu
    document.addEventListener('click', (e) => {
      if (navLinks.classList.contains('open') && !navLinks.contains(e.target) && !mobileToggle.contains(e.target)) {
        navLinks.classList.remove('open');
        const icon = mobileToggle.querySelector('i');
        if (icon) {
          icon.classList.add('fa-bars');
          icon.classList.remove('fa-xmark');
        }
      }
    });
  }

  // -----------------------------------------------------------------
  // 4. Active Navigation Link on Scroll
  // -----------------------------------------------------------------
  const sections = document.querySelectorAll('section[id]');
  const navItems = document.querySelectorAll('.nav-link');

  function highlightNavOnScroll() {
    const scrollY = window.pageYOffset + 120;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop;
      const sectionId = current.getAttribute('id');

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navItems.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', highlightNavOnScroll, { passive: true });

  // -----------------------------------------------------------------
  // 5. Back to Top Button
  // -----------------------------------------------------------------
  const backToTopBtn = document.getElementById('back-to-top');
  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 400) {
        backToTopBtn.classList.add('show');
      } else {
        backToTopBtn.classList.remove('show');
      }
    }, { passive: true });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // -----------------------------------------------------------------
  // 6. Project Filter Functionality (Curated & Live Feeds)
  // -----------------------------------------------------------------
  function filterProjects(filterValue) {
    const allCards = document.querySelectorAll('.project-card');

    allCards.forEach(card => {
      const category = card.getAttribute('data-category') || '';
      const isLiveOnly = card.classList.contains('live-github-card');

      let shouldShow = false;

      if (filterValue === 'live') {
        shouldShow = isLiveOnly;
      } else if (filterValue === 'all') {
        shouldShow = true;
      } else {
        shouldShow = !isLiveOnly && category.includes(filterValue);
      }

      if (shouldShow) {
        card.style.display = 'flex';
        requestAnimationFrame(() => {
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        });
      } else {
        card.style.opacity = '0';
        card.style.transform = 'translateY(12px)';
        setTimeout(() => {
          if (card.style.opacity === '0') {
            card.style.display = 'none';
          }
        }, 180);
      }
    });
  }

  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filterValue = btn.getAttribute('data-filter');
      filterProjects(filterValue);
    });
  });

  // -----------------------------------------------------------------
  // 7. Contact Form Simulation / Mailto Handler
  // -----------------------------------------------------------------
  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const subject = document.getElementById('subject').value.trim() || 'Portfolio Contact Inquiry';
      const message = document.getElementById('message').value.trim();

      const mailtoUrl = `mailto:archanathanuwana@gmail.com?subject=${encodeURIComponent(subject + ' - ' + name)}&body=${encodeURIComponent(message + '\n\nFrom: ' + name + ' (' + email + ')')}`;
      
      window.location.href = mailtoUrl;

      if (formStatus) {
        formStatus.textContent = 'Opening your email client... Thank you!';
        formStatus.style.color = 'var(--accent-cyan)';
        formStatus.style.display = 'block';
        setTimeout(() => {
          formStatus.style.display = 'none';
          contactForm.reset();
        }, 5000);
      }
    });
  }

  // -----------------------------------------------------------------
  // 8. Copy Email to Clipboard Helper
  // -----------------------------------------------------------------
  const copyEmailBtn = document.getElementById('copy-email-btn');
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      navigator.clipboard.writeText('archanathanuwana@gmail.com').then(() => {
        const originalText = copyEmailBtn.innerHTML;
        copyEmailBtn.innerHTML = '<i class="fa-solid fa-check"></i> Copied!';
        setTimeout(() => {
          copyEmailBtn.innerHTML = originalText;
        }, 2000);
      });
    });
  }

  // -----------------------------------------------------------------
  // 9. AUTOMATIC GITHUB API SYNC ENGINE
  // Real-time repository updates, live stars, and dynamic feed
  // -----------------------------------------------------------------
  const GITHUB_USERNAME = 'archanadev-05';
  const CACHE_KEY = 'archana_github_cache_v2';
  const CACHE_TTL = 10 * 60 * 1000; // 10 minutes cache to avoid rate limiting

  const languageColors = {
    'Python': '#3572A5',
    'C': '#555555',
    'C++': '#f34b7d',
    'Java': '#b07219',
    'Dart': '#00B4AB',
    'Go': '#00ADD8',
    'JavaScript': '#f1e05a',
    'TypeScript': '#3178c6',
    'HTML': '#e34c26',
    'CSS': '#563d7c',
    'Jupyter Notebook': '#DA5B0B'
  };

  function formatTimeAgo(dateString) {
    if (!dateString) return 'recently';
    const now = new Date();
    const updated = new Date(dateString);
    const diffSeconds = Math.floor((now - updated) / 1000);

    if (diffSeconds < 60) return 'just now';
    const diffMinutes = Math.floor(diffSeconds / 60);
    if (diffMinutes < 60) return `${diffMinutes}m ago`;
    const diffHours = Math.floor(diffMinutes / 60);
    if (diffHours < 24) return `${diffHours}h ago`;
    const diffDays = Math.floor(diffHours / 24);
    if (diffDays < 30) return `${diffDays}d ago`;
    const diffMonths = Math.floor(diffDays / 30);
    if (diffMonths < 12) return `${diffMonths}mo ago`;
    return `${Math.floor(diffMonths / 12)}y ago`;
  }

  async function syncGitHubData() {
    const liveSyncText = document.getElementById('live-sync-text');
    const liveSyncTime = document.getElementById('live-sync-time');
    const statRepoCount = document.getElementById('stat-repo-count');
    const liveReposContainer = document.getElementById('live-repos-container');

    let repos = null;
    let user = null;

    // Check localStorage cache
    const cached = localStorage.getItem(CACHE_KEY);
    if (cached) {
      try {
        const parsed = JSON.parse(cached);
        if (Date.now() - parsed.timestamp < CACHE_TTL) {
          repos = parsed.repos;
          user = parsed.user;
        }
      } catch (e) {
        localStorage.removeItem(CACHE_KEY);
      }
    }

    // Fetch from GitHub API if no valid cache
    if (!repos || !user) {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}`),
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=pushed&per_page=30`)
        ]);

        if (userRes.ok && reposRes.ok) {
          user = await userRes.json();
          repos = await reposRes.json();

          // Save to cache
          localStorage.setItem(CACHE_KEY, JSON.stringify({
            user,
            repos,
            timestamp: Date.now()
          }));
        }
      } catch (err) {
        console.warn('GitHub API sync offline or rate limited. Using static fallback.', err);
      }
    }

    if (!repos) {
      if (liveSyncText) liveSyncText.textContent = 'Live GitHub Showcase Active';
      if (liveSyncTime) liveSyncTime.textContent = 'Curated build';
      return;
    }

    // 1. Update Live Public Repos Count in About section
    if (user && user.public_repos && statRepoCount) {
      statRepoCount.textContent = `${user.public_repos}`;
    }

    // 2. Update Status Bar
    if (liveSyncText) liveSyncText.textContent = `Live Sync Active (${repos.length} repos found)`;
    if (liveSyncTime) liveSyncTime.textContent = `Auto-updates on commit`;

    // 3. Enrich existing static cards with live stars and updated date
    const repoMap = new Map();
    repos.forEach(r => repoMap.set(r.name.toLowerCase(), r));

    document.querySelectorAll('.project-card[data-repo]').forEach(card => {
      const repoName = (card.getAttribute('data-repo') || '').toLowerCase();
      const liveData = repoMap.get(repoName);

      if (liveData) {
        // Add or update stars count badge in project links
        const linksDiv = card.querySelector('.project-links');
        if (linksDiv && !card.querySelector('.live-card-badge')) {
          const starsCount = liveData.stargazers_count || 0;
          const updatedTime = formatTimeAgo(liveData.pushed_at);

          const badge = document.createElement('span');
          badge.className = 'live-card-badge';
          badge.innerHTML = `<i class="fa-solid fa-star" style="color: #eab308;"></i> ${starsCount} • ${updatedTime}`;
          linksDiv.prepend(badge);
        }
      }
    });

    // 4. Render Live GitHub Feed cards into container
    if (liveReposContainer) {
      liveReposContainer.innerHTML = '';

      // Set of repos already displayed in the curated section
      const curatedRepos = new Set([
        'personal-ai-assistant',
        'database-copilot-agent',
        'adaptive-rag',
        'whatsapp-mcp-server',
        'disaster-relief-management-c',
        'smart-shoe-dryer',
        'money_management',
        'ames-housing-data-preprocessing'
      ]);

      repos.forEach(repo => {
        // Skip profile README repo
        if (repo.name === GITHUB_USERNAME) return;

        const lang = repo.language || 'Code';
        const langColor = languageColors[lang] || '#38bdf8';
        const isCurated = curatedRepos.has(repo.name.toLowerCase());
        const stars = repo.stargazers_count || 0;
        const forks = repo.forks_count || 0;
        const updatedTime = formatTimeAgo(repo.pushed_at);
        const desc = repo.description || 'Public GitHub repository by Archana Thanuwana.';

        const card = document.createElement('div');
        card.className = 'project-card live-github-card';
        card.setAttribute('data-category', 'live all');
        card.style.display = 'none'; // Initially hidden until "Live" or "All" is active

        card.innerHTML = `
          <div>
            <div class="project-top">
              <i class="fa-solid fa-code-branch project-folder-icon"></i>
              <div class="project-links">
                <span class="live-card-badge">
                  <i class="fa-solid fa-arrows-rotate"></i> Live
                </span>
                <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer" class="project-link" title="View Source on GitHub">
                  <i class="fa-brands fa-github"></i>
                </a>
              </div>
            </div>
            <h3 class="project-title">
              <a href="${repo.html_url}" target="_blank">${repo.name}</a>
            </h3>
            <p class="project-desc">${desc}</p>
          </div>
          <div>
            <div class="repo-meta-bar">
              <span class="repo-meta-item">
                <span class="lang-dot" style="background-color: ${langColor};"></span>
                <span>${lang}</span>
              </span>
              <span class="repo-meta-item">
                <i class="fa-regular fa-star"></i> ${stars}
              </span>
              <span class="repo-meta-item">
                <i class="fa-solid fa-code-fork"></i> ${forks}
              </span>
              <span class="repo-meta-item" style="margin-left: auto;">
                ${updatedTime}
              </span>
            </div>
          </div>
        `;

        liveReposContainer.appendChild(card);
      });
    }
  }

  // Run GitHub sync asynchronously without blocking rendering
  setTimeout(syncGitHubData, 300);
});
