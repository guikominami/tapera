create branch
git switch -c feature/team

adicionar as alteraçoes
git add .

commit
git commit -m "feat: implement Team section"

atualizar a main e fazer o merge
git switch main
git pull origin main
git merge feature/team
git push origin main

criar uma nova feature a partir da main