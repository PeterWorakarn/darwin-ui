import { useState } from 'react';
import acceptOnlyNumber from './bAccept-only-number';
import maskCitizenID, { extractMaskCitizenID } from './cMask-citizen-id';

const CitizenId: React.FC = () => {
  const [value, setValue] = useState('');

  const valueHandler = (newValue: string) => {
    if (newValue.length > value.length) {
      // add more text
      setValue(maskCitizenID(newValue));
    }
    if (newValue.length < value.length) {
      // remove text
      setValue(newValue);
    }
  };

  return (
    <div>
      <label
        htmlFor="name"
        className="text-base font-medium text-typo-minor"
      >
        Citizen ID:
        <input
          className="text-sm text-primary-navy font-medium border border-gray-200
          rounded-md py-2 px-3 w-full outline-none"
          value={value}
          onChange={(e) => valueHandler(e.target.value)}
          onKeyPress={(e) => acceptOnlyNumber(e)}
          name="name"
          type="text"
          placeholder=""
        // maxLength={12}
        />
      </label>
      <button
        type="button"
        className="mt-3 bg-primary-navy text-white py-1
      px-3 outline-none rounded-md shadow w-full"
        onClick={() => alert(extractMaskCitizenID(value))}
      >SUBMIT
      </button>
    </div>
  );
};

export default CitizenId;
