const shell = require('shelljs');

shell.rm('-rf', './dist');
shell.cp('-r', './src', './dist');

const html = shell.cat('./dist/index.html')
  .replace(/<link rel="stylesheet" href="https:\/\/unpkg.com\/tachyons@4.8.0\/css\/tachyons.min.css"\/>/i, `<style>${shell.cat('./node_modules/tachyons/css/tachyons.min.css')}</style>`);

shell.ShellString(html).to('./dist/index.html');
