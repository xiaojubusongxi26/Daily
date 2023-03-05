#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'daily.xiaojubusongxi26.love' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
git push -f git@github.com:xiaojubusongxi26/<xiaojubusongxi26>.github.io.git main

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:xiaojubusongxi26/Daily.git master:gh-pages

cd -