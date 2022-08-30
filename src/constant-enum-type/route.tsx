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
import RadioButtonGroup from '../../doc/radio-button/RadioButtonGroup';
import Upload from '../../doc/upload/Upload';
import Rating from '../../doc/rating/aRating';
import MegaMenuContainer from '../../doc/mega-menu/aMegaMenuContainer';

type TRoute = {
  type: 'component';
  title: string;
  slug: string;
  publish: boolean;
  component: ReactElement;
  highlight: boolean;
} | {
  type: 'page';
  title: string;
  slug: string;
  publish: boolean;
  highlight: boolean;
} | {
  type: 'title';
  title: string;
  menu: string[];
  highlight: boolean;
}

const ROUTES: TRoute[] = [
  // Page
  {
    type: 'page',
    title: 'Home',
    slug: '/',
    publish: true,
    highlight: false,
  },
  {
    type: 'page',
    title: 'Components',
    slug: '/components',
    publish: true,
    highlight: false,
  },
  // Each component
  {
    type: 'component',
    title: TComponentName.BUTTON,
    slug: 'button',
    publish: true,
    component: <Button />,
    highlight: false,
  },
  {
    type: 'component',
    title: TComponentName.CHECKBOX,
    slug: TComponentName.CHECKBOX,
    publish: true,
    component: <Checkbox />,
    highlight: false,
  },
  {
    type: 'component',
    title: TComponentName.DATE_PICKER,
    slug: TComponentName.DATE_PICKER,
    publish: true,
    component: <DatePickerContainer />,
    highlight: false,
  },
  {
    type: 'component',
    title: TComponentName.FAB,
    slug: TComponentName.FAB,
    publish: true,
    component: <FAB />,
    highlight: false,
  },
  {
    type: 'component',
    title: TComponentName.SWITCH,
    slug: TComponentName.SWITCH,
    publish: true,
    component: <Switch />,
    highlight: false,
  },
  {
    type: 'component',
    title: TComponentName.DROPDOWN,
    slug: TComponentName.DROPDOWN,
    publish: true,
    component: <Dropdown />,
    highlight: false,
  },
  {
    type: 'component',
    title: TComponentName.OTP,
    slug: TComponentName.OTP,
    publish: true,
    component: <OTP />,
    highlight: false,
  },
  {
    type: 'component',
    title: TComponentName.ADD_TAGS,
    slug: TComponentName.ADD_TAGS,
    publish: true,
    component: <AddTagContainer />,
    highlight: false,
  },
  {
    type: 'component',
    title: TComponentName.ACCORDION,
    slug: TComponentName.ACCORDION,
    publish: true,
    component: <AccordionContainer />,
    highlight: false,
  },
  {
    type: 'component',
    title: TComponentName.COMPACT_CARD,
    slug: TComponentName.COMPACT_CARD,
    publish: true,
    component: <CompactCard />,
    highlight: false,
  },
  {
    type: 'component',
    title: TComponentName.TICKET_CARD,
    slug: TComponentName.TICKET_CARD,
    publish: true,
    component: <TicketCard />,
    highlight: false,
  },
  {
    type: 'component',
    title: TComponentName.MODAL,
    slug: TComponentName.MODAL,
    publish: true,
    component: <ModalContainer />,
    highlight: false,
  },
  {
    type: 'component',
    title: TComponentName.TAGS,
    slug: TComponentName.TAGS,
    publish: true,
    component: <Tags />,
    highlight: false,
  },
  {
    type: 'component',
    title: TComponentName.DRAWER,
    slug: TComponentName.DRAWER,
    publish: true,
    component: <ButtonDrawer />,
    highlight: false,
  },
  {
    type: 'component',
    title: TComponentName.CITIZEN_ID,
    slug: TComponentName.CITIZEN_ID,
    publish: true,
    component: <CitizenId />,
    highlight: false,
  },
  {
    type: 'component',
    title: TComponentName.ON_SCROLL,
    slug: TComponentName.ON_SCROLL,
    publish: true,
    component: <p>Scroll Animation</p>,
    highlight: false,
  },
  {
    type: 'component',
    title: TComponentName.RADIO,
    slug: TComponentName.RADIO,
    publish: true,
    component: <RadioButtonGroup />,
    highlight: true,
  },
  {
    type: 'component',
    title: TComponentName.UPLOAD,
    slug: TComponentName.UPLOAD,
    publish: true,
    component: <Upload />,
    highlight: true,
  },
  {
    type: 'component',
    title: TComponentName.MEGAMENU,
    slug: TComponentName.MEGAMENU,
    publish: true,
    component: <MegaMenuContainer />,
    highlight: false,
  },
  {
    type: 'component',
    title: TComponentName.RATING,
    slug: TComponentName.RATING,
    publish: true,
    component: <Rating />,
    highlight: true,
  },
];

export default ROUTES;
