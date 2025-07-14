# Figma Native Exporter

一个用于从 Figma 设计文件导出结构化数据的 Node.js 工具，支持将 Figma 设计转换为各种格式的页面代码。

## 🚀 功能特性

- 📊 **Figma API 集成** - 通过 Figma API 获取完整的设计文件数据
- 🔧 **TypeScript 支持** - 完整的类型定义和类型安全
- 🌍 **环境变量配置** - 安全的 API 密钥管理
- 📝 **结构化输出** - 将设计文档转换为 JSON 格式
- 🎨 **设计系统提取** - 自动提取颜色、字体、组件等设计规范

## 📋 前置要求

- Node.js (版本 16 或更高)
- npm 或 yarn
- Figma Personal Access Token
- Figma 文件 ID

## 🛠️ 安装

1. 克隆项目
```bash
git clone <your-repo-url>
cd figma-native-exporter
```

2. 安装依赖
```bash
npm install
```

3. 配置环境变量
在 `src` 目录下创建 `.env` 文件：
```env
FIGMA_TOKEN=your_figma_personal_access_token
FIGMA_FILE_ID=your_figma_file_id
```

## 🔑 获取 Figma Token

1. 登录 [Figma](https://www.figma.com)
2. 进入 **Settings** → **Account** → **Personal access tokens**
3. 点击 **Create new token**
4. 复制生成的 token

## 📄 获取 Figma 文件 ID

从 Figma 文件 URL 中获取文件 ID：
```
https://www.figma.com/file/XXXXXXXXXXXXXXX/File-Name
                    ↑
                文件 ID
```

## 🚀 使用方法

### 基本使用

运行导出器：
```bash
npx ts-node src/index.ts
```

### 输出示例

程序会输出 Figma 设计文档的完整 JSON 结构：

```json
{
  "id": "0:0",
  "name": "Document",
  "type": "DOCUMENT",
  "children": [
    {
      "id": "1:2",
      "name": "Page 1",
      "type": "CANVAS",
      "children": [
        {
          "id": "2:3",
          "name": "Frame",
          "type": "FRAME",
          "absoluteBoundingBox": {
            "x": 0,
            "y": 0,
            "width": 375,
            "height": 812
          }
        }
      ]
    }
  ]
}
```

## 📁 项目结构

```
figma-native-exporter/
├── src/
│   ├── index.ts          # 主入口文件
│   ├── figma-api.ts      # Figma API 集成
│   ├── utils.ts          # 工具函数
│   └── .env              # 环境变量配置
├── package.json          # 项目配置
├── tsconfig.json         # TypeScript 配置
└── README.md            # 项目文档
```

## 🔧 开发

### 脚本命令

```bash
# 运行项目
npx ts-node src/index.ts

# 类型检查
npx tsc --noEmit
```

### 扩展功能

你可以基于这个基础框架扩展以下功能：

- **HTML/CSS 生成器** - 将设计转换为静态网页
- **React 组件生成器** - 生成 React 组件代码
- **Vue 组件生成器** - 生成 Vue 组件代码
- **移动端代码生成** - 生成 React Native 或其他移动端代码
- **设计系统导出** - 提取颜色、字体、间距等设计规范

## 📦 依赖包

- `node-fetch` - HTTP 请求库
- `dotenv` - 环境变量管理
- `typescript` - TypeScript 支持
- `ts-node` - TypeScript 运行时

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

ISC License

## 🔗 相关链接

- [Figma API 文档](https://www.figma.com/developers/api)
- [Figma 开发者资源](https://www.figma.com/developers)
- [Node.js 官网](https://nodejs.org/)
- [TypeScript 官网](https://www.typescriptlang.org/) 