// import { useState } from 'react';
import { useContext } from 'react';
import AuthWrapper from '../../HOC/AuthWrapper';
import FormButton from '../../components/FormButton';
import FormInput from '../../components/FormInput';
// import { findPassword } from '../../mockApi';
import './Password.scss';
import { AppContext } from '../../store/AppContext';

const Password = () => {
  const store = useContext(AppContext);
  const {
    email, handleSignIn, password, setPassword,
  } = store;

  // const { email } = useParams();
  // const [password, setPassword] = useState('');

  // const handleSignIn = async () => {
  //   const found = await findPassword(email, password);
  //   if (found) {
  //     console.log('Signed in!');
  //     return;
  //   }
  //   console.log('Wrong credentials :(');
  // };

  return (
    <AuthWrapper
      titleText="Enter your password"
      subtitle="Enter your Rica.com password for"
      paragraph={email}
    >
      <div className="Password__container">
        <FormInput
          labelText="Password"
          type="password"
          id="password"
          name="password"
          required
          placeholder="Enter your password"
          value={password}
          onChange={(e) => {
            return setPassword(e.target.value);
          }}
        />
        <FormButton onClick={handleSignIn}>Sing in</FormButton>
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
