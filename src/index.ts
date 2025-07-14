import { fetchFigmaFile } from './figma-api';

(async () => {
  const doc = await fetchFigmaFile();
  console.log(JSON.stringify(doc, null, 2)); // 打印设计文档结构
})();
