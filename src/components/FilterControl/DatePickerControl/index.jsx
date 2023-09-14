import React, { forwardRef } from 'react';
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

export default function DatePickerControl({ date, setDate }) {
  return (
    <ReactDatePicker
      selected={date}
      onChange={(d) => {
        return setDate(d);
      }}
      customInput={<ExampleCustomInput />}
    />
  );
}
