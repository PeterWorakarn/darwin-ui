import { useState } from 'react';

const items: { label: string; value: string }[] = [
  { label: '🤩 Love it!', value: 'value-1' },
  { label: '🤔 May be', value: 'value-2' },
  { label: '😒 So bad', value: 'value-3' },
];

const Dropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState<{ label: string; value: string }>();

  return (
    <div className="relative text-left my-1 w-36">
      <button
        type="button"
        className="z-0 h-8 inline-flex justify-between items-center w-full cursor-pointer
      border border-[#dadada] bg-white rounded-md focus:outline-none transition-colors"
        id="menu-button"
        aria-expanded="true"
        aria-haspopup="true"
        onClick={() => setIsOpen((prev) => !prev)}
        onBlur={() => setIsOpen(false)}
      >
        <div
          className="pr-1 pl-6 py-0.5 capitalize text-sm text-typo-main
          text-center outline-none w-full bg-transparent select-none"
        >
          {value?.label ? value.label : ''}
        </div>
        <svg
          className="mr-2 ml-2 h-5 w-5 text-typo-minor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1
          0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button
      >
      <div className={`${isOpen ? 'opacity-100 text-opacity-100 max-h-96 visible scale-100'
        : 'opacity-0 text-opacity-0 max-h-0 invisible scale-95'} 
        rounded-md absolute top-8 w-full bg-white transition-all duration-200 ease-linear mt-1 shadow`}
      >
        {items.map(item => (
          <button
            type="button"
            key={item.label}
            onClick={() => { setIsOpen(false); setValue(item); }}
            className="capitalize text-center hover:text-primary-navy hover:bg-gray-100
            cursor-default text-typo-minor w-full px-4 py-2"
            role="menuitem"
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
