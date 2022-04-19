import { FiActivity } from 'react-icons/fi';
import { useDrawerContext } from './aDrawerProvider';

const ButtonDrawer: React.FC = () => {
  const { drawerHandler } = useDrawerContext();

  return (
    <>
      <button
        type="button"
        className="bg-primary-navy text-white py-1
        px-3 outline-none rounded-md shadow w-auto"
        onClick={() => drawerHandler({
          status: true,
          content: (
            <>
              <p className="font-bold text-2xl text-typo-main w-full text-left m-0">
                🤯 Caution !
              </p>
              <div className="overflow-y-auto  h-3/4">
                <div className="w-full font-normal text-typo-minor mt-2">
                  Consectetur est aute consectetur ipsum et adipisicing in mollit.
                  Tempor elit minim do nulla sint sint laboris consectetur .
                </div>
                <div className="w-full font-normal text-typo-minor mt-2">
                  Consectetur est aute consectetur ipsum et adipisicing in mollit.
                  Tempor elit minim do nulla sint sint laboris consectetur .
                </div>
                <div className="w-full font-normal text-typo-minor mt-2">
                  Consectetur est aute consectetur ipsum et adipisicing in mollit.
                  Tempor elit minim do nulla sint sint laboris consectetur .
                </div>
              </div>
            </>
          ),
        })}
      >
        <div className="flex justify-center items-center
      gap-1 font-medium uppercase"
        >
          <FiActivity size={18} />
          Drawer
        </div>
      </button>
    </>
  );
};

export default ButtonDrawer;
