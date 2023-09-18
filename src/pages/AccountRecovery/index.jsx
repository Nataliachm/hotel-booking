import AuthWrapper from '../../HOC/AuthWrapper';
import FormButton from '../../components/FormButton';
import FormInput from '../../components/FormInput';
import './AccountRecovery.scss';

const AccountRecovery = () => {
  return (
    <AuthWrapper
      titleText="Forgot your password?"
      subtitle="No problem! We'll send you a link to reset it. Enter the email address you use to sign in to Rica.com."
    >
      <div className="AccountRecovery__container">
        <FormInput
          labelText="E-mail"
          type="email"
          id="emailAddress"
          name="emailAddress"
          required
          placeholder="Email Address"
        />
        <FormButton>Send reset link</FormButton>
      </div>
    </AuthWrapper>
  );
};

export default AccountRecovery;
