class Storage {

  set(key, value) {
    window.sessionStorage.setItem(key, value);
  }
  get(key) {
    return window.sessionStorage.getItem(key);
  }
}
const s = new Storage();
export default s;
