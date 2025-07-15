# React Native 页面生成器

基于 Figma 设计文件自动生成 React Native 页面代码。

## 📱 页面结构分析

根据 `首页-女.json` 设计文件，生成的页面包含以下组件：

### 🎨 设计元素
- **背景图片** - 全屏背景图片
- **状态栏** - 时间、信号、WiFi、电池图标
- **角色信息卡片** - 头像、姓名、认证标识、关注数、关注按钮
- **侧边栏菜单** - 右上角菜单按钮
- **简介卡片** - 情景介绍文本和装饰元素
- **输入框** - 消息输入框和功能按钮
- **底部导航栏** - 5个导航标签页
- **Home Indicator** - iOS 底部指示器

### 🎯 主要功能
- 响应式布局适配不同屏幕尺寸
- 渐变色彩效果（LinearGradient）
- 半透明背景和毛玻璃效果
- 交互式按钮和导航
- 滚动内容区域

## 🚀 安装和运行

### 1. 安装依赖
```bash
npm install
```

### 2. 安装 Expo CLI（如果还没有）
```bash
npm install -g @expo/cli
```

### 3. 启动开发服务器
```bash
npm start
# 或
expo start
```

### 4. 运行在设备上
- **iOS**: 按 `i` 键或扫描二维码
- **Android**: 按 `a` 键或扫描二维码
- **Web**: 按 `w` 键

## 📁 文件结构

```
├── App.tsx                    # 应用入口文件
├── src/
│   └── components/
│       └── HomePage.tsx       # 首页组件
├── output/
│   └── 首页-女.json          # Figma 设计文件
└── package.json              # 项目配置
```

## 🎨 设计规范

### 颜色系统
- **主背景色**: `#090B0F` (深色)
- **文字主色**: `#E4E4E7` (浅灰)
- **文字次色**: `#BBBBBB` (中灰)
- **渐变主色**: `#E6BA4A` → `#E2E64A` → `#81DB62`

### 字体规范
- **主标题**: 16px, Medium (500)
- **副标题**: 14px, Medium (500)
- **正文**: 14px, Regular (400)
- **小字**: 12px, Regular (400)

### 间距规范
- **页面边距**: 20px
- **组件间距**: 16px
- **内部间距**: 12px

## 🔧 自定义配置

### 修改颜色主题
在 `HomePage.tsx` 中修改 `styles` 对象：

```typescript
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#090B0F', // 修改主背景色
  },
  // ... 其他样式
});
```

### 替换图片资源
```typescript
// 替换背景图片
<Image
  source={{ uri: 'your-background-image-url' }}
  style={styles.backgroundImage}
/>

// 替换头像
<Image
  source={{ uri: 'your-avatar-url' }}
  style={styles.avatar}
/>
```

### 添加交互功能
```typescript
// 关注按钮点击事件
<TouchableOpacity 
  style={styles.followButton}
  onPress={() => {
    // 处理关注逻辑
    console.log('关注用户');
  }}
>
```

## 📱 兼容性

- **iOS**: 12.0+
- **Android**: API 21+
- **Expo**: 49.0+

## 🛠️ 开发工具

- **React Native**: 0.72.0
- **Expo**: 49.0.0
- **TypeScript**: 5.8.3
- **expo-linear-gradient**: 12.3.0

## 🔄 更新设计

当 Figma 设计文件更新时：

1. 导出新的 JSON 文件到 `output/` 目录
2. 分析设计变化
3. 更新对应的 React Native 组件
4. 测试页面效果

## 📝 注意事项

1. **图片资源**: 需要替换为实际的图片 URL
2. **字体**: 使用系统默认字体，如需自定义字体需要额外配置
3. **动画**: 当前版本为静态页面，如需动画效果需要添加 React Native Animated
4. **状态管理**: 如需复杂状态管理，建议集成 Redux 或 Zustand

## 🤝 贡献

欢迎提交 Issue 和 Pull Request 来改进这个项目！ 