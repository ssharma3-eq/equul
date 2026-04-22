# Deployment to GitHub Pages

## Configuration Complete ✅

Your Equuleus Technologies website is now configured for GitHub Pages deployment!

## Next Steps:

### 1. **Push to GitHub Repository**

If you haven't already, create a GitHub repository and push your code:

```bash
git init
git add .
git commit -m "Initial commit: Equuleus Technologies website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your GitHub details.

### 2. **Configure GitHub Pages Settings**

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Build and deployment":
   - **Source**: Select "GitHub Actions"
   - The workflow will automatically deploy on every push to `main`

### 3. **Access Your Site**

Your website will be available at:
- `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

*Or if it's a user/organization repo named `USERNAME.github.io`:*
- `https://YOUR_USERNAME.github.io/`

### What Happens Automatically:

✅ Every push to `main` branch triggers the deployment workflow  
✅ Builds the Next.js site as static HTML  
✅ Deploys to GitHub Pages  
✅ Takes ~1-2 minutes to complete  

### Troubleshooting:

**Workflow fails to run?**
- Check Actions tab in your repository
- Ensure GitHub Pages is set to deploy from "GitHub Actions"

**Site shows 404 errors?**
- GitHub Actions workflow should auto-deploy
- Check repository Settings → Pages to verify deployment

**Images not loading?**
- All images are in `/public` folder and will be included in the build

---

## Local Testing (Optional):

To test the static build locally before pushing:

```bash
npm run build
npx serve out
```

Visit `http://localhost:3000` to preview your static site.

---

Need help? Check [Next.js Static Export](https://nextjs.org/docs/pages/building-your-application/deploying/static-exports) documentation.
