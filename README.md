# Fetch remote changes
git fetch origin

# Merge remote changes into your local branch
git merge origin/main

# Resolve any merge conflicts (if necessary) using your code editor

# Stage resolved files (if conflicts were resolved)
git add .

# Commit the merge
git commit -m "Merged remote changes into local main branch"

# Push your changes to the remote repository
git push origin main
