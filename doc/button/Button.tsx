import { FiActivity } from 'react-icons/fi';

const Button: React.FC = () => {
  return (
    <button
      type="button"
      onClick={() => null}
      className="bg-primary-navy text-white py-1
      px-3 outline-none rounded-md shadow w-auto"
    >
      <div className="flex justify-center items-center
      gap-1 font-medium uppercase"
      >
        <FiActivity size={18} />
        Button
      </div>
    </button>
  );
};

export default Button;
