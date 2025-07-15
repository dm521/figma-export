import fs from 'fs';
import path from 'path';

const INPUT_JSON = path.resolve('output/首页-女.json');
const COMPONENT_DIR = path.resolve('src/components/HomeFemale');

function ensureDir(dirPath: string) {
  if (!fs.existsSync(dirPath)) fs.mkdirSync(dirPath, { recursive: true });
}

function rgbaToHex(color: { r: number; g: number; b: number; a?: number }): string {
  return `#${[color.r, color.g, color.b].map(c => {
    const hex = Math.round(c * 255).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  }).join('')}`;
}

function formatTextNode(node: any, styleName: string) {
  const text = node.characters || '';
  const fontSize = node.style?.fontSize || 16;
  const fontWeight = node.style?.fontWeight || 400;
  const fills = node.fills?.[0]?.color;
  const color = fills ? rgbaToHex(fills) : '#000000';
  return {
    jsx: `<Text style={styles.${styleName}}>${text}</Text>`,
    style: {
      fontSize,
      fontWeight: fontWeight >= 700 ? 'bold' : 'normal',
      color,
      marginBottom: 8,
    },
  };
}

function formatRectangle(node: any, styleName: string) {
  const box = node.absoluteBoundingBox || {};
  const width = box.width || 200;
  const height = box.height || 50;
  const fill = node.fills?.[0];
  let backgroundColor = '#CCCCCC';
  if (fill?.type === 'SOLID' && fill.color) {
    backgroundColor = rgbaToHex(fill.color);
  }
  return {
    jsx: `<View style={styles.${styleName}} />`,
    style: {
      width,
      height,
      backgroundColor,
      borderRadius: node.cornerRadius || 8,
      marginBottom: 8,
    },
  };
}

function formatImageNode(node: any, styleName: string) {
  const box = node.absoluteBoundingBox || {};
  const width = box.width || 200;
  const height = box.height || 100;
  const imageRef = node.fills?.[0]?.imageRef || 'https://via.placeholder.com/200x100';
  return {
    jsx: `<Image source={{ uri: '${imageRef}' }} style={styles.${styleName}} />`,
    style: { width, height, marginBottom: 8 },
  };
}

function parseChildren(children: any[], styles: Record<string, any>, jsxLines: string[], styleIndex = { i: 1 }) {
  for (const node of children) {
    const styleName = `style${styleIndex.i++}`;

    if (node.type === 'TEXT') {
      const { jsx, style } = formatTextNode(node, styleName);
      jsxLines.push(`      ${jsx}`);
      styles[styleName] = style;
    } else if (node.type === 'RECTANGLE') {
      const { jsx, style } = formatRectangle(node, styleName);
      jsxLines.push(`      ${jsx}`);
      styles[styleName] = style;
    } else if (node.type === 'IMAGE') {
      const { jsx, style } = formatImageNode(node, styleName);
      jsxLines.push(`      ${jsx}`);
      styles[styleName] = style;
    } else if (node.children && node.children.length > 0) {
      jsxLines.push(`      <View style={styles.${styleName}}>`);
      styles[styleName] = { flexDirection: 'column', marginBottom: 12 };
      parseChildren(node.children, styles, jsxLines, styleIndex);
      jsxLines.push(`      </View>`);
    }
  }
}

function generateComponent(frame: any, componentName: string) {
  const jsxLines: string[] = [];
  const styles: Record<string, any> = { container: { flex: 1, padding: 16 } };

  jsxLines.push(`    <View style={styles.container}>`);
  parseChildren(frame.children || [], styles, jsxLines);
  jsxLines.push(`    </View>`);

  const component = `import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ${componentName} = () => {
  return (
${jsxLines.join('\n')}
  );
};

const styles = StyleSheet.create({
${Object.entries(styles).map(([k, v]) => `  ${k}: ${JSON.stringify(v)},`).join('\n')}
});

export default ${componentName};
`;

  const filename = path.join(COMPONENT_DIR, `${componentName}.tsx`);
  fs.writeFileSync(filename, component, 'utf-8');
  console.log(`✅ 生成组件: ${filename}`);
}

function main() {
  ensureDir(COMPONENT_DIR);
  const raw = fs.readFileSync(INPUT_JSON, 'utf-8');
  const frame = JSON.parse(raw);
  generateComponent(frame, 'HomeFemaleScreen');
}

main();
