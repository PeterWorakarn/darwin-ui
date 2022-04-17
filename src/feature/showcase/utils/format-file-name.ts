/* eslint-disable operator-linebreak */
const fileNameFormat = (text: string) => {
  if (text.length !== 0) {
    if (
      /[a-z]/.test(text[0]) &&
      /[A-Z]/.test(text[1])
    ) {
      // Handle File Sorting
      return text.substring(1, text.length);
    }
  }
  return text;
};

export default fileNameFormat;
