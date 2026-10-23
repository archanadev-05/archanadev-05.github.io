# 🚀 Archana Thanuwana - Developer Portfolio & CV

A modern, high-performance developer portfolio website designed for **GitHub Pages**, featuring dynamic typing, responsive dark/light mode, project filtering, and an integrated downloadable ATS-friendly CV (PDF & interactive HTML).

🌐 **Live URL Preview**: `https://archanadev-05.github.io`

---

## ✨ Features

- **⚡ Fast & Zero-Build**: Pure HTML5, CSS3, and modern Vanilla JavaScript — no complicated Node.js build steps needed. Deploys instantly to GitHub Pages.
- **📄 Downloadable CV & Online Resume**:
  - Direct 1-click download button for [`Archana_Thanuwana_CV.pdf`](assets/docs/Archana_Thanuwana_CV.pdf).
  - Web-based printable resume [`resume.html`](resume.html) with clean print styles (`@media print`).
- **🌓 Dark & Light Mode**: Smooth theme toggling with automatic user system preference detection and `localStorage` persistence.
- **🎯 Dynamic Interactivity**:
  - Hero role typing animation highlighting University of Moratuwa education and AI/ML focus.
  - Interactive project filtering by category (AI & Agents, Backend & APIs, Systems & IoT, Mobile).
  - One-click copy email button and contact form handler.
- **📱 Fully Responsive**: Pixel-perfect layout across mobile phones, tablets, laptops, and ultra-wide screens.
- **🔗 Profile Links**:
  - **GitHub**: [github.com/archanadev-05](https://github.com/archanadev-05)
  - **LinkedIn**: [linkedin.com/in/archana-thanuwana](https://www.linkedin.com/in/archana-thanuwana)
  - **Instagram**: [instagram.com/archana.thanu](https://www.instagram.com/archana.thanu/)
  - **Email**: `archanathanuwana@gmail.com`

---

## 📂 Project Structure

```
my_portofolio/
├── index.html                  # Main portfolio landing page
├── resume.html                 # Dedicated printable / web view CV
├── README.md                   # Setup and deployment documentation
├── css/
│   └── style.css               # Modern CSS with custom properties & responsive design
├── js/
│   └── main.js                 # Theme switcher, filters, typing animation, navigation
└── assets/
    ├── docs/
    │   └── Archana_Thanuwana_CV.pdf   # Generated high-resolution downloadable PDF CV
    └── images/
        ├── profile.jpg         # Profile picture
        └── cv_preview.png      # Thumbnail preview of the CV
```

---

## 🚀 How to Publish to GitHub Pages

### Option 1: As your Main User Site (`archanadev-05.github.io`) — **Recommended**

1. Create a new repository on your GitHub named **`archanadev-05.github.io`**:
   👉 [Create Repository on GitHub](https://github.com/new)
2. In your terminal inside this folder, run:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Archana Thanuwana Portfolio & CV"
   git branch -M main
   git remote add origin https://github.com/archanadev-05/archanadev-05.github.io.git
   git push -u origin main
   ```
3. GitHub Pages will automatically detect the repo and publish it to:
   👉 **`https://archanadev-05.github.io`** within 1–2 minutes!

---

### Option 2: As a Project Site (e.g. `archanadev-05.github.io/portfolio`)

1. Create a repository named `portfolio` (or `my_portofolio`).
2. Push your files to `main`.
3. Go to **Settings** > **Pages** in the repository.
4. Under **Branch**, select `main` and `/ (root)`, then click **Save**.
5. Your site will be live at `https://archanadev-05.github.io/portfolio`.

---

## 🛠️ How to Update Your CV in the Future

1. Open `resume.html` and update any details (new projects, courses, or roles).
2. To update the downloadable PDF:
   - Open `resume.html` in Chrome / browser, click the **Print** button (or press `Cmd + P` / `Ctrl + P`), choose **Save as PDF**, and save it as `assets/docs/Archana_Thanuwana_CV.pdf`.
3. Commit and push the changes to GitHub.
