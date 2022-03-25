import { HiPlus } from 'react-icons/hi';

const FAB: React.FC = () => {
  return (
    <div
      // use for center component only
      className="w-[60px] h-[60px] mx-auto relative"
    >
      <button
        type="button"
        onClick={() => null}
        className="bottom-2 right-2 absolute z-50 bg-opacity-80 grid place-items-center
        w-8 h-8 bg-primary-navy text-white rounded-full
        hover:bg-primary-navy active:shadow-lg mouse shadow
        transition ease-in duration-200 focus:outline-none"
      >
        <HiPlus className="" />
        <span className="sr-only">FAB</span>
      </button>
    </div>
  );
};

export default FAB;
