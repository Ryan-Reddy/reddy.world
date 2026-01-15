# GitHub Actions & CI/CD Setup

## Workflows

### 1. **test.yml** - Continuous Integration
Runs on every push and PR to any branch:
- ✅ Install dependencies
- ✅ Run tests (`npm test`)
- ✅ Validate build (`npm run build`)

### 2. **firebase-hosting-merge.yml** - Production Deployment
Triggers on push to `master` branch:
- ✅ Run tests
- ✅ Build project
- 🚀 Deploy to Firebase Hosting (live channel)

### 3. **firebase-hosting-pull-request.yml** - Preview Deployments
Triggers on pull requests:
- ✅ Run tests
- ✅ Build project
- 🔍 Deploy preview to Firebase Hosting (temporary URL)

## Setup Requirements

### GitHub Secrets
Add this secret to your GitHub repository settings:

- **`FIREBASE_SERVICE_ACCOUNT_REDDY_WORLD`**: Firebase service account JSON
  
  To create this secret:
  1. Go to [Firebase Console](https://console.firebase.google.com/)
  2. Select your project
  3. Go to Project Settings → Service Accounts
  4. Generate new private key (downloads JSON file)
  5. Copy JSON content to GitHub secret

### Local Git Hooks (Husky)

Git hooks automatically run tests before commits/pushes:

```bash
# First time setup
npm install
npm run prepare

# Hooks are now active!
```

**Hooks configured**:
- `pre-commit`: Runs tests before committing
- `pre-push`: Runs build + tests before pushing

## Manual Deployment

If you need to deploy manually:

```bash
npm run build
firebase deploy --only hosting
```

## Project ID

Firebase Project ID: `getreddyworld` (configured in workflows)
