# Deployment Guide - Sayara Website

This guide will help you deploy your Sayara website to GitHub and set up a custom domain.

## Step 1: Upload to GitHub

### Option A: Using GitHub CLI (Recommended)

1. **Install GitHub CLI** (if not already installed):
   ```bash
   brew install gh  # macOS
   ```

2. **Login to GitHub**:
   ```bash
   gh auth login
   ```

3. **Create and push repository**:
   ```bash
   gh repo create Sayara-WPP --public --source=. --remote=origin --push
   ```

### Option B: Using Git Commands

1. **Initialize Git** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Sayara car insurance website"
   ```

2. **Create a new repository on GitHub**:
   - Go to https://github.com/new
   - Name it `Sayara-WPP` (or your preferred name)
   - Choose Public or Private
   - **DO NOT** initialize with README, .gitignore, or license
   - Click "Create repository"

3. **Connect and push to GitHub**:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/Sayara-WPP.git
   git branch -M main
   git push -u origin main
   ```

## Step 2: Deploy to GitHub Pages (Free Hosting)

1. **Go to your repository on GitHub**
2. **Click on "Settings"** (top menu)
3. **Scroll down to "Pages"** (left sidebar)
4. **Under "Source"**, select:
   - Branch: `main`
   - Folder: `/ (root)`
5. **Click "Save"**
6. Your site will be live at: `https://YOUR_USERNAME.github.io/Sayara-WPP/`

**Note**: It may take a few minutes for the site to be available.

## Step 3: Set Up Custom Domain

### Option A: Free Domain Options

1. **Freenom** (Free .tk, .ml, .ga domains):
   - Visit https://www.freenom.com
   - Search for your desired domain
   - Register (free for first year)

2. **GitHub Student Pack** (if you're a student):
   - Includes free domain from Namecheap

### Option B: Paid Domain (Recommended for Business)

Popular domain registrars:
- **Namecheap**: https://www.namecheap.com (~$10-15/year)
- **Google Domains**: https://domains.google (~$12/year)
- **Cloudflare**: https://www.cloudflare.com/products/registrar/ (~$8-10/year)

### Setting Up Custom Domain with GitHub Pages

1. **Purchase/Register your domain** (e.g., `sayara.com` or `sayara.sa`)

2. **Configure DNS** (varies by registrar):
   
   **For apex domain (sayara.com)**:
   - Add an `A` record:
     - Name: `@`
     - Value: `185.199.108.153`
   - Add three more `A` records:
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   
   **For www subdomain (www.sayara.com)**:
   - Add a `CNAME` record:
     - Name: `www`
     - Value: `YOUR_USERNAME.github.io`

3. **Configure GitHub Pages**:
   - Go to repository Settings → Pages
   - Under "Custom domain", enter your domain (e.g., `sayara.com`)
   - Check "Enforce HTTPS" (available after DNS propagates)

4. **Create CNAME file** (if using www or subdomain):
   ```bash
   echo "www.sayara.com" > CNAME
   git add CNAME
   git commit -m "Add custom domain"
   git push
   ```

5. **Wait for DNS propagation** (can take 24-48 hours, usually faster)

## Alternative: Deploy to Netlify (Easier Domain Setup)

Netlify offers easier domain setup and better performance:

1. **Sign up at Netlify**: https://www.netlify.com
2. **Connect your GitHub repository**:
   - Click "Add new site" → "Import an existing project"
   - Select GitHub and authorize
   - Choose your repository
3. **Deploy settings**:
   - Build command: (leave empty)
   - Publish directory: `/` (root)
   - Click "Deploy site"
4. **Add custom domain**:
   - Go to Site settings → Domain management
   - Click "Add custom domain"
   - Enter your domain
   - Follow DNS instructions (simpler than GitHub Pages)

## Alternative: Deploy to Vercel

1. **Sign up at Vercel**: https://vercel.com
2. **Import your GitHub repository**
3. **Deploy** (automatic)
4. **Add domain** in project settings

## Testing Your Deployment

1. **Check GitHub Pages URL**: `https://YOUR_USERNAME.github.io/Sayara-WPP/`
2. **Test all pages and features**
3. **Check mobile responsiveness**
4. **Verify form functionality**
5. **Test language switching**

## Important Notes

- **HTTPS**: Always enable HTTPS for production (automatic with GitHub Pages, Netlify, Vercel)
- **Update URLs**: Update any hardcoded URLs in `index.html` to match your domain
- **SEO**: Update `sitemap.xml` and `robots.txt` with your actual domain
- **Analytics**: Consider adding Google Analytics or similar
- **Form Backend**: The contact form currently doesn't have a backend. Consider:
  - Formspree (free tier)
  - Netlify Forms (if using Netlify)
  - EmailJS (free tier)

## Need Help?

- GitHub Pages Docs: https://docs.github.com/en/pages
- Netlify Docs: https://docs.netlify.com
- Vercel Docs: https://vercel.com/docs

