// @flow

export const isCloseToBottom = () => {
  const windowHeight = window.innerHeight
    || (document.documentElement ? document.documentElement.offsetHeight : 0);

  const docHeight = Math.max(
    document.body ? document.body.scrollHeight : 0,
    document.body ? document.body.offsetHeight : 0,
    document.documentElement ? document.documentElement.clientHeight : 0,
    document.documentElement ? document.documentElement.scrollHeight : 0,
    document.documentElement ? document.documentElement.offsetHeight : 0
  );
  return windowHeight + window.pageYOffset + 600 >= docHeight;
};

export const isPageNotFilled = () => {
  const windowHeight = window.innerHeight
    || (document.documentElement ? document.documentElement.offsetHeight : 0);
  const page = document.getElementById('homePage');
  const pageHeight = page ? page.offsetHeight : 0;

  return windowHeight >= pageHeight;
};
