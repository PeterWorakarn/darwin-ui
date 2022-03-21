import moment, { Moment } from 'moment-timezone';
import { useState } from 'react';
import { HiChevronLeft, HiChevronRight, HiOutlineCalendar } from 'react-icons/hi';

interface TDatePicker {
  label: string;
  name: string;
  dateValue: Moment;
  onSelectDate: (selectDate: number, date: moment.Moment) => void;
}

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']; // 0 - 6

const DatePicker: React.FC<TDatePicker> = (props) => {
  const [isShowDatePicker, setIsShowDatePicker] = useState<boolean>(false);
  const [tempDate, setTempDate] = useState<moment.Moment>(props.dateValue);
  const onClickOutside = (value: boolean) => {
    setIsShowDatePicker(value);
  };

  const onPrevMonth = (currentDate: moment.Moment) => {
    setTempDate(moment(currentDate).subtract(1, 'months'));
  };
  const onNextMonth = (currentDate: moment.Moment) => {
    setTempDate(moment(currentDate).add(1, 'months'));
  };
  return (
    <>
      <div
        onClick={() => onClickOutside(false)}
        className={`${!isShowDatePicker && 'hidden'} opacity-0 absolute 
      bg-white z-10 w-full h-full top-0 left-0`}
      />
      <div className="relative z-20 w-56">
        {/* Date Input */}
        <>
          <div
            onClick={() => setIsShowDatePicker((prev) => !prev)}
            className="flex flex-row justify-between items-center"
          >
            <label
              className="capitalize font-semibold text-[#6e6e6e]"
              htmlFor={`${props.name ? props.name : 'date'}`}
            >
              {props.label ? props.label : 'date'}
            </label>
          </div>
          <div
            onClick={() => setIsShowDatePicker((prev) => !prev)}
            className="relative"
          >
            <input
              className="text-sm text-[#2c2c2c] font-medium border
          border-[#E2E2E2] rounded-md py-1 px-3 my-1 w-56 outline-none"
              id={props.name ? props.name : 'date'}
              name={props.name ? props.name : 'date'}
              value={moment(props.dateValue).format('DD MMM YYYY') as string}
              type="text"
              readOnly
            />
            <i className="absolute h-[30px] top-1 flex items-center justify-center right-1.5 text-[#6e6e6e]">
              <HiOutlineCalendar className="w-4 h-4 text-gray-400" />
            </i>
          </div>
        </>
        {/* Date Modal */}
        <div
          className={`${isShowDatePicker ? 'opacity-100 mt-16' : 'opacity-0 mt-14'} 
          transition-all duration-100 bg-white rounded-md shadow pl-4 pr-2 py-2 absolute top-0 left-0 w-56`}
        >
          <div className="flex justify-between items-center mb-2">
            <div className="flex justify-start items-center gap-1 w-3/4">
              <p className="font-bold text-[#2c2c2c]">
                {moment(tempDate).format('MMMM')}
              </p>
              <p className="ml-1 text-[#2c2c2c] font-bold">
                {moment(tempDate).format('YYYY')}
              </p>
            </div>
            <div className="flex justify-center items-end gap-1 w-1/4">
              <HiChevronLeft
                onClick={() => onPrevMonth(tempDate)}
                className="w-5 h-5 text-primary-navy"
              />
              <HiChevronRight
                onClick={() => onNextMonth(tempDate)}
                className="w-5 h-5 text-primary-navy"
              />
            </div>
          </div>
          <div
            className="text-xs font-semibold text-center
          pointer-events-none select-none text-[#6e6e6e]
          -mx-1 flex justify-between"
          >
            {DAYS.map(day => {
              return (
                <span
                  key={day}
                  style={{ width: '14.18%' }}
                  className="text-xs font-semibold text-center
                  pointer-events-none select-none text-[#6e6e6e] "
                >
                  {day}
                </span>
              );
            })}
          </div>
          <div className="flex flex-wrap -mx-1">
            {Array.from({
              length: parseInt(moment(tempDate).startOf('month').format('d'), 10),
            }, (_, i) => i + 1).map((blank) => {
              return (
                <span
                  key={blank}
                  className="flex justify-center items-center text-xs h-7 rounded-full"
                  style={{ width: '14.18%' }}
                />
              );
            })}
            {Array.from({
              length: moment(tempDate).daysInMonth(),
            }, (_, i) => i + 1).map((dayInMonth) => {
              return (
                <span
                  key={dayInMonth}
                  onClick={() => {
                    props.onSelectDate(dayInMonth, tempDate);
                    setIsShowDatePicker(false);
                  }}
                  className={`flex cursor-default justify-center items-center text-xs h-7 rounded-full font-bold 
                  ${moment(tempDate).set('date', dayInMonth).format('D MM YYYY') === moment(props.dateValue).format('D MM YYYY')
                    ? 'bg-primary-navy text-white' : 'text-[#4B4B4B]'}`}
                  style={{ width: '14.18%' }}
                >{dayInMonth}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default DatePicker;
