require('react-native');
/* eslint-disable */
function interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// To see all the requests in the chrome Dev tools in the network tab.
XMLHttpRequest = GLOBAL.originalXMLHttpRequest ?
  GLOBAL.originalXMLHttpRequest :
  GLOBAL.XMLHttpRequest;

// fetch logger
if (typeof global.self === 'undefined') {
  global.self = global;
}

global._fetch = fetch;
global.fetch = function (uri, options, ...args) {
  return global._fetch(uri, options, ...args).then((response) => {
    console.log('Fetch', { request: { uri, options, ...args }, response });
    return response;
  });
};

interopRequireDefault(require('react'));

const expo = interopRequireDefault(require('expo'));

const App = interopRequireDefault(require('./App.js'));

if (process.env.NODE_ENV === 'development') {
  expo.default.KeepAwake.activate();
}

expo.default.registerRootComponent(App.default);
/* eslint-enable */
