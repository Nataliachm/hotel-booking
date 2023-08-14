import React from 'react';
import './ConfirmationModal.scss';

const ConfirmationModal = ({ imageSrc, onConfirm, onCancel }) => {
  return (
    <div className="modalConfirmation">
      <div className="modal-content">
        <img src={imageSrc} alt="Imagen a borrar" />
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
