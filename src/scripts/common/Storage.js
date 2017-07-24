class Storage {

  set(key, value) {
    window.sessionStorage.setItem(key, value);
  }
  get(key) {
    return window.sessionStorage.getItem(key);
  }
  delete(key) {
      window.sessionStorage.removeItem(key);
  }
  clear() {
    window.sessionStorage.clear();
  }
}
const s = new Storage();
export default s;
