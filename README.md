# Khaled Mahmud Sujon — Academic Portfolio

A responsive static academic portfolio for Khaled Mahmud Sujon, covering research, education, publications, teaching, awards, conferences and contact information.

## Preview locally

Open `index.html` directly, or run a local server:

```powershell
python -m http.server 8080
```

Then visit `http://localhost:8080`.

## Publish on GitHub Pages

### Option 1: GitHub web upload

1. Create a public GitHub repository.
2. Upload all files and folders from this project, preserving the `.github` folder.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, select **GitHub Actions**.
5. Push one commit to the repository's `main` branch, or run the **Deploy portfolio to GitHub Pages** workflow manually.
6. Your portfolio will be available at `https://USERNAME.github.io/REPOSITORY/`.

### Option 2: Git commands

Run these commands from the project folder:

```powershell
git init
git add .
git commit -m "Create academic portfolio"
git branch -M main
git remote add origin https://github.com/USERNAME/REPOSITORY.git
git push -u origin main
```

## Embed in Google Sites

GitHub Pages cannot be embedded as editable content inside Google Sites unless Google Sites permits custom embedding. For reliable use:

1. Publish this site with GitHub Pages.
2. In Google Sites, add **Embed → URL**.
3. Add the GitHub Pages URL and choose **Full page** if offered.

Alternatively, paste the contents of `index.html` into an **Embed → Embed code** block if the hosting environment permits custom HTML. External stylesheets and scripts may need to be uploaded or linked to accessible hosted URLs.
