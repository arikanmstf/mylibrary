/**
 * Create New - App file creator
 * @author arikanmstf
 * @version 1.0.0
 *
 */

/* eslint-disable no-console */

const prompt = require('prompt');
const fs = require('file-system');
const p = require('path');

function firstLetterUpper(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function firstLetterLower(str) {
  return str.charAt(0).toLowerCase() + str.slice(1);
}

function createPath(pathName) {
  fs.mkdirSync(pathName, undefined, (err) => {
    if (err) {
      throw new Error(err);
    }
  });
}

function getScreenTemplates() {
  return {
    screen: 'templates/screen/Screen.template',
    actions: 'templates/screen/screenActions.template',
    native: 'templates/screen/ScreenNativeContainer.template',
    web: 'templates/screen/ScreenWebContainer.template',
    types: 'templates/screen/ScreenTypes.template',
  };
}

function screenPath(screenName) {
  return `src/app/screens/${screenName}`;
}

function validateScreen(screenName) {
  const regex = /[a-zA-Z]/;
  if (!regex.test(screenName)) {
    throw new Error('Invalid screen name');
  }
}

function readAndCreateFile(path, name, search, replace) {
  fs.readFile(p.resolve(__dirname, path), 'utf8', (err, data) => {
    if (err) {
      throw new Error(err);
    }

    let newTemplate = data.toString();

    if (search) {
      if (Array.isArray(search)) {
        search.forEach((s, index) => {
          newTemplate = newTemplate.replace(new RegExp(`#{${search[index]}}`, 'g'), replace[index]);
        });
      } else {
        newTemplate = data.toString().replace(new RegExp(`#{${search}}`, 'g'), replace);
      }
    }

    console.log(newTemplate);
    fs.writeFile(name, newTemplate);
  });
}

function createScreenName(path, screenName) {
  return `${path}/${firstLetterUpper(screenName)}.js`;
}

function createScreenActionName(path, screenName) {
  return `${path}/${firstLetterLower(screenName)}Actions.js`;
}

function createScreenNativeName(path, screenName) {
  return `${path}/${firstLetterUpper(screenName)}NativeContainer.js`;
}

function createScreenWebName(path, screenName) {
  return `${path}/${firstLetterUpper(screenName)}WebContainer.js`;
}

function createScreenTypeName(path, screenName) {
  return `${path}/${firstLetterUpper(screenName)}Types.js`;
}

function createScreenFiles(path, screenName) {
  const className = firstLetterUpper(screenName);
  const screenTemplates = getScreenTemplates();
  readAndCreateFile(screenTemplates.screen, createScreenName(path, screenName), 'className', className);
  readAndCreateFile(screenTemplates.actions, createScreenActionName(path, screenName));
  readAndCreateFile(screenTemplates.native, createScreenNativeName(path, screenName), ['className', 'screenName'], [className, screenName]);
  readAndCreateFile(screenTemplates.web, createScreenWebName(path, screenName), ['className', 'screenName'], [className, screenName]);
  readAndCreateFile(screenTemplates.types, createScreenTypeName(path, screenName), 'className', className);
}

function createScreen() {
  console.log('Enter screenName, example: bookDetail');
  prompt.get(['screenName'], (err, result) => {
    const screenName = firstLetterLower(result.screenName);
    validateScreen(screenName);

    const path = screenPath(screenName);
    createPath(path);
    createScreenFiles(path, screenName);
  });
}

function main() {
  console.log('Press "s" for Screen:');

  prompt.get(['pageType'], (err, result) => {
    const pageType = result && result.pageType ? result.pageType.replace(' ', '') : '';

    switch (pageType) {
      case 's': createScreen(); break;
      default: console.error('pageType not found');
    }
  });
}

main();

/* eslint-enable no-console */
