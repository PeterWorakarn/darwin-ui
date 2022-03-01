import { ReactElement } from 'react';
import Button from '../../doc/button/Button';
import DatePickerContainer from '../../doc/datepicker/ADatePickerContainer';

type TRoute = {
  type: 'component';
  title: string;
  slug: string;
  publish:boolean;
  component:ReactElement;
} | {
  type: 'page';
  title: string;
  slug: string;
  publish:boolean;
} | {
  type: 'title';
  title: string;
  menu: string[];
}

const route:TRoute[] = [
  // Page
  {
    type: 'page',
    title: 'Home',
    slug: '/',
    publish: true,
  },
  {
    type: 'page',
    title: 'Components',
    slug: '/components',
    publish: true,
  },
  // Each component
  {
    type: 'component',
    title: 'DatePicker',
    slug: '/components/datepicker',
    publish: true,
    component: <DatePickerContainer />,
  },
  {
    type: 'component',
    title: 'Button',
    slug: '/components/button',
    publish: true,
    component: <Button />,
  },
];

export default route;
