/**
 * Create Module - App file creator
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

function getScreenTemplates() {
  return {
    screen: 'templates/screen/Screen.template',
    actions: 'templates/screen/screenActions.template',
    native: 'templates/screen/ScreenNativeContainer.template',
    web: 'templates/screen/ScreenWebContainer.template',
    types: 'templates/screen/ScreenTypes.template',
    reducer: 'templates/screen/screenReducer.template',
    index: 'templates/screen/index.template',
    test: 'templates/screen/Screen.test.template',
  };
}

function screenSrcPath(screenName) {
  return `src/app/screens/${screenName}`;
}

function screenPath(screenName) {
  return `screens/${screenName}`;
}

function testPath(screenName) {
  return `test/app/screens/${screenName}`;
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

function createScreenReducerName(path, screenName) {
  return `${path}/${firstLetterUpper(screenName)}Reducer.js`;
}

function createIndexName(path) {
  return `${path}/index.js`;
}

function createTestName(path, screenName) {
  return `${path}/${firstLetterUpper(screenName)}.test.js`;
}

function createScreenFiles(screenName) {
  const className = firstLetterUpper(screenName);
  const screenTemplates = getScreenTemplates();
  const path = screenSrcPath(screenName);
  const srcPath = screenPath(screenName);

  readAndCreateFile(screenTemplates.screen, createScreenName(path, screenName), 'className', className);
  readAndCreateFile(screenTemplates.actions, createScreenActionName(path, screenName));
  readAndCreateFile(screenTemplates.native, createScreenNativeName(path, screenName), ['className', 'screenName'], [className, screenName]);
  readAndCreateFile(screenTemplates.web, createScreenWebName(path, screenName), ['className', 'screenName'], [className, screenName]);
  readAndCreateFile(screenTemplates.reducer, createScreenReducerName(path, screenName), 'screenName', screenName);
  readAndCreateFile(screenTemplates.types, createScreenTypeName(path, screenName), 'className', className);
  readAndCreateFile(screenTemplates.index, createIndexName(path), 'className', className);

  console.log('Do you also want to add test scripts ? ( y/n )');
  prompt.get(['addTests'], (err, result) => {
    const addTests = firstLetterLower(result.addTests);

    if (addTests === 'y') {
      const testP = testPath(screenName);
      const testFileName = createTestName(testP, screenName);
      const importFrom = `${srcPath}/${className}`;

      readAndCreateFile(
        screenTemplates.test,
        testFileName,
        ['className', 'testFileName', 'importFrom'],
        [className, testFileName, importFrom]
      );
    }
  });
}

function createScreen() {
  console.log('Enter screenName, example: bookDetail');
  prompt.get(['screenName'], (err, result) => {
    const screenName = firstLetterLower(result.screenName);
    validateScreen(screenName);
    createScreenFiles(screenName);
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
