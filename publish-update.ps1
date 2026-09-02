param(
    [string]$Message = "Update website"
)

$ErrorActionPreference = "Stop"
Set-Location $PSScriptRoot

if (-not (Get-Command git -ErrorAction SilentlyContinue)) {
    throw "Git is not installed or is not available in PowerShell. See PUBLISHING.md."
}

git rev-parse --is-inside-work-tree *> $null
if ($LASTEXITCODE -ne 0) {
    throw "This folder has not been connected to Git yet. Complete the first-time steps in PUBLISHING.md."
}

git remote get-url origin *> $null
if ($LASTEXITCODE -ne 0) {
    throw "The GitHub remote is missing. Complete the first-time steps in PUBLISHING.md."
}

git add --all
git diff --cached --quiet

if ($LASTEXITCODE -eq 0) {
    Write-Host "There are no saved website changes to publish." -ForegroundColor Yellow
    exit 0
}

git commit -m $Message
if ($LASTEXITCODE -ne 0) {
    throw "Git could not create the update commit."
}

git push
if ($LASTEXITCODE -ne 0) {
    throw "Git could not push the update to GitHub."
}

Write-Host "Website update pushed successfully. GitHub Pages will publish it shortly." -ForegroundColor Green
