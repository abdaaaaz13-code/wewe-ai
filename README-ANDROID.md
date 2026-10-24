# WeWe AI Android APK build

This folder adds a simple native Android WebView wrapper around the existing `index.html`, `style.css`, and `app.js` files in the repository root.

## Add these files to your GitHub repository
Upload the contents of this ZIP into the repository, preserving the folder structure. Do not delete your existing files.

## Important: copy web files into Android assets
Before building, copy the current web UI into:
- `android/app/src/main/assets/index.html`
- `android/app/src/main/assets/style.css`
- `android/app/src/main/assets/app.js`

The workflow below does this automatically from the root files before building.

## Build APK
The workflow `.github/workflows/android-apk.yml` runs when files are pushed to `main` or manually via Actions. It builds a debug APK for testing and uploads it as a GitHub Actions artifact named `WeWe-AI-debug-APK`.

To download it:
1. Open the repository on GitHub.
2. Tap **Actions**.
3. Open the latest **Build WeWe AI Android APK** run.
4. Wait until it is green/successful.
5. Scroll to **Artifacts** and download `WeWe-AI-debug-APK`.
6. Extract the downloaded ZIP and install the APK on your Android phone.

This is a debug/testing APK, not a Play Store release. It contains the current demo UI only; AI backend/model integration is not included yet.
