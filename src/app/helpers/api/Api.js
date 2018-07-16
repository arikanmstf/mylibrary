class Api {
  static get() {
    setTimeout();
  }

  static async doubleAfter2Seconds(x) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(x * 2);
      }, 2000);
    });
  }

  static async writeResult(x) {
    const res = await Api.doubleAfter2Seconds(x);
    console.log(res);
  }
}

export default Api;
