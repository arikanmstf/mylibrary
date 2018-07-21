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
function getComponentTemplates() {
  return {
    native: 'templates/component/Native.template',
    web: 'templates/component/Web.template',
    types: 'templates/component/types.template',
    test_native: 'templates/component/Native.test.template',
    test_web: 'templates/component/Web.test.template',
  };
}

function screenSrcPath(screenName) {
  return `src/app/screens/${screenName}`;
}
function componentSrcPath(componentName) {
  return `src/app/ui/${componentName}`;
}

function screenPath(screenName) {
  return `screens/${screenName}`;
}
function componentPath(screenName) {
  return `ui/${screenName}`;
}

function testPath(screenName) {
  return `test/app/screens/${screenName}`;
}
function testPathComponent(componentName) {
  return `test/app/ui/${componentName}`;
}

function validateInput(screenName) {
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
function createComponentWebName(path) {
  return `${path}/Web.js`;
}
function createComponentNativeName(path) {
  return `${path}/Native.js`;
}
function createComponentTypesName(path) {
  return `${path}/types.js`;
}
function createComponentWebTestName(path) {
  return `${path}/Web.test.js`;
}
function createComponentNativeTestName(path) {
  return `${path}/Native.test.js`;
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
  return `${path}/${firstLetterLower(screenName)}Reducer.js`;
}

function createIndexName(path) {
  return `${path}/index.js`;
}

function createTestName(path, screenName) {
  return `${path}/${firstLetterUpper(screenName)}.test.js`;
}

function createComponentFiles(input) {
  const componentName = firstLetterUpper(input);
  const componentTemplates = getComponentTemplates();
  const path = componentSrcPath(componentName);
  const srcPath = componentPath(componentName);
  const importFromWeb = `${srcPath}/Web`;
  const importFromNative = `${srcPath}/Native`;
  const testP = testPathComponent(componentName);
  const testFileNameNative = createComponentNativeTestName(testP);
  const testFileNameWeb = createComponentWebTestName(testP);

  readAndCreateFile(componentTemplates.native, createComponentNativeName(path), 'componentName', componentName);
  readAndCreateFile(componentTemplates.web, createComponentWebName(path), 'componentName', componentName);
  readAndCreateFile(componentTemplates.types, createComponentTypesName(path), 'componentName', componentName);
  readAndCreateFile(
    componentTemplates.test_native,
    testFileNameNative,
    ['componentName', 'testFileName', 'importFrom'],
    [componentName, testFileNameNative, importFromNative]
  );
  readAndCreateFile(
    componentTemplates.test_web,
    testFileNameWeb,
    ['componentName', 'testFileName', 'importFrom'],
    [componentName, testFileNameWeb, importFromWeb]
  );
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

function createScreen() {
  console.log('Enter screenName, example: bookDetail');
  prompt.get(['screenName'], (err, result) => {
    const screenName = firstLetterLower(result.screenName);
    validateInput(screenName);
    createScreenFiles(screenName);
  });
}
function createComponent() {
  console.log('Enter componentName, example: TextInput');
  prompt.get(['componentName'], (err, result) => {
    const componentName = firstLetterLower(result.componentName);
    validateInput(componentName);
    createComponentFiles(componentName);
  });
}

function main() {
  console.log('Press "s" (Screen) or "c" (Component) :');

  prompt.get(['pageType'], (err, result) => {
    const pageType = result && result.pageType ? result.pageType.replace(' ', '') : '';

    switch (pageType) {
      case 's': createScreen(); break;
      case 'c': createComponent(); break;
      default: console.error('pageType not found');
    }
  });
}

main();

/* eslint-enable no-console */
