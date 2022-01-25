const pathRegrex = /^[/][A-za-z\-]*/;
function extractPathName(pathname: string) {
  const pathArr = pathname.match(pathRegrex);
  if (pathArr !== null) {
    return pathArr[0];
  }
  return '/Home';
}

export default extractPathName;