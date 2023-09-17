import './FormInput.scss';

const FormInput = ({
  labelText,
  onButtonClick,
  buttonText,
  buttonClassName,
  value,
  ...inputProps
}) => {
  return (
    <label htmlFor={inputProps.id} className="FormInput__container">
      <span>{labelText}</span>
      <div className="input-row">
        <input {...inputProps} value={value} />
        {buttonText && (
          <button
            type="button"
            className={`input-button ${buttonClassName}`}
            onClick={onButtonClick}
          >
            {buttonText}
          </button>
        )}
      </div>
    </label>
  );
};
export default FormInput;
