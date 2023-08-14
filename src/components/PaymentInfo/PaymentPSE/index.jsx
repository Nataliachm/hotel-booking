import React, { useState } from 'react';
import './PaymentPSE.scss';
import PhoneInput from 'react-phone-number-input';
import FormInput from '../../FormInput';
import { BANKS_LIST, USER_TYPES, ID_TYPES } from './utils';

const DEFAUTL_PAYMENT_INFO = {
  bank: '',
  accountHolder: '',
  userType: '',
  idType: '',
  phone: '',
};

const PaymentPSE = () => {
  // .... logica para traer los bancos ...//
  const { banks } = BANKS_LIST;
  // .....................................//

  const [formInfo, setFormInfo] = useState(DEFAUTL_PAYMENT_INFO);
  return (
    <form className="PaymentPSE__conatiner">
      <FormInput
        labelText="Account holder"
        type="string"
        name="accountHolder"
        placeholder="Name and last name"
      />
      <select name="banks" id="banks">
        {banks.map((bank) => {
          return <option key={bank.id}>{bank.description}</option>;
        })}
      </select>
      <select name="userType" id="userType">
        {USER_TYPES.map((userType) => {
          return (
            <option key={userType.code} value={userType.code}>
              {userType.name}
            </option>
          );
        })}
      </select>
      <div className="traveller-info-item">
        <select name="idTypes" id="idType">
          {ID_TYPES.map((idType) => {
            return (
              <option key={idType.code} value={idType.code}>
                {idType.name}
              </option>
            );
          })}
        </select>
      </div>
      <span className="traveller-info-item">
        <span>Contact Info</span>
        <PhoneInput
          defaultCountry="CO"
          id="contactInfo"
          placeholder="Phone number"
          value={formInfo.contact}
          onChange={(phone) => {
            setFormInfo((oldInfo) => {
              return { ...oldInfo, phone };
            });
          }}
        />
      </span>
    </form>
  );
};

export default PaymentPSE;
