import AuthWrapper from '../../HOC/AuthWrapper';
import FormButton from '../../components/FormButton';
import FormInput from '../../components/FormInput';
import './RegisterPassword.scss';

const RegisterPassword = () => {
  return (
    <AuthWrapper
      titleText="Create password"
      subtitle="Use a minimum of 10 characters, including uppercase letters, lowercase letters, and numbers"
    >
      <div className="RegisterPassword__container">
        <FormInput
          labelText="Password"
          type="password"
          id="password"
          name="password"
          required
          placeholder="Enter a password"
        />
        <FormInput
          labelText="Confirm password"
          type="password"
          id="ConfirmPassword"
          name="ConfirmPassword"
          required
          placeholder="Confirm your password"
        />
        <FormButton>Create account</FormButton>
      </div>
    </AuthWrapper>
  );
};

export default RegisterPassword;
