import type { NextPage } from 'next';
import Link from 'next/link';
import { HiChevronDoubleRight } from 'react-icons/hi';
import AddTagContainer from '../../doc/add-tags/aAddTagContainer';
import Button from '../../doc/button/Button';
import Checkbox from '../../doc/checkbox/Checkbox';
import DatePickerContainer from '../../doc/datepicker/aDatePickerContainer';
import Dropdown from '../../doc/dropdown/aDropdown';
import FAB from '../../doc/fab/aFAB';
import OTPContainer from '../../doc/otp/aOTPContainer';
import Switch from '../../doc/switch/aSwitch';

const Home: NextPage = () => {
  const stateHandler = () => {
    // do somethings
  };
  return (
    <>
      <section className="h-[500px] w-of-container w-full mx-auto flex flex-col-reverse xl:flex-row justify-center items-center">
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
        <div className="max-w-md w-full h-full mt-10 mb-10 xl:mb-0 xl:mt-5 px-4 xl:px-0 relative">
          <Link href="/components">
            <div className="transform-gpu  xl:rotate-3 xl:-skew-x-3 shadow-2xl xl:shadow rounded-md hover:shadow-2xl hover:-mt-2 ">
              <span className="flex h-4 w-4 rounded-full relative ml-auto">
                <span className="-mt-2 animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-navy opacity-75" />
                <span className="-mt-2 relative inline-flex rounded-full h-4 w-4 bg-primary-navy" />
              </span>
              <section className="scroll-bar">
                <div className="flex flex-wrap gap-5 pointer-events-none px-4 py-10">
                  <Button />
                  <Checkbox />
                  <Switch />
                  <DatePickerContainer />
                  <FAB />
                  <Dropdown />
                  <OTPContainer />
                  <AddTagContainer />
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
