import './FormInput.scss';

const FormInput = ({
  labelText,
  onButtonClick,
  buttonText,
  buttonClassName,
  ...inputProps
}) => {
  return (
    <label htmlFor={inputProps.id} className="FormInput__container">
      <span>{labelText}</span>
      <div className="input-row">
        <input {...inputProps} />
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
