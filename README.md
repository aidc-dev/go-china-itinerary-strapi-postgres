# Go China Itinerary Strapi 项目

这是一个基于 [Strapi](https://strapi.io/) 的中国旅游行程规划应用，配置为部署到 [Render](https://render.com) 平台。项目使用 [PostgreSQL 数据库](https://render.com/docs/databases) 存储结构化内容，使用 [持久化磁盘](https://render.com/docs/disks) 存储媒体库文件。

## 🚀 快速开始

### 环境要求

- Node.js >= 10.0.0
- npm >= 6.0.0 或 yarn
- PostgreSQL (生产环境) 或 SQLite (开发环境)

### 本地开发

1. **克隆项目**
   ```bash
   git clone <repository-url>
   cd go-china-itinerary-strapi-postgres
   ```

2. **安装依赖**
   ```bash
   # 使用 yarn (推荐)
   yarn install
   
   # 或使用 npm
   npm install
   ```

3. **配置环境变量**
   
   创建 `.env` 文件并配置以下变量：
   ```env
   # 开发环境配置
   NODE_ENV=development
   
   # JWT 密钥 (必需)
   JWT_SECRET=your-jwt-secret-here
   ADMIN_JWT_SECRET=your-admin-jwt-secret-here
   APP_KEYS=your-app-keys-here
   
   # 数据库配置 (可选，默认使用 SQLite)
   DATABASE_FILENAME=.tmp/data.db
   
   # 服务器配置 (可选)
   HOST=0.0.0.0
   PORT=1337
   ```

4. **启动开发服务器**
   ```bash
   # 开发模式启动
   yarn develop
   
   # 或使用 npm
   npm run develop
   ```

5. **访问应用**
   - 应用地址: http://localhost:1337
   - 管理后台: http://localhost:1337/admin

### 生产部署

#### 部署到 Render

1. **一键部署**
   
   Fork 本项目后，点击下方按钮进行部署：
   
   [![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy)

2. **手动部署**
   
   配置以下环境变量：
   ```env
   NODE_ENV=production
   NODE_VERSION=~16.13.0
   DATABASE_URL=postgresql://user:password@host:port/database
   JWT_SECRET=your-production-jwt-secret
   ADMIN_JWT_SECRET=your-production-admin-jwt-secret
   APP_KEYS=your-production-app-keys
   ```

#### 本地生产环境构建

```bash
# 构建项目
yarn build

# 启动生产服务器
yarn start
```

## 📝 可用脚本

- `yarn develop` - 启动开发服务器
- `yarn start` - 启动生产服务器
- `yarn build` - 构建项目
- `yarn strapi` - 运行 Strapi CLI 命令

## 📁 项目结构

```
go-china-itinerary-strapi-postgres/
├── config/          # 配置文件
├── src/
│   ├── admin/       # 管理后台自定义
│   ├── api/         # API 路由和控制器
│   ├── components/  # 可复用组件
│   └── extensions/  # 插件扩展
├── public/          # 静态资源
└── database/        # 数据库迁移文件
```

## 🔧 配置说明

### 数据库配置

- **开发环境**: 默认使用 SQLite 数据库
- **生产环境**: 使用 PostgreSQL 数据库，通过 `DATABASE_URL` 环境变量配置

### 内容类型

项目包含以下内容类型：

- **Article** - 文章内容
- **Category** - 分类管理
- **Plan** - 旅游计划

### 组件类型

- **基础组件**: 图片、字符串数组等
- **计划章节**: 介绍、行程、交通、住宿等
- **计划基础组件**: 活动、景点、餐厅等

## 🚨 故障排除

### 常见问题

1. **端口占用**
   ```bash
   # 查看端口使用情况
   lsof -i :1337
   
   # 或修改端口
   export PORT=3000
   yarn develop
   ```

2. **数据库连接问题**
   - 检查 `DATABASE_URL` 环境变量
   - 确保数据库服务正在运行
   - 检查数据库用户权限

3. **依赖安装问题**
   ```bash
   # 清理缓存
   yarn cache clean
   
   # 重新安装依赖
   rm -rf node_modules yarn.lock
   yarn install
   ```

4. **Regenerator Runtime 错误修复(不要提交这部分代码！)**
   
   如果遇到 `regenerator-runtime` 相关错误，请按以下步骤操作：
   
   **步骤 1: 安装依赖包**
   ```bash
   yarn add regenerator-runtime core-js
   
   # 或使用 npm
   npm install regenerator-runtime core-js
   ```
   
   **步骤 2: 创建 Babel 配置文件**
   
   在项目根目录创建 `babel.config.js` 文件：
   ```javascript
   module.exports = {
     presets: [
       // ... 其他预设
       "@strapi/babel-preset-app",
     ],
     plugins: [],
   };
   ```
   
   **步骤 3: 配置管理后台**
   
   在 `src/admin/` 目录下复制 `app.example.js` 为 `app.js`：
   ```bash
   cp src/admin/app.example.js src/admin/app.js
   ```
   
   然后在 `src/admin/app.js` 文件顶部添加以下导入：
   ```javascript
   import "regenerator-runtime/runtime";
   import "core-js/stable";
   ```

## 📚 更多信息

- [Strapi 文档](https://strapi.io/documentation)
- [Render 部署指南](https://render.com/docs/deploy-strapi)
- [PostgreSQL 配置](https://render.com/docs/databases)

## 📄 许可证

本项目使用 MIT 许可证。
