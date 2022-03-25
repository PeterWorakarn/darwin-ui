import { Dispatch, SetStateAction, useState } from 'react';

type TOTP = {
  index: number;
  values: string[];
  setValues: Dispatch<SetStateAction<string[]>>;
}

const OTP: React.FC<TOTP> = (props) => {
  const [isEmpty, setIsEmpty] = useState(true);

  const inputOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Add Value At The right index
    setIsEmpty(true);
    if (Number.isNaN(e.target.value)) return false;
    if (e.target.value.match(/^[^0-9]$/)) return false;
    props.setValues([...props.values.map((d, idx) => (idx === props.index ? e.target.value : d))]);

    if (e.target.previousSibling && e.target.value === '') {
      setIsEmpty(true);
      (e.target.previousSibling as HTMLElement)?.focus();
    }
    if (e.target.nextSibling && e.target.value !== '') {
      setIsEmpty(false);
      (e.target.nextSibling as HTMLElement)?.focus();
    }
    if (e.target.value !== '') {
      setIsEmpty(false);
    }
    return null;
  };
  const inputKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const Key = e.key;
    switch (Key) {
      case 'Backspace':
      case 'Delete': {
        break;
      }
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

  return (
    <input
      onChange={e => inputOnChange(e)}
      onFocus={e => e.target.select()}
      onKeyPress={(e) => inputKeyPress(e)}
      type="text"
      maxLength={1}
      className={`text-typo-main font-semibold shadow-sm transform bg-transparent m-0 border-b-2 border-gray-200 
      focus-within:border-primary-navy transition-all duration-300 ease-out outline-none h-8 w-8 text-center 
      ${!isEmpty ? 'border-primary-navy translate-y-0' : '-translate-y-1'} `}
    />
  );
};

export default OTP;
