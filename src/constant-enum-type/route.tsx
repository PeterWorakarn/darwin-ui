import { ReactElement } from 'react';
import AccordionContainer from '../../doc/accordion/aAccordionContainer';
import AddTagContainer from '../../doc/add-tags/aAddTagContainer';
import Button from '../../doc/button/Button';
import Checkbox from '../../doc/checkbox/Checkbox';
import CompactCard from '../../doc/compact-card/aCompactCard';
import DatePickerContainer from '../../doc/datepicker/aDatePickerContainer';
import ButtonDrawer from '../../doc/drawer/cButtonDrawer';
import Dropdown from '../../doc/dropdown/aDropdown';
import FAB from '../../doc/fab/aFAB';
import ModalContainer from '../../doc/modal/bContentContainer';
import OTP from '../../doc/otp/aOTPContainer';
import Switch from '../../doc/switch/aSwitch';
import Tags from '../../doc/tags/aTags';
import TicketCard from '../../doc/ticket-card/aTicketCard';
import CitizenId from '../../doc/citizen-id/aCitizenId';
import { TComponentName } from './component';
import OnScroll from '../../doc/on-scroll/aOnScroll';
import RadioButtonGroup from '../../doc/radio-button/RadioButtonGroup';

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
    hightlight: false,
  },
  {
    type: 'component',
    title: TComponentName.COMPACTCARD,
    slug: TComponentName.COMPACTCARD,
    publish: true,
    component: <CompactCard />,
    hightlight: false,
  },
  {
    type: 'component',
    title: TComponentName.TICKETCARD,
    slug: TComponentName.TICKETCARD,
    publish: true,
    component: <TicketCard />,
    hightlight: false,
  },
  {
    type: 'component',
    title: TComponentName.MODAL,
    slug: TComponentName.MODAL,
    publish: true,
    component: <ModalContainer />,
    hightlight: false,
  },
  {
    type: 'component',
    title: TComponentName.TAGS,
    slug: TComponentName.TAGS,
    publish: true,
    component: <Tags />,
    hightlight: false,
  },
  {
    type: 'component',
    title: TComponentName.DRAWER,
    slug: TComponentName.DRAWER,
    publish: true,
    component: <ButtonDrawer />,
    hightlight: false,
  },
  {
    type: 'component',
    title: TComponentName.CITIZEN_ID,
    slug: TComponentName.CITIZEN_ID,
    publish: true,
    component: <CitizenId />,
    hightlight: false,
  },
  {
    type: 'component',
    title: TComponentName.ON_SCROLL,
    slug: TComponentName.ON_SCROLL,
    publish: true,
    component: <p>Scroll Animation</p>,
    hightlight: false,
  },
  {
    type: 'component',
    title: TComponentName.RADIO,
    slug: TComponentName.RADIO,
    publish: true,
    component: <RadioButtonGroup />,
    hightlight: true,
  },
];

export default ROUTES;
