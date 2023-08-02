import React, { forwardRef, useState } from 'react';
import ReactDatePicker from 'react-datepicker';

const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => {
  return (
    <button
      type="button"
      className="example-custom-input"
      onClick={onClick}
      ref={ref}
    >
      {value}
    </button>
  );
});

ExampleCustomInput.defaultProps = {
  value: '',
  onClick: () => {},
};

export default function DatePickerControl() {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <ReactDatePicker
      selected={startDate}
      onChange={(date) => {
        return setStartDate(date);
      }}
      customInput={<ExampleCustomInput />}
    />
  );
}
