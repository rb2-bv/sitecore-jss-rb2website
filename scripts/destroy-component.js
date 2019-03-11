/*
  Component Scaffolding Script
  This is a script that enables scaffolding a new JSS component using `jss scaffold <componentname>`.
  Edit this script if you wish to use your own conventions for component storage in your JSS app.
*/

/* eslint-disable no-throw-literal,no-console */

const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

/*
  SCAFFOLDING SCRIPT
*/
const componentName = process.argv[2];

if (!componentName) {
  throw 'Component name was not passed. Usage: jss scaffold <ComponentName>';
}

if (!/^[A-Z][A-Za-z0-9-]+$/.test(componentName)) {
  throw 'Component name should start with an uppercase letter and contain only letters and numbers.';
}

const componentManifestDefinitionsPath = 'sitecore/definitions/components';
const componentRootPath = 'src/components';
const componentPath = path.join(componentRootPath, componentName);
const manifestPath = path.join(componentManifestDefinitionsPath, `${componentName}.sitecore.js`);

console.log();

[componentPath, manifestPath].forEach((path) => {
  if (remove(path)) {
    console.log(chalk.green(`Removed ${manifestPath}.`));
  }
})

console.log(chalk.green(`Component ${componentName} has been destroyed.`));

/*
  TEMPLATING FUNCTIONS
*/

function deleteFolderRecursive (path) {
  fs.readdirSync(path).forEach(function(file, index){
    var curPath = path + "/" + file;
    if (fs.lstatSync(curPath).isDirectory()) { // recurse
      deleteFolderRecursive(curPath);
    } else { // delete file
      fs.unlinkSync(curPath);
    }
  });
  fs.rmdirSync(path);
};

function remove(fileOrDirectory) {
  if (!fs.existsSync(fileOrDirectory)) {
    return false;
  }
  if (fs.lstatSync(fileOrDirectory).isDirectory()) {
    deleteFolderRecursive(fileOrDirectory);
  } else {
    fs.unlinkSync(fileOrDirectory);
  }

  return true;
}