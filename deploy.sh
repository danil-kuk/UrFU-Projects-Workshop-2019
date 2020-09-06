# deploy.sh
#!/usr/bin/env sh

# Use `chmod +x deploy.sh` to allow executing deploy.sh
# Abort on errors
set -e

# Build
echo Building. This may take a minute...
npm run build

# Navigate into the build output directory
cd build

# If you are deploying to a custom domain
# echo 'www.example.com' > CNAME

# Creating new git repository for deploy
now=$(date +"%d-%m-%Y %H:%M")
rm -rf .git
git init
git add -A
git commit -m "Deploy ${now}"

# Set GitHub UserName and Repo
repo="UrFU-Projects-Workshop-2019"
user="danil-kuk"

# Pushing to gh-pages
echo Pushing to GitHub Pages...
git push -f https://github.com/${user}/${repo}.git master:gh-pages

# Removing output build folder and cache
echo Removing build folder...
cd -
rm -rf build