import { fetchFigmaFile } from './figma-api';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import fs from 'fs';
import path from 'path';

const argv = yargs(hideBin(process.argv))
  .option('id', { type: 'string', describe: 'Frame ID (e.g. 259:1890)' })
  .option('name', { type: 'string', describe: 'Frame name (e.g. 首页-女)' })
  .check((argv) => {
    if (!argv.id && !argv.name) {
      throw new Error('必须提供 --id 或 --name 参数中的一个');
    }
    return true;
  })
  .help()
  .argv as any;

function findFrameById(doc: any, frameId: string): any | null {
  for (const page of doc.children) {
    for (const node of page.children || []) {
      if (node.type === 'FRAME' && node.id === frameId) {
        return node;
      }
    }
  }
  return null;
}

function findFrameByName(doc: any, frameName: string): any | null {
  for (const page of doc.children) {
    for (const node of page.children || []) {
      if (node.type === 'FRAME' && node.name === frameName) {
        return node;
      }
    }
  }
  return null;
}

function safeFilename(name: string): string {
  return name.replace(/[\\/:*?"<>|]/g, '_');
}

(async () => {
  const doc = await fetchFigmaFile();
  const frame = argv.id
    ? findFrameById(doc, argv.id)
    : findFrameByName(doc, argv.name);

  if (!frame) {
    console.error('❌ 没有找到对应的 Frame');
    process.exit(1);
  }

  const frameName = argv.name || frame.name || 'frame';
  const outputDir = path.resolve('output');
  const filename = safeFilename(frameName) + '.json';
  const outputPath = path.join(outputDir, filename);

  fs.mkdirSync(outputDir, { recursive: true });
  fs.writeFileSync(outputPath, JSON.stringify(frame, null, 2), 'utf-8');

  console.log(`✅ Frame "${frameName}" 已导出为：output/${filename}`);
})();
