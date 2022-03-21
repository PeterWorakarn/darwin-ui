const fileNameFormat = (text:string) => {
  if (text.length !== 0) {
    if (/[a-z]/.test(text[0])) {
      return text.substring(1, text.length - 1);
    }
  }
  return text;
};

export default fileNameFormat;
