/* eslint-disable @typescript-eslint/no-empty-function */
import {
  useContext, createContext, useState, useEffect,
} from 'react';

interface TModalData {
  status: boolean, content: JSX.Element | null
}

const ModalContext = createContext({
  modalHandler: (modalData: {
    status: boolean;
    content: JSX.Element | null;
  }) => { },
});

export function useModalContext() {
  return useContext(ModalContext);
}

const ModalProvider: React.FC = (props) => {
  // Note: in order to make modal stay on top all the time,
  // you need to place Modal component at Page Level
  const [modalStatus, setModalStatus] = useState<TModalData>({
    status: false, content: null,
  });

  useEffect(() => {
    if (modalStatus.status === true) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [modalStatus.status]);

  const modalStore = {
    modalHandler: (modalData: TModalData) => setModalStatus(modalData),
  };

  return (
    <ModalContext.Provider
      value={{ ...modalStore }}
    >
      {props.children}
      {modalStatus.status && (
        <div className="z-50 fixed box-border overflow-hidden inset-0 outline-none">
          <div className="relative flex h-full w-full justify-center items-center text-typo-minor">
            <div
              onClick={() => setModalStatus({ content: null, status: false })}
              className="bg-primary-navy opacity-30 z-[60] absolute h-full w-full"
            />
            <div className="z-[70] relative w-full max-w-xs bg-white
            rounded-xl shadow pt-7 px-5 pb-4 flex flex-col items-center gap-2 capitalize"
            >
              {modalStatus.content}
            </div>
          </div>
        </div>
      )}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
