// ONLY NUMBER INPUT
const acceptOnlyNumber = (
  e: React.KeyboardEvent<HTMLInputElement>,
) => {
  const Key = e.key;
  switch (Key) {
    case 'e': {
      e.preventDefault();
      break;
    }
    default: {
      // Limit only number
      if (Key.match(/^[^0-9]$/)) {
        e.preventDefault();
      }
      break;
    }
  }
};

export default acceptOnlyNumber;
