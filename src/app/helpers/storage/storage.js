import StorageNative from 'react-native-storage';

class Storage extends StorageNative {
  __mock = {};

  save(opts, ...args) {
    if (typeof IS_MOCK !== 'undefined' && IS_MOCK) {
      this.__mock[opts.key] = opts.data; // eslint-disable-line no-underscore-dangle
      return false;
    }
    return super.save(opts, ...args);
  }

  load(opts, ...args) {
    if (typeof IS_MOCK !== 'undefined' && IS_MOCK) {
      return this.__mock[opts.key]; // eslint-disable-line no-underscore-dangle
    }
    return super.load(opts, ...args);
  }
}

const storage = new Storage({
  size: 1000,
  storageBackend: window.localStorage,
  defaultExpires: 1000 * 3600 * 24,
  enableCache: true,
});

export default storage;
