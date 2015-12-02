const packager = require('electron-packager');
const fs = require('fs');
const path = require('path');

const paths = {
  packageJson: path.join(__dirname + '/package.json')
}

const packageJson = JSON.parse(fs.readFileSync(paths.packageJson, 'utf-8'));
const ignores = Object.keys(packageJson.devDependencies);

const options = {
  dir: '.',
  name: packageJson.name,
  platform: ['darwin', 'win32'],
  arch: 'all',
  version: require('electron-prebuilt/package.json').version,
  overwrite: true,
  // prune: true,
  ignore: new RegExp(`node_modules/(${ ignores.join('|') })`),
  out: 'packages'
};

packager(options, (err, path) => {
  if (err) return console.log(err);
  console.log(path);
});
