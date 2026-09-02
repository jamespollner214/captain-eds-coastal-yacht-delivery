# Captain Ed's Coastal Yacht Delivery

This is a standalone static website built with plain HTML, CSS, and JavaScript. It has no ChatGPT-specific dependencies, no framework, and no required paid service. It is ready to publish through GitHub Pages.

The visual theme uses a Miami-inspired palette of Atlantic blue, turquoise, aqua, flamingo pink, and sunset orange.

## Open the project in VS Code

After extracting the ZIP into `C:\Projects`, run:

```powershell
Set-Location "C:\Projects\Captain-Eds-Coastal-Yacht-Delivery"
code .
```

## Preview the website locally

From the same folder, run:

```powershell
py -m http.server 5500
```

Then open this address in a browser:

```text
http://localhost:5500
```

Press `Ctrl+C` in PowerShell when you want to stop the local server.

## Files

- `index.html` contains the page content and structure.
- `styles.css` controls the appearance and responsive layout.
- `script.js` controls the mobile menu, header, current year, and draft form behavior.
- `assets/miami-yacht-delivery.jpg` is the optimized main website image.
- `assets/favicon.svg` is the small browser-tab icon.
- `PUBLISHING.md` contains the first-time GitHub Pages instructions.
- `publish-update.ps1` publishes later saved changes through Git.
- `.nojekyll` tells GitHub Pages to serve the site files directly.

## Before publishing

1. Replace the draft biography with Captain Ed's approved biography.
2. Add only licenses, credentials, insurance details, and experience that can be verified.
3. Add the correct business phone number and email address.
4. Connect the request form to an email or form-processing service. It intentionally does not transmit data in this draft.
5. Add a privacy notice before collecting customer information.
6. Confirm the final business name and spelling everywhere.
7. Replace or approve the current yacht image before commercial use.

## Independent Git hosting

Follow `PUBLISHING.md` to publish the site through GitHub Pages. After the initial setup, use `publish-update.ps1` whenever you want to publish saved changes. No ChatGPT website service is required.
