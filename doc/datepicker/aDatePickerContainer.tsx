import { useState } from 'react';
import moment, { Moment } from 'moment-timezone';
import DatePicker from './bDatePicker';

const DatePickerContainer: React.FC = () => {
  const [dateValue, setDateValue] = useState<Moment>(moment());

  const onSelectDate = (selectDate: number, date: moment.Moment) => {
    setDateValue(moment(date).set('date', selectDate));
  };

  return (
    <DatePicker
      name="date"
      label="date"
      dateValue={dateValue}
      onSelectDate={(selectDate, date) => onSelectDate(selectDate, date)}
    />
  );
};

export default DatePickerContainer;
