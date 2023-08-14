import { useEffect, useState } from 'react';
import AuthWrapper from '../../HOC/AuthWrapper';
import FormButton from '../../components/FormButton';
import FormInput from '../../components/FormInput';
import './RegisterPassword.scss';

const RegisterPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showMatchWarning, setShowMatchWarning] = useState(false);

  useEffect(() => {
    if (password !== confirmPassword && confirmPassword) {
      setShowMatchWarning(true);
    } else {
      setShowMatchWarning(false);
    }
  }, [password, confirmPassword]);

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
          value={password}
          onChange={(e) => {
            return setPassword(e.target.value);
          }}
        />
        <FormInput
          labelText="Confirm password"
          type="password"
          id="ConfirmPassword"
          name="ConfirmPassword"
          required
          placeholder="Confirm your password"
          value={confirmPassword}
          onChange={(e) => {
            setConfirmPassword(e.target.value);
          }}
        />
        {showMatchWarning && (
          <span className="warning">passwords don't match</span>
        )}
        <FormButton disabled={showMatchWarning}>Create account</FormButton>
      </div>
    </AuthWrapper>
  );
};

export default RegisterPassword;
