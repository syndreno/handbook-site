#!/usr/bin/env node

/**
 * Generate a static index.json file from local assets/handbook directory
 * This avoids GitHub API rate limits by reading local files
 * 
 * Run this when you add new handbooks:
 * node scripts/generate-index.mjs
 */

import fs from 'fs';
import path from 'path';

const GITHUB_OWNER = 'syndreno';
const GITHUB_REPO = 'handbooks';
const GITHUB_BRANCH = 'main';
const CONTENT_ROOT = 'assets/handbook';
const OUTPUT_FILE = 'src/data/handbook-index.json';

function walkDirectory(dirPath) {
  let files = [];

  try {
    const entries = fs.readdirSync(dirPath, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(dirPath, entry.name);
      const relativePath = path.relative('.', fullPath).replaceAll('\\', '/');

      // Skip excluded directories
      if (entry.isDirectory()) {
        if (!['.git', '.github', 'node_modules', 'dist', '.astro', '.cache'].includes(entry.name)) {
          const subFiles = walkDirectory(fullPath);
          files = files.concat(subFiles);
        }
      }

      // Collect markdown files
      if (entry.isFile() && entry.name.toLowerCase().endsWith('.md')) {
        // URL-encode the path for GitHub raw URLs
        const encodedPath = relativePath
          .split('/')
          .map(part => encodeURIComponent(part))
          .join('/');
        const rawUrl = `https://raw.githubusercontent.com/${GITHUB_OWNER}/${GITHUB_REPO}/${GITHUB_BRANCH}/${encodedPath}`;
        files.push({
          name: entry.name,
          path: relativePath,
          rawUrl: rawUrl
        });
      }
    }
  } catch (error) {
    console.error(`Failed to read ${dirPath}:`, error.message);
  }

  return files;
}

async function generateIndex() {
  console.log(`\n📦 Generating index from local ${CONTENT_ROOT}...\n`);

  try {
    if (!fs.existsSync(CONTENT_ROOT)) {
      console.error(`❌ Directory not found: ${CONTENT_ROOT}`);
      process.exit(1);
    }

    const files = walkDirectory(CONTENT_ROOT);
    
    if (files.length === 0) {
      console.error('❌ No markdown files found!');
      process.exit(1);
    }

    const index = {
      generated: new Date().toISOString(),
      repository: `${GITHUB_OWNER}/${GITHUB_REPO}`,
      branch: GITHUB_BRANCH,
      contentRoot: CONTENT_ROOT,
      totalFiles: files.length,
      files: files
    };

    // Create directory if needed
    const dir = path.dirname(OUTPUT_FILE);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(index, null, 2));

    console.log(`✅ Index generated successfully!`);
    console.log(`📝 File: ${OUTPUT_FILE}`);
    console.log(`📊 Total handbooks: ${files.length}`);
    console.log(`\nSample files:`);
    files.slice(0, 5).forEach(f => console.log(`  - ${f.path}`));
    if (files.length > 5) {
      console.log(`  ... and ${files.length - 5} more`);
    }
    console.log(`\n💡 Remember to commit this file to GitHub:`);
    console.log(`   git add ${OUTPUT_FILE}`);
    console.log(`   git commit -m "Update handbook index"`);
    console.log(`   git push`);
  } catch (error) {
    console.error('❌ Error generating index:', error.message);
    process.exit(1);
  }
}

generateIndex();
