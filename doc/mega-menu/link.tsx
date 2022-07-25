import { HiOutlineAnnotation, HiOutlineDatabase, HiOutlineUserGroup } from 'react-icons/hi';

export type TSublinks = {
  page: string;
  links: {
    label: string;
    icon: JSX.Element;
    url: string;
  }[];
};

export const sublinks: TSublinks[] = [
  {
    page: 'products',
    links: [
      {
        label: 'payment',
        icon: (
          <HiOutlineAnnotation className="w-5 h-5" />
        ),
        url: '/products',
      },
      {
        label: 'terminal',
        icon: (
          <HiOutlineAnnotation className="w-5 h-5" />
        ),
        url: '/products',
      },
      {
        label: 'connect',
        icon: (
          <HiOutlineAnnotation className="w-5 h-5" />
        ),
        url: '/products',
      },
    ],
  },
  {
    page: 'developers',
    links: [
      {
        label: 'plugins',
        icon: (
          <HiOutlineDatabase className="w-5 h-5" />
        ),
        url: '/products',
      },
      {
        label: 'help',
        icon: (
          <HiOutlineDatabase className="w-5 h-5" />
        ),
        url: '/products',
      },
    ],
  },
  {
    page: 'company',
    links: [
      {
        label: 'about',
        icon: (
          <HiOutlineUserGroup className="w-5 h-5" />
        ),
        url: '/products',
      },
      {
        label: 'customers',
        icon: (
          <HiOutlineUserGroup className="w-5 h-5" />
        ),
        url: '/products',
      },
    ],
  },
];
