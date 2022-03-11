import { ReactElement } from 'react';
import Button from '../../doc/button/Button';
import Checkbox from '../../doc/checkbox/Checkbox';
import DatePickerContainer from '../../doc/datepicker/aDatePickerContainer';
import { TBlockType } from './doc';

export type TRoute = {
  type: 'component';
  title: string;
  short: string;
  slug: string;
  publish: boolean;
  block_type: TBlockType;
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
    short: 'The button is an essential element of any design.',
    block_type: TBlockType.SQUARE,
    component: <Button />,
  },
  {
    type: 'component',
    title: 'checkbox',
    slug: 'checkbox',
    publish: true,
    short: 'checkbox',
    block_type: TBlockType.SQUARE,
    component: <Checkbox />,
  },
  {
    type: 'component',
    title: 'datepicker',
    slug: 'datepicker',
    publish: true,
    short: 'datepicker',
    block_type: TBlockType.RECTANGLE,
    component: <DatePickerContainer />,
  },
  {
    type: 'component',
    title: 'accordion',
    slug: 'accordion',
    publish: false,
    short: 'accordion',
    block_type: TBlockType.RECTANGLE,
    component: <></>,
  },
];

export default ROUTES;
