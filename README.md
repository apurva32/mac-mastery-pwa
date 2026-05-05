# Mac Mastery PWA — Deployment Guide

## What's in this folder

```
mac-mastery-pwa/
├── index.html      ← The entire app (Reference + Learn + Quiz)
├── manifest.json   ← Makes it installable as a PWA
├── sw.js           ← Enables offline mode
├── icons/
│   ├── icon-192.png
│   └── icon-512.png
└── README.md       ← This file
```

---

## Step 1 — Create a GitHub Repo

1. Go to **github.com** → click the **+** in top right → **New repository**
2. Name it: `mac-mastery-pwa`
3. Set to **Public**
4. Check **"Add a README file"** (creates the repo immediately)
5. Click **Create repository**

---

## Step 2 — Upload Your Files

1. In your new repo, click **Add file → Upload files**
2. Drag ALL files from this folder into the upload area:
   - `index.html`
   - `manifest.json`
   - `sw.js`
3. For the icons folder: click **Upload files** again → drag `icons/icon-192.png` and `icons/icon-512.png`
   - GitHub will ask for a folder name — type `icons`
4. Click **Commit changes** after each upload

---

## Step 3 — Deploy on Vercel

1. Go to **vercel.com** → click **Add New → Project**
2. Click **Import** next to your `mac-mastery-pwa` repo
3. Leave all settings as default — Vercel detects it's a static site
4. Click **Deploy**
5. Wait ~30 seconds → you get a live URL like `mac-mastery-pwa.vercel.app`

---

## Step 4 — Install on Your iPhone

1. Open the Vercel URL in **Safari** on your iPhone
2. Tap the **Share** button (box with arrow)
3. Tap **Add to Home Screen**
4. Tap **Add**

The app now lives on your home screen like a native app — no App Store needed!

---

## Future Updates (the magic of this setup)

Whenever you want to update the app:
1. Edit `index.html` (Claude can help with this)
2. Upload the new file to GitHub (drag and drop, same as before)
3. Vercel auto-detects the change and redeploys in ~20 seconds

**Your live URL never changes.** Every push = instant update.

---

## Next Level: GitHub Desktop (optional)

Once you're comfortable, install **GitHub Desktop** (desktop.github.com) to sync files from your Mac instead of uploading through the browser. Claude can walk you through this when you're ready.
