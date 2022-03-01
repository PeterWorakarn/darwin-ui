import { HiBeaker } from 'react-icons/hi';
import { Activity } from 'lucide-react';

const Button: React.FC = () => {
  return (
    <button
      type="button"
      onClick={() => null}
      className="bg-primary-navy text-white 
      transition-all duration-75 ease-in opacity-75 
      hover:opacity-100 py-1 px-3 inline-flex justify-center 
      items-center gap-1 outline-none font-medium uppercase rounded-md shadow w-auto"
    >
      <Activity size={20} />
      Button
    </button>
  );
};

export default Button;
