# ---- Base Node ----
FROM node:carbon-alpine AS base
# 创建 app 目录
WORKDIR /app
ENV NODE_ENV="production"
COPY package.json /app/
# 安装在‘devDependencies’中包含的依赖

# RUN npm install
# # 安装 app 依赖
# # 使用通配符确保 package.json 与 package-lock.json 复制到需要的地方。（npm 版本 5 以上）

# 如果你需要构建生产环境下的代码，请使用：
RUN npm install --only=production

# 打包 app 源码
COPY ./ /app/

EXPOSE 80
CMD [ "node", "app.js" ]
