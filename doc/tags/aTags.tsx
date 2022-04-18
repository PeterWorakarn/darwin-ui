import { useState } from 'react';

enum TAGS {
  A = 'A',
  B = 'B',
  C = 'C',
}

const Tags: React.FC = () => {
  const [current, setCurrent] = useState<TAGS | ''>('');
  const onSelectHandler = (value: TAGS | '') => {
    if (value === current) {
      setCurrent('');
      return;
    }
    setCurrent(value);
  };
  return (
    <div className="flex justify-start flex-wrap gap-2 mt-2">
      {Object.keys(TAGS).map((tag: string) => {
        return (
          <label htmlFor={tag} key={tag}>
            <input
              type="radio"
              className="sr-only"
              id={tag}
              checked={current === tag}
              name="tags"
              value={tag}
              onChange={() => onSelectHandler(tag as TAGS)}
            />
            <div
              className={`${current === tag ? 'opacity-100 bg-primary-navy text-white border-none font-semibold' : 'opacity-75 bg-gradient-to-r bg-gray-200 text-typo-minor border-none'} 
                transition-all duration-100 ease-out flex gap-1 justify-center items-center border-none cursor-pointer py-0.5 px-6 rounded-md`}
            >
              {tag}
            </div>
          </label>
        );
      })}
    </div>
  );
};

export default Tags;
