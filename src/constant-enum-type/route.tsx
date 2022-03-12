import { ReactElement } from 'react';
import Button from '../../doc/button/Button';
import Checkbox from '../../doc/checkbox/Checkbox';
import DatePickerContainer from '../../doc/datepicker/aDatePickerContainer';

type TRoute = {
  type: 'component';
  title: string;
  slug: string;
  publish: boolean;
  component: ReactElement;
} | {
  type: 'page';
  title: string;
  slug: string;
  publish: boolean;
} | {
  type: 'title';
  title: string;
  menu: string[];
}

const ROUTES: TRoute[] = [
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
    title: 'button',
    slug: 'button',
    publish: true,
    component: <Button />,
  },
  {
    type: 'component',
    title: 'checkbox',
    slug: 'checkbox',
    publish: true,
    component: <Checkbox />,
  },
  {
    type: 'component',
    title: 'datePicker',
    slug: 'datepicker',
    publish: true,
    component: <DatePickerContainer />,
  },
  {
    type: 'component',
    title: 'accordion',
    slug: 'accordion',
    publish: false,
    component: <></>,
  },
];

export default ROUTES;
