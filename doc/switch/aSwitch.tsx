/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useState } from 'react';

const Switch: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="relative flex items-center w-16 align-middle select-none">
      <input
        onChange={() => setIsChecked((prev) => !prev)}
        checked={isChecked}
        type="checkbox"
        name="checkbox"
        className="transition-transform duration-75 ease-in absolute block w-6 h-6 rounded-full border-2
        appearance-none cursor-pointer toggle-checkbox bg-white border-grabg-gray-200 checked:border-primary-navy translate-x-0 checked:translate-x-4"
      />

      <label
        onClick={() => setIsChecked((prev) => !prev)}
        htmlFor="checkbox"
        className={`${isChecked ? 'bg-primary-navy' : 'bg-gray-200'} block overflow-hidden
        h-6 w-10 rounded-full  cursor-pointer `}
      />
    </div>
  );
};

export default Switch;
