import './FormButton.scss';

const FormButton = ({ children, type, ...props }) => {
  return (
    <button
      {...props}
      // eslint-disable-next-line react/button-has-type
      type={type || 'button'}
      className="FormButton__container"
    >
      {children}
    </button>
  );
};
export default FormButton;
