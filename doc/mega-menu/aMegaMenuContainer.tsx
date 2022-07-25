/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React, {
  useState,
} from 'react';
import SubMenu from './bSubMenu';
import { sublinks } from './link';

const MegaMenuContainer: React.FC = () => {
  const [isSubMenu, setIsSubMenu] = useState<{
    status: boolean,
    page: string | undefined,
    center: number,
  }>({
    status: false,
    page: undefined,
    center: 0,
  });

  const displayOnHover = (e: any) => {
    const page = e.target.innerText.toLowerCase(); // get text
    const tempBtn = e.target.getBoundingClientRect(); // get position of object
    const centerOfElement = tempBtn.left + (tempBtn.width * 1.25);
    setIsSubMenu({
      status: true, page, center: centerOfElement,
    });
  };

  const handleSubmenu = (e: any) => {
    if (!e.target.classList.contains('menu-link')) {
      setIsSubMenu({ ...isSubMenu, status: false });
    }
  };

  return (
    <div className="relative">
      <nav onMouseOver={(e) => handleSubmenu(e)} className="py-2 px-5 w-full">
        <div className="w-full flex flex-row justify-between items-center gap-2">
          {sublinks.map((links) => {
            return (
              <button
                type="button"
                onMouseOver={(e) => displayOnHover(e)}
                className="capitalize menu-link hover:font-bold hover:underline text-base w-20 text-center"
                key={links.page}
              >
                {links.page}
              </button>
            );
          })}
        </div>
      </nav>
      <SubMenu isSubMenu={isSubMenu} />
    </div>
  );
};

export default MegaMenuContainer;
