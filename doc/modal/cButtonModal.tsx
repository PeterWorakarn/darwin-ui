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
          <FiActivity size={18} />
          Modal
        </div>
      </button>
    </>
  );
};

export default ButtonModal;
