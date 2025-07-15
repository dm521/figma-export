# Figma → Builder.io → Cursor 设计到代码转换指南

## 🎯 目标
打通 Figma 设计 → Builder.io 代码生成 → Cursor 代码优化的完整工作流程

## 🚀 快速开始

### 1. 一键生成组件
```bash
# 从 Figma 导出并生成 React Native 组件
npm run design-to-code "首页-男-已关注"
```

### 2. 手动步骤流程

#### 步骤 1: Figma 导出
```bash
# 导出特定 Frame 的 JSON 数据
npm run extract-frame -- --name "首页-男-已关注"
```

#### 步骤 2: Builder.io 处理
```bash
# 启动 Builder.io 开发工具
npx @builder.io/dev-tools@latest
```

#### 步骤 3: Cursor 优化
- 在 Cursor 中打开生成的组件文件
- 使用 AI 助手优化代码
- 添加交互逻辑

## 📁 项目结构

```
figma-export/
├── output/                    # Figma 导出的 JSON 文件
│   └── 首页-男-已关注.json
├── src/
│   └── components/
│       └── HomeMale/         # 生成的组件目录
│           ├── index.ts      # 导出文件
│           ├── styles.ts     # 样式文件
│           └── HomeMaleScreen.tsx  # 主组件
├── scripts/
│   └── design-to-code.js     # 自动化脚本
└── DESIGN_TO_CODE_GUIDE.md   # 本指南
```

## 🔧 工具集成

### Figma API 集成
- 使用 Figma API 获取设计数据
- 支持组件、样式、布局信息导出
- 自动处理设计变量和约束

### Builder.io 集成
- AI 驱动的代码生成
- 支持多种框架（React Native、React、Vue 等）
- 智能组件识别和代码优化

### Cursor 集成
- AI 代码助手优化
- 智能代码补全
- 代码重构和调试

## 🎨 设计系统支持

### 颜色系统
```typescript
// 从 Figma 变量自动生成
export const colors = {
  primary: '#E4E4E7',
  secondary: '#BBBBBB',
  background: '#090B0F',
  // ...
};
```

### 字体系统
```typescript
// 从 Figma 文本样式生成
export const typography = {
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'PingFang SC',
  },
  // ...
};
```

### 间距系统
```typescript
// 从 Figma 布局约束生成
export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 20,
  xl: 24,
};
```

## 🤖 AI 优化建议

### Cursor 中的优化提示
```
// 在 Cursor 中使用以下提示优化代码：

1. "优化这个组件的性能"
2. "添加 TypeScript 类型定义"
3. "实现响应式设计"
4. "添加错误处理"
5. "优化组件结构"
6. "添加单元测试"
```

### Builder.io 优化
```
// 在 Builder.io 中使用以下功能：

1. 组件识别和分类
2. 样式提取和优化
3. 交互逻辑生成
4. 代码质量检查
5. 最佳实践建议
```

## 📋 最佳实践

### 1. 设计准备
- 使用 Figma 组件和样式系统
- 保持设计一致性
- 添加适当的约束和自动布局

### 2. 代码生成
- 使用语义化的组件名称
- 保持代码结构清晰
- 添加适当的注释

### 3. 代码优化
- 使用 TypeScript 类型定义
- 实现响应式设计
- 添加错误处理
- 优化性能

### 4. 测试和调试
- 编写单元测试
- 进行跨平台测试
- 性能监控

## 🔄 工作流程优化

### 自动化脚本
```bash
# 完整的设计到代码流程
npm run design-to-code "Frame名称"

# 批量处理多个组件
npm run design-to-code "组件1" && npm run design-to-code "组件2"
```

### 持续集成
```yaml
# .github/workflows/design-to-code.yml
name: Design to Code
on:
  push:
    paths:
      - 'output/*.json'
jobs:
  generate-code:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Generate Components
        run: npm run design-to-code
```

## 🐛 常见问题

### Q: Builder.io API 连接失败
A: 检查网络连接，尝试使用 VPN 或更换网络环境

### Q: 生成的代码质量不高
A: 在 Cursor 中使用 AI 助手进行代码优化和重构

### Q: 样式不匹配设计
A: 检查 Figma 中的设计约束和样式设置

### Q: 组件结构混乱
A: 使用自动化脚本重新生成，或在 Cursor 中重构

## 📚 相关资源

- [Figma API 文档](https://www.figma.com/developers/api)
- [Builder.io 文档](https://www.builder.io/c/docs)
- [Cursor 使用指南](https://cursor.sh/docs)
- [React Native 最佳实践](https://reactnative.dev/docs/performance)

## 🤝 贡献

欢迎提交 Issue 和 Pull Request 来改进这个工作流程！

---

**提示**: 这个工作流程可以显著提高设计到代码的转换效率，建议根据项目需求进行调整和优化。 