import { FiActivity } from 'react-icons/fi';
import { useModalContext } from './aModalProvider';

const ButtonModal: React.FC = () => {
  const { modalHandler } = useModalContext();

  return (
    <>
      <button
        type="button"
        className="bg-primary-navy text-white py-1
        px-3 outline-none rounded-md shadow w-auto"
        onClick={() => modalHandler({
          status: true,
          content: (
            <>
              <p className="font-bold text-2xl text-typo-main w-full text-left m-0">
                🤯 Caution !
              </p>
              <div className="w-full font-normal text-typo-minor mt-2">
                Consectetur est aute consectetur ipsum et adipisicing in mollit.
                Tempor elit minim do nulla sint sint laboris consectetur .
              </div>
              <div className="flex w-full justify-center">
                <button
                  type="button"
                  onClick={() => modalHandler({ content: null, status: false })}
                  className="bg-primary-navy text-white py-1
                  px-3 outline-none rounded-md shadow w-full"
                >
                  <div className="flex justify-center items-center
                  gap-1 font-medium uppercase"
                  >
                    OK
                  </div>
                </button>
              </div>
            </>
          ),
        })}
      >
        <div className="flex justify-center items-center
      gap-1 font-medium uppercase"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
          Modal
        </div>
      </button>
    </>
  );
};

export default ButtonModal;
