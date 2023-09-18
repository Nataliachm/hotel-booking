import React from 'react';
import './AuthWrapper.scss';

const AuthWrapper = ({ children, titleText, subtitle, paragraph }) => {
  return (
    <div className="AuthWrapper__container">
      <section className="header-login">
        <h3>{titleText}</h3>
        {subtitle ? <h4 className="subtitle">{subtitle}</h4> : null}
        {paragraph ? <p className="paragraph">{paragraph}</p> : null}
      </section>
      {children}
      <div className="terms">
        <p>
          By signing in or creating an account, you agree with our Terms &
          Conditions and Privacy Statement
        </p>
      </div>
    </div>
  );
};

export default AuthWrapper;
