import { ReactElement } from 'react';
import Button from '../../doc/button/Button';
import Checkbox from '../../doc/checkbox/Checkbox';
import DatePickerContainer from '../../doc/datepicker/aDatePickerContainer';
import Dropdown from '../../doc/dropdown/aDropdown';
import FAB from '../../doc/fab/aFAB';
import OTP from '../../doc/otp/aOTPContainer';
import Switch from '../../doc/switch/aSwitch';
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
  {
    type: 'component',
    title: TComponentName.SWITCH,
    slug: TComponentName.SWITCH,
    publish: true,
    component: <Switch />,
  },
  {
    type: 'component',
    title: TComponentName.DROPDOWN,
    slug: TComponentName.DROPDOWN,
    publish: true,
    component: <Dropdown />,
  },
  {
    type: 'component',
    title: TComponentName.OTP,
    slug: TComponentName.OTP,
    publish: true,
    component: <OTP />,
  },
];

export default ROUTES;
