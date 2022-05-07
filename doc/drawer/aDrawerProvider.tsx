/* eslint-disable @typescript-eslint/no-empty-function */
import {
  useContext, createContext, useState, useEffect,
} from 'react';

interface TDrawerData {
  status: boolean, content: JSX.Element | null
}

const DrawerContext = createContext({
  drawerHandler: (drawerData: {
    status: boolean;
    content: JSX.Element | null;
  }) => { },
});

export function useDrawerContext() {
  return useContext(DrawerContext);
}

const DrawerProvider: React.FC = (props) => {
  // Note: in order to make modal stay on top all the time,
  // you need to place Modal component at Page Level
  const [drawerStatus, setDrawerStatus] = useState<TDrawerData>({
    status: false, content: null,
  });

  useEffect(() => {
    if (drawerStatus.status === true) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [drawerStatus.status]);

  const drawerStore = {
    drawerHandler: (drawerData: TDrawerData) => setDrawerStatus(drawerData),
  };

  return (
    <DrawerContext.Provider
      value={{ ...drawerStore }}
    >
      {props.children}
      <div
        onClick={() => setDrawerStatus({ content: null, status: false })}
        className={`transition-all ease-in duration-150 flex fixed w-screen h-screen inset-0 z-[60] 
        ${drawerStatus.status ? 'opacity-30 bg-primary-navy' : 'opacity-0 bg-primary-navy invisible'}`}
      />
      <article
        className={`${drawerStatus.status ? '-translate-x-[40px] xl:-translate-x-[630px] xl:translate-y-[200px]  opacity-100' : ' xl:translate-y-[200px] -translate-x-[1000px] xl:-translate-x-[1000px] opacity-10'} 
      transition-all ease-in duration-150 fixed z-[70] flex-shrink-0 w-full max-w-xs h-screen xl:h-1/2 rounded-xl shadow pt-7 px-5 pb-4 mx-auto bg-white`}
      >
        {drawerStatus.content}
      </article>
    </DrawerContext.Provider>
  );
};

export default DrawerProvider;
