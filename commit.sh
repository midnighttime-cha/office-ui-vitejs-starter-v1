echo "====== Start git command ======"
git add .
echo "Step (1): git add all"
git commit -m "$1"
echo "Step (2): git commit $1"
git push -u origin master
echo "Step (3): git push origin master"
echo "====== End git command ======"