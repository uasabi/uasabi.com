import * as ReactDOM from 'react-dom/server';
import * as React from 'react';
import {Layout, Home} from './layout';
import * as program from 'commander';
import {watch} from 'chokidar';
import * as fs from 'fs';
import {resolve} from 'path';
import {rm, cp} from 'shelljs';

program
  .option('-w, --watch [value]', 'The directory you wish to watch')
  .option('-o, --output [value]', 'The directory where to write the files to')
  .option('-i, --inline [value]', 'Inline the css. Default is false')
  .parse(process.argv);

if (!isString(program.output)) {
  console.log('Please provide an output directory');
  process.exit(0);
}

rm('-rf', program.output);
cp('-r', './src', program.output);

if (isString(program.watch)) {
  watch('./src').on('all', () => {
    fs.writeFile(resolve(program.output, 'index.html'), ReactDOM.renderToStaticMarkup(<Layout Content={Home}/>), () => {});
  });
} else {
  fs.writeFile(resolve(program.output, 'index.html'), ReactDOM.renderToStaticMarkup(<Layout Content={Home}/>), () => {});
}

function isString(value: any): value is string {
  return ({}).toString.call(value) === '[object String]';
}