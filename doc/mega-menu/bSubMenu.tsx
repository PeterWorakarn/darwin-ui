import { useEffect, useRef } from 'react';
import { sublinks } from './link';

type SubMenuProps = {
  isSubMenu: {
    status: boolean;
    page: string | undefined;
    center: number;
  }
}

const SubMenu: React.FC<SubMenuProps> = (props) => {
  const container = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const submenu = container.current;
    if (submenu) {
      (submenu as any).style.left = `${props.isSubMenu.center - 700}px`;
    }
  }, [props.isSubMenu]);

  return (
    <aside
      ref={container}
      className={`${!props.isSubMenu.status ? 'max-h-0 opacity-0' : 'max-h-95 opacity-100'} 
    before:block before:w-0 before:h-0 before:border-l-8 before:border-l-transparent 
    before:border-r-8 before:border-r-transparent before:border-b-8
    before:border-b-white before:absolute before:-top-1.5 before:left-1/2 before:-translate-x-1/2 
    bg-white px-3 py-4 absolute top-[2.75rem] left-1/2 -translate-x-1/2 p-8 
    transition-all shadow rounded`}
    >
      {props.isSubMenu.page && (
        <>
          <p className="capitalize text-xl mb-3 font-semibold">{props.isSubMenu.page}</p>
          <div className="flex flex-row gap-5">
            {sublinks.find((link) => link.page === props.isSubMenu.page)!.links.map((each_link) => {
              return (
                <div
                  className="flex gap-2 text-sm capitalize items-center cursor-pointer"
                  key={each_link.label}
                >
                  {each_link.icon}
                  {each_link.label}
                </div>
              );
            })}
          </div>
        </>
      )}
    </aside>
  );
};

export default SubMenu;
