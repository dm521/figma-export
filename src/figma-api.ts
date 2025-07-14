import fetch from 'node-fetch';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(__dirname, '.env') });

const FIGMA_TOKEN = process.env.FIGMA_TOKEN!;
const FILE_ID = process.env.FIGMA_FILE_ID!;

export async function fetchFigmaFile() {
  const res = await fetch(`https://api.figma.com/v1/files/${FILE_ID}`, {
    headers: {
      'X-Figma-Token': FIGMA_TOKEN,
    },
  });

  if (!res.ok) {
    throw new Error(`Fetch failed: ${res.status} ${await res.text()}`);
  }

  const data = await res.json();
  return data.document;
}
