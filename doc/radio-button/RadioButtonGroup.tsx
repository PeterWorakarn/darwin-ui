import { useState } from 'react';
import { BsCheckLg } from 'react-icons/bs';

type TValue = {
  label: string;
  value: string;
}

const DATA: TValue[] = [
  {
    label: 'javascript',
    value: 'js',
  },
  {
    label: 'python',
    value: 'py',
  },
  {
    label: 'markdown',
    value: 'md',
  },
];

const RadioButtonGroup: React.FC = () => {
  const initialValue = DATA[0];
  const [value, setValue] = useState<TValue>(initialValue);
  // use the same name attribute to make user can select only one button
  return (
    <div className="flex flex-col">
      {DATA.map((item) => {
        return (
          <label className="flex gap-2 items-center" key={item.value} htmlFor={item.value}>
            <div
              className={`w-4 h-4 rounded-full flex items-center justify-center bg-transparent 
                ${value?.value === item.value ? 'border-2 border-primary-navy bg-primary-navy ' : 'border-2 border-gray-200'} `}
            >
              <div
                className={`rounded-full w-2 h-2 transition-all duration-150 ease-out 
                  ${value?.value === item.value ? 'bg-white opacity-100' : 'opacity-0'}`}
              />
            </div>
            <input
              type="radio"
              id={item.value}
              name="radio"
              value={item.value}
              className="sr-only"
              onClick={() => setValue({ label: item.label, value: item.value })}
            />
            <span
              className={`transition-all duration-150 select-none text-xl capitalize
        ${value?.value === item.value ? 'font-semibold text-primary-navy' : 'font-semibold text-[#6e6e6e] '}`}
            >
              {item.label}
            </span>
          </label>
        );
      })}
    </div>
  );
};

export default RadioButtonGroup;
