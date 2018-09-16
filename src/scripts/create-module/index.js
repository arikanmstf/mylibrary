/**
 * Create Module - App file creator
 * @author arikanmstf
 * @version 1.1.0
 *
 */

/* eslint-disable no-console */

const prompt = require('prompt');
const fs = require('file-system');
const p = require('path');

(function () {
  const firstLetterUpper = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const firstLetterLower = (str) => {
    return str.charAt(0).toLowerCase() + str.slice(1);
  };

  const validateInput = (name) => {
    const regex = /[a-zA-Z]/;
    if (!regex.test(name)) {
      throw new Error('Invalid name');
    }
  };

  const readAndCreateFile = (path, name, search, replace) => {
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
  };

  const PAGE_TYPE_SCREEN = 'PAGE_TYPE_SCREEN';
  const PAGE_TYPE_COMPONENT = 'PAGE_TYPE_COMPONENT';
  const PAGE_TYPE_MODULE = 'PAGE_TYPE_MODULE';

  const getTemplates = () => {
    let templates = {};

    switch (this.pageType) {
      case PAGE_TYPE_SCREEN:
        templates = {
          screen: 'templates/screen/Screen.template',
          actions: 'templates/screen/screenActions.template',
          native: 'templates/screen/ScreenNativeContainer.template',
          web: 'templates/screen/ScreenWebContainer.template',
          types: 'templates/screen/ScreenTypes.template',
          reducer: 'templates/screen/screenReducer.template',
          index: 'templates/screen/index.template',
          test: 'templates/screen/Screen.test.template',
        };
        break;
      case PAGE_TYPE_COMPONENT:
        templates = {
          native: 'templates/component/Native.template',
          web: 'templates/component/Web.template',
          types: 'templates/component/types.template',
          test: 'templates/component/Web.test.template',
          test_native: 'templates/component/Native.test.template',
        };
        break;
      case PAGE_TYPE_MODULE:
        templates = {
          actions: 'templates/modules/actions.template',
          reducer: 'templates/modules/reducer.template',
          services: 'templates/modules/services.template',
          types: 'templates/modules/types.template',
        };
        break;
      default: console.error('page type not found');
    }

    return templates;
  };

  const getTestPath = () => {
    let result = '';

    switch (this.pageType) {
      case PAGE_TYPE_SCREEN: result = `test/app/screens/${this.name}`; break;
      case PAGE_TYPE_COMPONENT: result = `test/app/ui/${firstLetterUpper(this.name)}`; break;
      case PAGE_TYPE_MODULE: result = `test/app/modules/${firstLetterLower(this.name)}`; break;
      default: console.error('page type not found');
    }
    return result;
  };

  const getPath = () => {
    let result = '';

    switch (this.pageType) {
      case PAGE_TYPE_SCREEN: result = `screens/${this.name}`; break;
      case PAGE_TYPE_COMPONENT: result = `ui/${firstLetterUpper(this.name)}`; break;
      case PAGE_TYPE_MODULE: result = `modules/${firstLetterLower(this.name)}`; break;
      default: console.error('page type not found');
    }
    return result;
  };

  const createName = (templateType) => {
    let path = '';
    let result = '';
    const testP = getTestPath();

    switch (this.pageType) {
      case PAGE_TYPE_SCREEN:
        path = `src/app/screens/${this.name}`;

        switch (templateType) {
          case 'screen': result = `${path}/${firstLetterUpper(this.name)}.js`; break;
          case 'actions': result = `${path}/${firstLetterLower(this.name)}Actions.js`; break;
          case 'native': result = `${path}/${firstLetterUpper(this.name)}NativeContainer.js`; break;
          case 'web': result = `${path}/${firstLetterUpper(this.name)}WebContainer.js`; break;
          case 'types': result = `${path}/${firstLetterUpper(this.name)}Types.js`; break;
          case 'reducer': result = `${path}/${firstLetterLower(this.name)}Reducer.js`; break;
          case 'index': result = `${path}/index.js`; break;
          case 'test': result = `${testP}/${firstLetterUpper(this.name)}.test.js`; break;
          default: console.error(`Screen template type not found: ${templateType}`);
        }
        break;
      case PAGE_TYPE_COMPONENT:
        path = `src/app/ui/${firstLetterUpper(this.name)}`;

        switch (templateType) {
          case 'native': result = `${path}/Native.js`; break;
          case 'web': result = `${path}/Web.js`; break;
          case 'types': result = `${path}/types.js`; break;
          case 'test': result = `${testP}/Web.test.js`; break;
          case 'test_native': result = `${testP}/Native.test.js`; break;
          default: console.error(`Component template type not found: ${templateType}`);
        }
        break;
      case PAGE_TYPE_MODULE:
        path = `src/app/modules/${firstLetterLower(this.name)}`;

        switch (templateType) {
          case 'actions': result = `${path}/actions.js`; break;
          case 'reducer': result = `${path}/reducer.js`; break;
          case 'services': result = `${path}/services.js`; break;
          case 'types': result = `${path}/types.js`; break;
          case 'test': break;
          default: console.error(`Module template type not found: ${templateType}`);
        }
        break;
      default: console.error('page type not found');
    }

    return result;
  };

  const createFiles = () => {
    const templates = getTemplates();
    const keys = Object.keys(templates);
    const className = firstLetterUpper(this.name);
    const srcPath = getPath();
    const testFileName = createName('test');
    let importFrom = `${srcPath}/${className}`;

    keys.forEach((key) => {
      if (this.pageType === PAGE_TYPE_COMPONENT) {
        switch (key) {
          case 'test': importFrom = `${srcPath}/Web`; break;
          case 'test_native': importFrom = `${srcPath}/Native`; break;
          default: importFrom = '';
        }
      }

      readAndCreateFile(
        templates[key],
        createName(key),
        ['className', 'screenName', 'testFileName', 'importFrom', 'componentName'],
        [className, this.name, testFileName, importFrom, firstLetterUpper(this.name)]
      );
    });
  };

  const create = () => {
    let enterText;

    switch (this.pageType) {
      case PAGE_TYPE_SCREEN:
        enterText = 'Enter screen name, example: bookDetail';
        break;
      case PAGE_TYPE_COMPONENT:
        enterText = 'Enter component name, example: TextInput';
        break;
      case PAGE_TYPE_MODULE:
        enterText = 'Enter module name, example: card';
        break;
      default: console.error('page type not found');
    }

    console.log(enterText);
    prompt.get(['name'], (err, result) => {
      const name = firstLetterLower(result.name);
      validateInput(name);
      this.name = name;
      createFiles();
    });
  };

  console.log('Press "s" for Screen, "c"  for Component, "m" for Module :');

  prompt.get(['pageType'], (err, result) => {
    let pageType = result && result.pageType ? result.pageType.replace(' ', '') : '';

    switch (pageType) {
      case 's':
        pageType = PAGE_TYPE_SCREEN;
        break;
      case 'c':
        pageType = PAGE_TYPE_COMPONENT;
        break;
      case 'm':
        pageType = PAGE_TYPE_MODULE;
        break;
      default: console.error('page type not found');
    }

    this.pageType = pageType;
    create();
  });
}());

/* eslint-enable no-console */
