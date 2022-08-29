import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import s from './Modal.module.scss';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ onClose, src }) => {
  useEffect(
    () => {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
    <div className={s.overlay} onClick={handleBackdropClick}>
      <div className={s.modal}>
        <img src={src} alt="Large" width={900} />
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;

Modal.propTypes = {
  src: PropTypes.string.isRequired,
};
