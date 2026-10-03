# Household Budget — Imroze & Nooriah

Semi-monthly budget logger. Each person has a tab for income + expenses; a Combined tab totals both. Data syncs live between both phones/computers through Firebase (free tier). Hosted on GitHub Pages.

**Pay periods:** 1st–15th and 16th–end of month. Use ‹ Prev / Next › to move between them.

## Files
| File | Purpose |
|---|---|
| `index.html` | The app |
| `config.js` | Firebase keys, names, emails, categories |
| `supabase-setup.sql` | Supabase table + security (only your two emails) |
| `firestore.rules` | Firebase security (only if using Firebase instead) |
| `.nojekyll` | Tells GitHub Pages to serve files as-is |

## Backend
Fill in **either** `supabase` **or** `firebase` in `config.js`. Supabase is checked first.

## Firebase setup (alternative)

### 1. Create Firebase project (free)
1. Go to https://console.firebase.google.com → **Add project** → name it `household-budget` → Analytics off.

### 2. Turn on sign-in and database
1. **Build → Authentication → Get started → Email/Password → Enable**.
2. **Users tab → Add user** twice: one for Imroze, one for Nooriah (email + password).
3. **Build → Firestore Database → Create database** → Production mode → pick `us-east1`.
4. **Rules tab** → paste the contents of `firestore.rules` (replace the two example emails) → **Publish**.

### 3. Connect the app
1. **Project settings (gear) → General → Your apps → Web (`</>`)** → register app → copy the `firebaseConfig` values.
2. Paste them into `config.js`, and replace the two example emails with the real ones (must match step 2 exactly).

> The Firebase web config is not a secret — it's designed to be public. Your data is protected by the security rules + sign-in.

### 4. Deploy on GitHub Pages
1. Create a new repository on GitHub (e.g. `household-budget`). Private repos need GitHub Pro for Pages; public is fine since no data lives in the repo.
2. **Add file → Upload files** → drag in all 4 files → Commit.
3. **Settings → Pages → Source: Deploy from a branch → Branch: `main` / `(root)` → Save**.
4. After ~1 minute the app is live at `https://<your-username>.github.io/household-budget/`.

### 5. Allow your GitHub domain to sign in
Firebase → **Authentication → Settings → Authorized domains → Add domain** → `<your-username>.github.io`.

### 6. Share
Send the link to each other. On iPhone: Safari → Share → **Add to Home Screen** for an app-like icon.

## Notes
- Each person's section saves independently, so you can both log at the same time without overwriting each other.
- **Copy from previous period** fills income from the last pay period.
- **Export CSV** (Combined tab) downloads the current period for records or Excel.
- Without Firebase keys, the app runs in **Local only** mode (saved in that browser, not shared) — useful for a quick test.
- To change categories, edit the `categories` list in `config.js`.
