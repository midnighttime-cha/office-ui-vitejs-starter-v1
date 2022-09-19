echo "====== Start git command ======"
git add .
echo "git add all"
git commit -m "$1"
echo "git commit $1"
git push -u origin master
echo "git push origin master"
echo "====== End git command ======"