/* eslint-disable import/no-extraneous-dependencies */
import { useContext } from 'react';
import AuthWrapper from '../../HOC/AuthWrapper';
import FormButton from '../../components/FormButton';
import FormInput from '../../components/FormInput';
import './Login.scss';
// import { findUser } from '../../mockApi';
import { AppContext } from '../../store/AppContext';

const Login = () => {
  const store = useContext(AppContext);
  const {
    email, handleEmail, setEmail,
  } = store;

  return (

    <AuthWrapper titleText="Sign in or create an account">
      <section className="Login__container">
        <FormInput
          labelText="E-mail"
          type="email"
          id="emailAddress"
          name="emailAddress"
          required
          placeholder="Email Address"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            // console.log(e.target.value);
          }}
        />
        <FormButton onClick={() => { return handleEmail(); }}>Continue</FormButton>
        <div className="line">
          <span className="line-text">or use one of these options</span>
        </div>
        <div className="container-icons">
          <div className="container-icon">
            <img
              className="icon"
              alt="googleIcon"
              src="data:image/png;base64,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"
            />
          </div>
          <div className="container-icon">
            <img
              className="icon"
              alt="facebookIcon"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEU6VZ////82Up4zUJ1UbKx4ibswTpyMmsQ5V6EtTJupss8nSJnN0+WVosgqSpo4U56eqcyDksDj5vBwgbb3+PxFXqNabqt9jb3S2OhidbC9xdy3v9l0hLjZ3etLY6bq7fTEyt4dQpdJYqekrs2uttK97JEgAAADFUlEQVR4nO3c2XLiMBBAUUZmM3IsFsNgSIAk/P83TsLzjCNbI3c3de9rqlw+BV7VZDIhIiIiIiIiIiIiIiIiIlJeCM4VxbzsrJDey8G50s/3h91ss3jp7LdJYii8262rbfPr545eem/753y9qWJwjypzwqJuT7E6i0JX7459fOaEvn3r5zMmLPy5r8+W0L9Gn15MCkO9GuAzJHSh9xFoS1hcrsOAVoTzdsghaEhYTAcDbQjdfjjQhDAshx6DRoShrhKAFoR+nQI0ICzaJKABYZlyEFoQ1p9pQPVCd0m4UJgQ+lsiULvQXVKB2oW+1ysZg8KwTAYqF5ZpF3sDQr99cqFLvJ3RL0y+2usXDnw1Y0YYUh58TQiL3X8Aql57Kvschs3xdF/9pftC8fphj3vSalZ6X5tbA/axJ5rtzhdBem+HVEeeaKq55s+po1DHAW/vJj+/yfdifdxX1OYX9LuwjxIejH5Fv3LTGOBJ8eXup+KEH056P4cXJby+S+9mQlHCUy29mwlFCddz6d1MKEq4sXsmjRTOEGoOIUL9IUSoP4QI9YcQof4QItQfQoT6Q4hQR27+78qYucRX37GFR7Jrb65ddBQz1Hbv2sCjpSixvEcgEitlhcN+cNenRnZxagThm+wK6ghC4TXiEYSr8tmFwstvIwhb2XX+EYR72St+fmEj6htDuBW+a8svPArPauQXnp9e+CI8jZJfKP38mF8ofDnML2wuwsOn2YVX6ena7MKt9PRpduHt6YUr6eHM7MKF9HBmduGr9OvU7MKp9BR4bmEjDcwulJ9zzy2U/+1hbqH0s1N+4afsq8QRhPKT/LmFB+kb7+xC6Tua7ELhdacRhOLPTtmFCv7ZQOY14LP4xWISlh2FqFkM17UF8VPpF7Hjb3HTJl2nSwXAzp5jnqYrhAj1hxCh/hAi1B9ChPpDiFB/CBHqDyFC/SFEqD+ECPWHEKH+ECLUH0KE+kOIUH8IEeoPIUL9IUSoP4QI9YcQof4QItQfQoT6Q4hQfwgR6g8hQv0hRKg/hAj1hxCh/hAi1B9ChD36A+1ASVvVoq0WAAAAAElFTkSuQmCC"
            />
          </div>
          <div className="container-icon">
            <img
              className="icon"
              alt="googleIcon"
              src="data:image/png;base64,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"
            />
          </div>
        </div>
      </section>
    </AuthWrapper>

  );
};

export default Login;
