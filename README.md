Here’s a detailed and developer-friendly `README.md` section that documents exactly how to **clone and launch a new markdown-driven 11ty site on Vercel**, including image naming conventions for smooth GPT-assisted generation:

---

```markdown
# 🚀 TabStax Markdown Site Template

This project is a lightweight **11ty (Eleventy)** static site generator setup powered by Markdown files, designed to be deployed instantly via **Vercel**.

Perfect for launching focused, content-first landing pages or documentation-style sites with minimal effort.

---

## 🧱 Project Structure

- `content/` – All your Markdown content and static images (logo, screenshots)
- `_includes/` – Layout templates (like `base.njk`)
- `.eleventy.js` – Eleventy config (handles image passthrough + folder structure)
- `package.json` – Run scripts and dependencies

---

## ✅ How to Clone & Launch a New Site

1. **Clone this template**

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
cd YOUR_REPO_NAME
```

2. **Create Your Markdown Files**

Inside the `content/` folder, create:

- `index.md` – This becomes your homepage
- Any other `.md` files for subpages

Each file uses frontmatter to define its layout:

```markdown
---
title: TabStax
layout: base
---
```

3. **Generate and Upload Images**

Use ChatGPT or your preferred image tool to generate assets:

- Logos:  
  - `logosmall.png` (for favicons or nav)  
  - `logomed.png` (default site logo)  
  - `logolarge.png` (hero or big display)

- Screenshots:  
  - `screenshot.png`  
  - `screenshot1.png`, `screenshot2.png` (optional extras)

**Save these in the `content/` folder** – they’ll be copied to the root of your deployed site.

4. **Push to GitHub**

```bash
git add .
git commit -m "Initial site setup"
git push origin main
```

5. **Deploy via Vercel**

- Go to [vercel.com](https://vercel.com)
- Click **"Add New Project"**
- Import your GitHub repo
- Under **Settings → Framework**, set:

```
Framework Preset:      Eleventy
Build Command:         npm run build
Output Directory:      _site
Install Command:       npm install
```

Click **Deploy**. Your site will be live in seconds.

---

## ✨ Customizations

- Update the `index.md` value prop and layout
- Add new `.md` pages (they’ll become standalone URLs)
- Extend layouts in `_includes/`

---

## 🛠 Dev Scripts

```bash
npm install       # One-time setup
npm run dev       # Local preview
npm run build     # Generate site in _site/
```

---

## 📦 Eleventy Config Notes

In `.eleventy.js`, we handle passthrough for your image assets:

```js
eleventyConfig.addPassthroughCopy({ "content/*.png": "/" });
```

This means `/content/logosmall.png` becomes available at `/logosmall.png` in production.

---

## 🧠 Why This Setup?

This template is built for:

- **Speed**: Launch markdown-driven sites in under 10 mins
- **Clarity**: Clean image naming for GPT workflows
- **Portability**: Works across browsers and devices instantly
- **Neurodiverse & Busy Builders**: Minimal complexity, maximum output

---

```

Want me to generate the `base.njk` layout next? Or prep this README for direct copy into your repo?
