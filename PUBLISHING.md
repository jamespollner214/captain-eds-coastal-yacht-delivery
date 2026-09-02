# Publish with GitHub Pages

GitHub Pages can publish this plain HTML, CSS, and JavaScript site directly from a Git repository. No ChatGPT hosting or build service is involved.

## 1. Install Git if needed

Check whether Git is installed:

```powershell
git --version
```

If PowerShell says `git` is not recognized, install Git for Windows from:

```text
https://git-scm.com/download/win
```

Close and reopen PowerShell after installation.

## 2. Create the GitHub repository

1. Sign in at `https://github.com`.
2. Select **New repository**.
3. Name it `captain-eds-coastal-yacht-delivery`.
4. Set it to **Public**.
5. Do not add a README, `.gitignore`, or license because this project already has its own files.
6. Select **Create repository**.

## 3. Upload the local project with Git

Open PowerShell and run the following commands. Replace `YOUR_GITHUB_USERNAME` with your real GitHub username.

```powershell
Set-Location "C:\Projects\Captain-Eds-Coastal-Yacht-Delivery"

git init
git branch -M main
git add .
git commit -m "Publish Captain Ed's website"
git remote add origin "https://github.com/YOUR_GITHUB_USERNAME/captain-eds-coastal-yacht-delivery.git"
git push -u origin main
```

Git for Windows may open a browser and ask you to sign in to GitHub during the first push.

## 4. Turn on GitHub Pages

1. Open the repository on GitHub.
2. Select **Settings**.
3. Select **Pages** under **Code and automation**.
4. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
5. Select the `main` branch and the `/(root)` folder.
6. Select **Save**.

The website address will normally be:

```text
https://YOUR_GITHUB_USERNAME.github.io/captain-eds-coastal-yacht-delivery/
```

The first publication can take a few minutes. GitHub shows the final address on the repository's **Settings > Pages** screen.

## Publish later changes

After changing and saving the website in VS Code, run:

```powershell
Set-Location "C:\Projects\Captain-Eds-Coastal-Yacht-Delivery"
.\publish-update.ps1 -Message "Describe the website changes"
```

The script commits and pushes the changed files. GitHub Pages then republishes the website automatically.

## Important privacy note

The GitHub repository and published website will be public. Never place passwords, private documents, API keys, or other confidential information inside this project folder.
