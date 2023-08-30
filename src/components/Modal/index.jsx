import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Modal.scss';

const Modal = ({ showModal, handleShowModal, children }) => {
  return (
    <div className={`event-modal ${showModal ? 'show' : ''}`}>
      <div className="modal-content">
        <div
          className="exit-btn"
          onClick={handleShowModal}
          onKeyDown={handleShowModal}
          role="button"
          tabIndex={0}
        >
          <FontAwesomeIcon icon={faCircleXmark} />
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
