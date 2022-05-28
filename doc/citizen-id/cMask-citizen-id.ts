const maskCitizenID = (text: string) => {
  // X XXXX XXXXX XX X
  const textValue = text
    .replace(/\D/g, '')
    .match(
      /(\d{0,1})(\d{0,4})(\d{0,5})(\d{0,2})(\d{0,1})/,
    );
  if (textValue === null) {
    return text;
  }

  return !textValue[2]
    ? `${textValue[1]}`
    : !textValue[3]
      ? `${textValue[1]}-${textValue[2]}`
      : !textValue[4]
        ? `${textValue[1]}-${textValue[2]}-${textValue[3]}`
        : !textValue[5]
          ? `${textValue[1]}-${textValue[2]}-${textValue[3]}-${textValue[4]}`
          : `${textValue[1]}-${textValue[2]}-${textValue[3]}-${textValue[4]}-${textValue[5]}`;
};

export const extractMaskCitizenID = (
  textWithMask: string,
) => {
  return textWithMask
    .replace(/\D/g, '')
    .replace(/\//g, '');
};

export default maskCitizenID;
