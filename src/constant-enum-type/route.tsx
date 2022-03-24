import { ReactElement } from 'react';
import Button from '../../doc/button/Button';
import Checkbox from '../../doc/checkbox/Checkbox';
import DatePickerContainer from '../../doc/datepicker/aDatePickerContainer';
import FAB from '../../doc/fab/aFAB';
import { TComponentName } from './component';

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
    title: TComponentName.BUTTON,
    slug: 'button',
    publish: true,
    component: <Button />,
  },
  {
    type: 'component',
    title: TComponentName.CHECKBOX,
    slug: TComponentName.CHECKBOX,
    publish: true,
    component: <Checkbox />,
  },
  {
    type: 'component',
    title: TComponentName.DATEPICKER,
    slug: TComponentName.DATEPICKER,
    publish: true,
    component: <DatePickerContainer />,
  },
  {
    type: 'component',
    title: TComponentName.FAB,
    slug: TComponentName.FAB,
    publish: true,
    component: <FAB />,
  },
];

export default ROUTES;
