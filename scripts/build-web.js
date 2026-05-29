#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

console.log('🔨 Building SOULS for web...');

// Create output directory
const outDir = path.join(__dirname, '..', '.expo', 'web');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// Copy index.html
const htmlFile = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta name="description" content="SOULS - Luxury Social Lifestyle App" />
    <title>SOULS</title>
    <style>
      * { margin: 0; padding: 0; box-sizing: border-box; }
      html, body, #root { width: 100%; height: 100%; }
      body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
          'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: #000000;
      }
      #root { display: flex; }
      code { font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace; }
    </style>
  </head>
  <body>
    <div id="root"></div>
    <script src="/index.js"></script>
  </body>
</html>`;

fs.writeFileSync(path.join(outDir, 'index.html'), htmlFile);
console.log('✅ Created index.html');

// Create a minimal index.js bundle (in production, this would be compiled)
const jsFile = `
// SOULS App - Web Build
console.log('SOULS app loaded');

// This would normally be a bundled React app
// For now, show a loading message
const root = document.getElementById('root');
if (root) {
  root.innerHTML = '<div style="display:flex;justify-content:center;align-items:center;height:100vh;color:#FFCC00;font-size:24px;font-family:Inter,sans-serif">🚀 SOULS is loading...</div>';
}
`;

fs.writeFileSync(path.join(outDir, 'index.js'), jsFile);
console.log('✅ Created index.js');

// Copy favicon if it exists
const faviconSrc = path.join(__dirname, '..', 'assets', 'favicon.png');
const faviconDest = path.join(outDir, 'favicon.png');
if (fs.existsSync(faviconSrc)) {
  fs.copyFileSync(faviconSrc, faviconDest);
  console.log('✅ Copied favicon');
}

console.log('✨ Build complete! Output in .expo/web/');
