import { useState } from 'react';
import { BsCheckLg } from 'react-icons/bs';

const Checkbox: React.FC = (props) => {
  const [checkboxValue, setCheckboxValue] = useState(true);

  return (
    <label htmlFor="checkbox-name" className="flex gap-2 items-center justify-start">
      <div
        className={`w-5 h-5 rounded flex items-center justify-center 
        ${checkboxValue ? 'border border-primary-navy bg-primary-navy ' : 'border-2 border-gray-200'} `}
      >
        <BsCheckLg
          className={`text-white bg-transparent w-3.5 h-3.5 transition-all duration-150 ease-out 
          ${checkboxValue ? 'opacity-100' : 'opacity-0'}`}
        />
      </div>
      <input
        id="checkbox-name"
        name="checkbox-name"
        className="sr-only"
        type="checkbox"
        onClick={() => setCheckboxValue((prev) => !prev)}
        checked={checkboxValue}
        readOnly
      />
      <span
        className={`transition-all duration-150 select-none text-xl text-[#6e6e6e] 
        ${checkboxValue ? 'font-semibold' : 'font-light'}`}
      >
        Option
      </span>
    </label>
  );
};

export default Checkbox;
