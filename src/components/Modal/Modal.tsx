import React, { FC, useEffect, useState } from "react";
import * as styles from './Modal.module.scss';
import { CloseSharp } from '@mui/icons-material';

export interface IModal {
  visible: boolean,
  onClose: () => void,
  children?: React.ReactNode,
};

const Modal: FC<IModal> = ({ visible, onClose, children }) => {
  const [isShow, setIsShow] = useState(visible);

  useEffect(() => {
    setIsShow(visible);
  }, [visible]);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    setIsShow(visible);
  }, [visible]);

  return (
    <>
      {isShow && (
        <div className={styles.overlay} onClick={handleOverlayClick}>
          <div className={styles.modalContent}>
            {children}
            <CloseSharp className={styles.buttonClose} onClick={() => onClose()} />
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
