export default class storage {

  set(key,value) {
    window.sessionStorage.setItem(key,value);
  }
  get(key) {
    return window.sessionStorage.getItem(key);
  }
}
