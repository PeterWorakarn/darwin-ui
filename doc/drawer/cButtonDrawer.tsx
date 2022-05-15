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
              <div className="overflow-y-auto scroll-bar h-3/4">
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
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
          </svg>
          Drawer
        </div>
      </button>
    </>
  );
};

export default ButtonDrawer;
