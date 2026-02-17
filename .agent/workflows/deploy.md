---
description: How to deploy changes to GitHub/Vercel
---

# Deployment Workflow

Every time you and the AI finish making changes, follow these steps to deploy:

1. **Verify Changes locally**: Ensure the build passes and the UI looks correct.
2. **Commit and Push**:
   ```bash
   git add .
   git commit -m "Describe your changes"
   git push origin main
   ```
3. **Vercel Automatic Deployment**: Pushing to the `main` branch automatically triggers a deployment on Vercel.

// turbo
4. Run the following command to deploy immediately:
   ```bash
   git add . && git commit -m "Auto-deploy via workflow" && git push origin main
   ```
