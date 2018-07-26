import Storage from 'react-native-storage';

const storage = new Storage({
  size: 1000,
  storageBackend: window.localStorage,
  defaultExpires: 1000 * 3600 * 24,
  enableCache: true,
});

export default storage;
