# deploy.sh
#!/usr/bin/env sh

# Use `chmod +x deploy.sh` to allow executing deploy.sh
# abort on errors
set -e

# build
echo Building. This may take a minute...
npm run deploy-build

# copy additional files into the build output directory
echo Copying additional files...
cp src/404.html dist

# navigate into the build output directory
cd dist

# Creating new git repository for deploy
now=$(date +"%d-%m-%Y %H:%M")
echo Deploying..
rm -rf .git
git init
git add -A
git commit -m "Deploy ${now}"

# Pushing to gh-pages
echo Pushing to GitHub Pages..
git push -f https://github.com/danil-kuk/UrFU-Projects-Workshop-2019.git master:gh-pages

# Removing output build folder and cache
echo Removing build folder
cd -
rm -rf dist
rm -rf .cache