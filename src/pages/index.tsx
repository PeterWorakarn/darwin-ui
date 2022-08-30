import type { NextPage } from 'next';
import Link from 'next/link';
import { useEffect } from 'react';
import { HiChevronDoubleRight } from 'react-icons/hi';
import AccordionContainer from '../../doc/accordion/aAccordionContainer';
import AddTagContainer from '../../doc/add-tags/aAddTagContainer';
import Button from '../../doc/button/Button';
import Checkbox from '../../doc/checkbox/Checkbox';
import CitizenId from '../../doc/citizen-id/aCitizenId';
import DatePickerContainer from '../../doc/datepicker/aDatePickerContainer';
import Dropdown from '../../doc/dropdown/aDropdown';
import FAB from '../../doc/fab/aFAB';
import OTPContainer from '../../doc/otp/aOTPContainer';
import RadioButtonGroup from '../../doc/radio-button/RadioButtonGroup';
import Switch from '../../doc/switch/aSwitch';
import Tags from '../../doc/tags/aTags';
import TicketCard from '../../doc/ticket-card/aTicketCard';
import Upload from '../../doc/upload/Upload';

const Home: NextPage = () => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
  }, []);

  return (
    <>
      <section className="h-[500px] xl:h-[80vh] 2xl:h-auto w-of-container w-full mx-auto flex flex-col pt-[190px] xl:pt-0 xl:flex-row justify-center items-center">
        <div className=" bg-transparent w-full h-full max-w-md mx-auto px-4 xl:px-0 xl:flex flex-col justify-center items-start">
          <h1 className="mb-1 text-6xl xl:text-7xl font-nunito text-left font-bold text-primary-navy">
            Darwin UI
          </h1>
          <p className="mb-3 pl-1 font-nunito text-typo-minor">Tailwind Component with React Hook</p>
          <Link href="/components">
            <a className="ml-1 font-nunito font-bold py-1 px-3 max-w-[120px] flex items-center justify-center gap-1 bg-primary-navy text-white rounded-md">
              Explore
              <HiChevronDoubleRight />
            </a>
          </Link>
        </div>
        <div className="max-w-md w-full h-full mt-24 mb-10 xl:mb-0 xl:mt-5 px-4 xl:px-0 relative flex justify-center items-center">
          <Link href="/components">
            <div className="transform-gpu  xl:rotate-3 xl:-skew-x-3 shadow-2xl xl:shadow rounded-md hover:shadow-2xl hover:-mt-2 ">
              <span className="flex h-4 w-4 rounded-full relative ml-auto">
                <span className="-mt-2 animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-navy opacity-75" />
                <span className="-mt-2 relative inline-flex rounded-full h-4 w-4 bg-primary-navy" />
              </span>
              <section className="scroll-bar overflow-auto max-h-96">
                <div className="flex flex-wrap gap-5 pointer-events-none px-4 py-10">
                  <Button />
                  <Checkbox />
                  <Switch />
                  <DatePickerContainer />
                  <FAB />
                  <Dropdown />
                  <OTPContainer />
                  <AddTagContainer />
                  <AccordionContainer />
                  <Tags />
                  <div className="flex gap-2  items-start">
                    <TicketCard />
                    <div className="flex flex-wrap gap-2">
                      <RadioButtonGroup />
                      <button
                        type="button"
                        className="bg-primary-navy text-white py-1
                      px-3 outline-none rounded-md shadow w-auto flex items-center justify-center gap-2"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                        </svg>
                        Drawer
                      </button>
                      <button
                        type="button"
                        className="bg-primary-navy text-white py-1
                      px-3 outline-none rounded-md shadow w-auto flex items-center justify-center gap-2"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                        </svg>
                        Modal
                      </button>
                      <Upload />
                    </div>
                  </div>
                  <CitizenId />
                </div>
              </section>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
