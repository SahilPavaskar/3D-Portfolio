# 3D Portfolio

Static portfolio site prepared for GitHub Pages.

## Deploy to GitHub Pages

1. Sign in to GitHub CLI if needed:

   ```sh
   gh auth login -h github.com
   ```

2. Create the GitHub repo and push this folder:

   ```sh
   gh repo create 3D-Portfolio --public --source=. --remote=origin --push
   ```

3. Enable Pages from the `main` branch root:

   ```sh
   gh api --method POST repos/SahilPavaskar/3D-Portfolio/pages \
     -f source.branch=main \
     -f source.path=/
   ```

After GitHub finishes the Pages build, the site should be available at:

```txt
https://SahilPavaskar.github.io/3D-Portfolio/
```
