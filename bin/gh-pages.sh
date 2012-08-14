set -e

cp -R poster /tmp/
git checkout gh-pages
cp -Rf /tmp/poster/* .
mv poster.html index.html
cp paper/paper.pdf paper-`date +%Y-%m`.pdf
git add .
git commit -m "update gh-pages"
git checkout master
