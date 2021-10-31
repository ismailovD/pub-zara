
# build
npm run build

LOGSTRING=$(git log)
COMMIT=$(echo $LOGSTRING | awk '{print $2}')

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'
 

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:ismailovd/pub-zara.git master:gh-pages

cd ..