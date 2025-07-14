import fs from 'fs';
import path from 'path';

const INPUT_PATH = path.resolve('output/首页-女.json');
const OUTPUT_PATH = path.resolve('output/HomeFemaleScreen.tsx');

function rgbaToHex(r: number, g: number, b: number): string {
  return `#${[r, g, b].map(x => {
    const hex = Math.round(x * 255).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  }).join('')}`;
}

function main() {
  const raw = fs.readFileSync(INPUT_PATH, 'utf-8');
  const frame = JSON.parse(raw);

  const styles: Record<string, any> = {
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: '#fff',
    },
  };

  let styleIndex = 1;
  const jsxLines: string[] = [];

  for (const node of frame.children || []) {
    const type = node.type;
    const styleName = `style${styleIndex++}`;

    if (type === 'TEXT') {
      const text = node.characters || '';
      const fontSize = node.style?.fontSize || 16;
      const fontWeight = node.style?.fontWeight || 400;

      jsxLines.push(`      <Text style={styles.${styleName}}>${text}</Text>`);
      styles[styleName] = {
        fontSize,
        fontWeight: fontWeight >= 700 ? 'bold' : 'normal',
        marginBottom: 12,
      };
    } else if (type === 'RECTANGLE') {
      const box = node.absoluteBoundingBox || {};
      const width = box.width || 200;
      const height = box.height || 50;
      const corner = node.cornerRadius || 8;

      const fill = node.fills?.[0];
      let bgColor = '#3399DD';
      if (fill?.type === 'SOLID') {
        bgColor = rgbaToHex(fill.color.r, fill.color.g, fill.color.b);
      }

      jsxLines.push(`      <TouchableOpacity style={styles.${styleName}}>\n        <Text style={styles.buttonText}>立即开始</Text>\n      </TouchableOpacity>`);
      styles[styleName] = {
        width,
        height,
        backgroundColor: bgColor,
        borderRadius: corner,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16,
      };

      styles['buttonText'] = {
        fontSize: 18,
        color: '#fff',
      };
    }
  }

  const component = `
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const HomeFemaleScreen = () => {
  return (
    <View style={styles.container}>
${jsxLines.join('\n')}
    </View>
  );
};

const styles = StyleSheet.create({
${Object.entries(styles).map(([k, v]) => `  ${k}: ${JSON.stringify(v)},`).join('\n')}
});

export default HomeFemaleScreen;
`.trim();

  fs.writeFileSync(OUTPUT_PATH, component, 'utf-8');
  console.log(`✅ 生成成功: ${OUTPUT_PATH}`);
}

main();
