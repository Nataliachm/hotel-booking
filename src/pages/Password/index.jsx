import AuthWrapper from '../../HOC/AuthWrapper';
import FormButton from '../../components/FormButton';
import FormInput from '../../components/FormInput';
import './Password.scss';

const Password = () => {
  return (
    <AuthWrapper
      titleText="Enter your password"
      subtitle="Enter your Rica.com password for"
      paragraph="email@example.com"
    >
      <div className="Password__container">
        <FormInput
          labelText="Password"
          type="password"
          id="password"
          name="password"
          required
          placeholder="Enter your password"
        />
        <FormButton>Sing in</FormButton>
        <div className="line">
          <span className="line-text">or</span>
        </div>
        <button type="button" className="password-btn">
          Forgot your password?
        </button>
      </div>
    </AuthWrapper>
  );
};

export default Password;
