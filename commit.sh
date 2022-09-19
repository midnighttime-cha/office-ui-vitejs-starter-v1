echo $1
git add .
echo "Git add all"
git commit -m "$1"
echo "git commit $1"
# git push -u origin master