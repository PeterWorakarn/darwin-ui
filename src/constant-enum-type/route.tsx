import { ReactElement } from 'react';
import AccordionContainer from '../../doc/accordion/aAccordionContainer';
import AddTagContainer from '../../doc/add-tags/aAddTagContainer';
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
  hightlight: boolean;
} | {
  type: 'page';
  title: string;
  slug: string;
  publish: boolean;
  hightlight: boolean;
} | {
  type: 'title';
  title: string;
  menu: string[];
  hightlight: boolean;
}

const ROUTES: TRoute[] = [
  // Page
  {
    type: 'page',
    title: 'Home',
    slug: '/',
    publish: true,
    hightlight: false,
  },
  {
    type: 'page',
    title: 'Components',
    slug: '/components',
    publish: true,
    hightlight: false,
  },
  // Each component
  {
    type: 'component',
    title: TComponentName.BUTTON,
    slug: 'button',
    publish: true,
    component: <Button />,
    hightlight: false,
  },
  {
    type: 'component',
    title: TComponentName.CHECKBOX,
    slug: TComponentName.CHECKBOX,
    publish: true,
    component: <Checkbox />,
    hightlight: false,
  },
  {
    type: 'component',
    title: TComponentName.DATEPICKER,
    slug: TComponentName.DATEPICKER,
    publish: true,
    component: <DatePickerContainer />,
    hightlight: false,
  },
  {
    type: 'component',
    title: TComponentName.FAB,
    slug: TComponentName.FAB,
    publish: true,
    component: <FAB />,
    hightlight: false,
  },
  {
    type: 'component',
    title: TComponentName.SWITCH,
    slug: TComponentName.SWITCH,
    publish: true,
    component: <Switch />,
    hightlight: false,
  },
  {
    type: 'component',
    title: TComponentName.DROPDOWN,
    slug: TComponentName.DROPDOWN,
    publish: true,
    component: <Dropdown />,
    hightlight: false,
  },
  {
    type: 'component',
    title: TComponentName.OTP,
    slug: TComponentName.OTP,
    publish: true,
    component: <OTP />,
    hightlight: false,
  },
  {
    type: 'component',
    title: TComponentName.ADDTAGS,
    slug: TComponentName.ADDTAGS,
    publish: true,
    component: <AddTagContainer />,
    hightlight: false,
  },
  {
    type: 'component',
    title: TComponentName.ACCORDION,
    slug: TComponentName.ACCORDION,
    publish: true,
    component: <AccordionContainer />,
    hightlight: true,
  },
];

export default ROUTES;
