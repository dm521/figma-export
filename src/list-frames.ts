import { fetchFigmaFile } from './figma-api';

(async () => {
  const doc = await fetchFigmaFile();

  for (const page of doc.children) {
    console.log(`📄 页面：${page.name}`);
    for (const node of page.children || []) {
      if (node.type === 'FRAME') {
        console.log(`  🔹 Frame：${node.name} (ID: ${node.id})`);
      }
    }
  }
})();
