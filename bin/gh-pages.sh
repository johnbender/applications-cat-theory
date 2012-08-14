set -e

cp -R poster /tmp/
cp paper/paper.pdf /tmp/paper.pdf
git checkout gh-pages
cp -Rf /tmp/poster/* .
mv poster.html index.html
cp /tmp/paper.pdf paper-`date +%Y-%m`.pdf
git add .
git commit -m "update gh-pages"
git checkout master