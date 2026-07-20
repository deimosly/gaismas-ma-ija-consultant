# LightGuide installation guide

The app must be hosted on an HTTPS website before a phone can reliably install it and use its offline features. The easiest free route is GitHub Pages.

## Method A — GitHub Pages

1. Create or sign in to a GitHub account.
2. Create a new repository, for example `lightguide`.
3. Upload every file and folder from the LightGuide package. Keep the `icons` folder intact.
4. Open the repository's **Settings**.
5. Open **Pages**.
6. Under **Build and deployment**, choose **Deploy from a branch**.
7. Choose the `main` branch and the `/ (root)` folder, then save.
8. GitHub will display the public HTTPS address after deployment.
9. Open that address on your phone.

When changing the code later, upload the new files to the same repository. The service worker may keep the old version briefly; closing and reopening the installed app normally refreshes it.

## Method B — Netlify Drop

1. Open Netlify Drop on a computer.
2. Drag the whole unzipped LightGuide folder onto the page.
3. Netlify creates an HTTPS address.
4. Open that address on your phone and install it using the steps below.

Netlify is convenient for a quick deployment, while GitHub Pages is easier for maintaining versions over time.

## Install on Android

### Chrome

1. Open the hosted LightGuide address in Chrome.
2. Tap the app's **＋** install button when it appears, or open Chrome's three-dot menu.
3. Choose **Install app** or **Add to Home screen**.
4. Confirm installation.
5. Launch **LightGuide** from the home screen or app drawer.

### Samsung Internet

1. Open the hosted address.
2. Open the browser menu.
3. Choose **Add page to** → **Home screen**.
4. Confirm.

## Install on iPhone

1. Open the hosted LightGuide address in **Safari**.
2. Tap the **Share** button.
3. Scroll down and choose **Add to Home Screen**. If it is missing, use **Edit Actions** to add it.
4. Turn on **Open as Web App**.
5. Keep the name LightGuide and tap **Add**.
6. Launch it from the home screen.

Use Safari for the iPhone installation step. Opening the link inside another app's built-in browser may hide the home-screen option.

## First setup in the store

1. Open **Settings → Language** and choose EN, LV or RU.
2. Open **Catalogue** and remove the records whose names begin with `DEMO` after testing.
3. Add real lamps manually, or prepare a spreadsheet using `sample-products.csv`.
4. In CSV cells containing several rooms, styles or features, separate values with `|`, for example:
   - `bedroom|living_room`
   - `modern|minimal`
   - `main_light|dimmable|low_ceiling`
5. Import it through **Settings → Import CSV**.
6. Export a JSON catalogue backup after a major update.

## Updating stock during work

Open a product, tap **Edit**, and change its stock status to:

- `In stock`
- `Display only`
- `Order`
- `Unknown`

The consultation results immediately use the changed information.

## Offline behaviour

After the hosted app has been opened successfully at least once, its interface is cached for offline use. Product edits are stored on the phone itself. External product images may not appear offline unless the phone has already cached them.

## Moving to another phone

1. On the old phone, open **Settings → Export catalogue backup**.
2. Transfer the downloaded JSON file to the new phone.
3. Install LightGuide on the new phone.
4. Use **Settings → Import JSON backup**.

Consultation history has a separate export button under **History**.
