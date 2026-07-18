# 🚀 Zai Education Hub - Deployment Guide

## Deploying to GitHub Pages

### Step 1: Create a GitHub Repository

1. Go to **[github.com/new](https://github.com/new)**
2. Repository name: **`zaieduhub.github.io`** (⚠️ MUST be exactly this!)
3. Description: "Zai Education Hub - Free Education for Sri Lanka 🇱🇰"
4. Visibility: **Public** (required for free GitHub Pages)
5. Do NOT initialize with README, .gitignore, or license (we have these already)

### Step 2: Push the Code

```bash
# Navigate to the project folder
cd zaieduhub/

# Add all files to git
git add .

# Commit
git commit -m "🎉 Initial launch of Zai Education Hub"

# Add your GitHub repository as remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/zaieduhub.github.io.git

# Push to GitHub
git push -u origin main
```

**Replace `YOUR_USERNAME` with your actual GitHub username.**

### Step 3: Enable GitHub Pages

1. Go to your repo on GitHub: `https://github.com/YOUR_USERNAME/zaieduhub.github.io`
2. Click **Settings** → **Pages** (left sidebar)
3. Under "Build and deployment":
   - Source: **GitHub Actions**
4. The website will automatically deploy using the workflow in `.github/workflows/deploy.yml`

### Step 4: 🎉 Your Website is LIVE!

Your site will be available at: **https://zaieduhub.github.io/**

GitHub Pages usually takes 1-2 minutes to deploy the first time.

---

## 📋 What's Included in the Deployment

| File | Purpose |
|------|---------|
| `index.html` | Main website (829 lines) |
| `css/style.css` | Complete design system & animations (2,355 lines) |
| `js/main.js` | All interactive features (849 lines) |
| `CNAME` | Custom domain configuration |
| `robots.txt` | Search engine crawling rules |
| `sitemap.xml` | Search engine indexing |
| `README.md` | Project documentation |
| `.gitignore` | Files to exclude from git |
| `.github/workflows/deploy.yml` | Auto-deploy to GitHub Pages |

---

## 🔧 After Deployment - Custom Domain (Optional)

If you want a custom domain like `zaieduhub.com` instead of `zaieduhub.github.io`:

1. Buy a domain from a registrar (Namecheap, GoDaddy, Google Domains)
2. Go to repo **Settings** → **Pages** → **Custom domain**
3. Enter your domain (e.g., `zaieduhub.com`)
4. Create DNS records at your registrar:
   - **A records** pointing to:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - Or **CNAME** pointing to `zaieduhub.github.io`

---

## 🔄 Updating Your Website

After the initial deploy, whenever you want to update:

```bash
# Make your changes to the files, then:
git add .
git commit -m "Describe your changes"
git push
```

The GitHub Actions workflow will automatically redeploy in ~1-2 minutes!

---

## ❤️ Made by Zai Creations

*"Free quality education for every Sri Lankan student"*

📧 ruzaith2007@gmail.com | 💬 +94 75 076 1016 | ✈️ @zaieditsofficial
