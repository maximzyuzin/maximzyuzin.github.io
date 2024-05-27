import React, { FC, useContext, useState } from "react";
// import styles from './ModalButton.module.scss';
import Button from 'src/components/Button/Button';
import Modal from "../Modal/Modal";
import { ThemeContext } from "../Provider/ThemeProvider";

const ModalButton: FC<{}> = () => {
  const [visible, setVisible] = useState<boolean>(false)
  const [val, setVal] = useState<string>('')
  const handleChahge = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVal(e.currentTarget.value)
  }
  const theme = useContext(ThemeContext);

  return (
    <div style={theme === 'dark' ? { backgroundColor: 'rgb(177, 189, 230)' } : {}}>
      <input value={val} onChange={(e) => handleChahge(e)} style={{ maxWidth: '200px' }} />
      <div style={{ paddingBottom: '16px' }} />
      <Button size={"medium"} label={"Откройте модальное окно"} onClick={() => setVisible(!visible)} />
      <Modal visible={visible} onClose={() => setVisible(!visible)}>
        {val}
      </Modal>
    </div>
  )
};

export default ModalButton;
