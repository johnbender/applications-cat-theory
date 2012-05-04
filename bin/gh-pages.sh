set -e

cp -R poster /tmp/
git checkout gh-pages
cp -Rf /tmp/poster/* .
mv poster.html index.html
git add .
git commit -m "update gh-pages"