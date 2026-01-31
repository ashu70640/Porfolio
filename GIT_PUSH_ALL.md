# Push All Files to GitHub

If only README.md appears on GitHub, your other files were never committed. Follow these steps **in your project folder** (where `package.json` and `src/` are).

## Option A: You already have a git repo and remote

1. **Open terminal in project folder:**  
   `d:\Portfolio Website`

2. **Add all files:**
   ```bash
   git add .
   ```

3. **Commit:**
   ```bash
   git commit -m "Add full portfolio project"
   ```

4. **Push (use your branch name if different, e.g. main or master):**
   ```bash
   git push -u origin main
   ```
   If your branch is `master`:
   ```bash
   git push -u origin master
   ```

## Option B: Repo was created on GitHub with "Add a README" (only README exists)

Your GitHub repo has only README. You need to pull that first, then add your local files:

1. **Add remote if not already added:**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   ```
   (Replace YOUR_USERNAME and YOUR_REPO_NAME with your actual GitHub repo.)

2. **Pull and allow unrelated histories (so your local files + GitHub README merge):**
   ```bash
   git pull origin main --allow-unrelated-histories
   ```
   If it asks for a merge message, save and close the editor.  
   If your default branch is `master`, use:
   ```bash
   git pull origin master --allow-unrelated-histories
   ```

3. **Add all your files:**
   ```bash
   git add .
   ```

4. **Commit:**
   ```bash
   git commit -m "Add full portfolio project"
   ```

5. **Push:**
   ```bash
   git push -u origin main
   ```
   (Or `git push -u origin master` if that’s your branch.)

## Option C: No git repo yet in this folder

1. **Initialize repo:**
   ```bash
   git init
   ```

2. **Add remote (use your repo URL):**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   ```

3. **Pull if the GitHub repo already has a README:**
   ```bash
   git pull origin main --allow-unrelated-histories
   ```
   (Or `master` instead of `main` if that’s your branch.)

4. **Add all, commit, push:**
   ```bash
   git add .
   git commit -m "Add full portfolio project"
   git push -u origin main
   ```

After this, refresh your GitHub repo page — you should see `src/`, `public/`, `index.html`, `package.json`, etc.

You can delete this file (`GIT_PUSH_ALL.md`) after everything is pushed if you want.
