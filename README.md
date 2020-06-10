# lulu nunjuck

version 1.0.0

## reload
```
git fetch --all && git reset --hard origin/master
npm i
NODE_ENV=test node app.js
```

## 使用docker部署
### 使用 docker-compose
```
# 构建
docker-compose build
# 启动
docker-compose up -d
# 关闭
docker-compose down
```
