import './FormButton.scss';

const FormButton = ({ children }) => {
  return (
    <button type="button" className="FormButton__container">
      {children}
    </button>
  );
};
export default FormButton;
