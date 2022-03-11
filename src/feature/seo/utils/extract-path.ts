/* eslint-disable no-useless-escape */
const pathRegrex = /^[/][A-za-z\-]*/;
const extractComponentName = (name: string) => {
  return name.split('/')[2];
};
const extractPathName = (pathname: string) => {
  const pathArr = pathname.match(pathRegrex);
  if (pathArr !== null && pathArr.input) {
    if (pathArr.input.includes('/components/')) {
      return extractComponentName(pathArr.input);
    }
    return pathArr.input;
  }
  return 'Home';
};

export default extractPathName;
