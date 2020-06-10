# ---- Base Node ----
FROM node:carbon-alpine AS base
# 创建 app 目录
WORKDIR /app

# ---- Dependencies ----
FROM base AS dependencies
# 使用通配符复制 package.json 与 package-lock.json
COPY package*.json /app/
# 安装在‘devDependencies’中包含的依赖
RUN npm install

# ---- Copy Files/Build ----
FROM dependencies AS build
WORKDIR /app
COPY ./* /app/
# 如需对 react/vue/angular 打包，生成静态文件，使用：
# RUN npm run build

# --- Release with Alpine ----
FROM node:carbon-alpine AS release
# 创建 app 目录
WORKDIR /app
# 可选命令：
# RUN npm -g install serve
COPY --from=dependencies /app/package.json ./
# 安装 app 依赖
RUN npm install --only=production
COPY --from=build /app ./
#CMD ["serve", "-s", "dist", "-p", "8080"]
CMD ["node", "app.js"]
