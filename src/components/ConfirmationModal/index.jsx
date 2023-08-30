import React from 'react';
import './ConfirmationModal.scss';

const ConfirmationModal = ({
  imageSrc, onConfirm, onCancel, hotelName, nameDelete,
}) => {
  return (
    <div className="modalConfirmation">
      <div className="modal-content">
        <div className="modal-context_container">
          <img src={imageSrc} alt="Imagen a borrar" />
          <h3>
            {hotelName}
          </h3>
        </div>
        <h3>
          ¿ Are you sure you want to delete
          {' '}
          {nameDelete}
          ?
        </h3>
        <div className="button-container">
          <button className="confirm-button" type="button" onClick={onConfirm}>
            Confirm delete
          </button>
          <button className="cancel-button" type="button" onClick={onCancel}>
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
