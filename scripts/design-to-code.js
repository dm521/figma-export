#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class DesignToCodePipeline {
  constructor() {
    this.figmaFile = process.env.FIGMA_FILE_ID;
    this.outputDir = 'output';
    this.componentsDir = 'src/components';
  }

  // 步骤 1: 从 Figma 导出设计
  async exportFromFigma(frameName) {
    console.log('🎨 从 Figma 导出设计...');
    
    try {
      // 使用现有的导出工具
      execSync(`npm run extract-frame -- --name "${frameName}"`, { stdio: 'inherit' });
      console.log('✅ Figma 导出完成');
    } catch (error) {
      console.error('❌ Figma 导出失败:', error.message);
      throw error;
    }
  }

  // 步骤 2: 使用 Builder.io 生成代码
  async generateWithBuilder(frameName) {
    console.log('🤖 使用 Builder.io 生成代码...');
    
    const jsonFile = path.join(this.outputDir, `${frameName}.json`);
    
    if (!fs.existsSync(jsonFile)) {
      throw new Error(`找不到 JSON 文件: ${jsonFile}`);
    }

    // 这里可以集成 Builder.io API 调用
    console.log('📝 准备调用 Builder.io API...');
    
    // 模拟 Builder.io 处理
    await this.simulateBuilderProcessing(jsonFile, frameName);
  }

  // 步骤 3: 在 Cursor 中优化代码
  async optimizeInCursor(componentName) {
    console.log('💻 在 Cursor 中优化代码...');
    
    const componentFile = path.join(this.componentsDir, componentName, `${componentName}Screen.tsx`);
    
    if (!fs.existsSync(componentFile)) {
      console.log('⚠️  组件文件不存在，跳过优化');
      return;
    }

    console.log('✅ 代码已准备好供 Cursor 优化');
    console.log(`📁 文件位置: ${componentFile}`);
  }

  // 步骤 4: 生成项目结构
  async generateProjectStructure(componentName) {
    console.log('📁 生成项目结构...');
    
    const componentDir = path.join(this.componentsDir, componentName);
    
    if (!fs.existsSync(componentDir)) {
      fs.mkdirSync(componentDir, { recursive: true });
    }

    // 创建 index 文件
    const indexContent = `export { default } from './${componentName}Screen';`;
    fs.writeFileSync(path.join(componentDir, 'index.ts'), indexContent);

    // 创建样式文件
    const stylesContent = `import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  // 样式将在这里定义
});
`;
    fs.writeFileSync(path.join(componentDir, 'styles.ts'), stylesContent);

    console.log('✅ 项目结构生成完成');
  }

  // 模拟 Builder.io 处理
  async simulateBuilderProcessing(jsonFile, frameName) {
    console.log('🔄 模拟 Builder.io 处理中...');
    
    // 读取 JSON 文件
    const designData = JSON.parse(fs.readFileSync(jsonFile, 'utf8'));
    
    // 生成组件名称
    const componentName = this.generateComponentName(frameName);
    
    // 生成 React Native 代码
    const componentCode = this.generateReactNativeCode(designData, componentName);
    
    // 保存生成的代码
    const componentDir = path.join(this.componentsDir, componentName);
    fs.mkdirSync(componentDir, { recursive: true });
    
    fs.writeFileSync(
      path.join(componentDir, `${componentName}Screen.tsx`),
      componentCode
    );
    
    console.log(`✅ 代码生成完成: ${componentName}Screen.tsx`);
  }

  // 生成组件名称
  generateComponentName(frameName) {
    return frameName
      .replace(/[^a-zA-Z0-9\u4e00-\u9fa5]/g, '')
      .replace(/^(\w)/, (match) => match.toUpperCase());
  }

  // 生成 React Native 代码
  generateReactNativeCode(designData, componentName) {
    return `import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';

const ${componentName}Screen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      
      {/* 基于 Figma 设计生成的组件 */}
      <View style={styles.content}>
        <Text style={styles.title}>${designData.name}</Text>
        <Text style={styles.description}>
          这是从 Figma 设计自动生成的 React Native 组件
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#090B0F',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#E4E4E7',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    color: '#BBBBBB',
    textAlign: 'center',
    lineHeight: 24,
  },
});

export default ${componentName}Screen;
`;
  }

  // 主流程
  async run(frameName) {
    try {
      console.log('🚀 开始设计到代码的转换流程...\n');
      
      // 步骤 1: 从 Figma 导出
      await this.exportFromFigma(frameName);
      
      // 步骤 2: 使用 Builder.io 生成代码
      await this.generateWithBuilder(frameName);
      
      // 步骤 3: 生成项目结构
      const componentName = this.generateComponentName(frameName);
      await this.generateProjectStructure(componentName);
      
      // 步骤 4: 准备 Cursor 优化
      await this.optimizeInCursor(componentName);
      
      console.log('\n🎉 流程完成！');
      console.log('\n📋 下一步操作：');
      console.log('1. 在 Cursor 中打开生成的组件文件');
      console.log('2. 使用 Cursor AI 助手优化代码');
      console.log('3. 添加交互逻辑和状态管理');
      console.log('4. 测试和调试组件');
      
    } catch (error) {
      console.error('\n❌ 流程执行失败:', error.message);
      process.exit(1);
    }
  }
}

// 命令行参数处理
const frameName = process.argv[2];

if (!frameName) {
  console.error('❌ 请提供 Frame 名称');
  console.log('使用方法: node scripts/design-to-code.js "Frame名称"');
  process.exit(1);
}

// 运行流程
const pipeline = new DesignToCodePipeline();
pipeline.run(frameName); 