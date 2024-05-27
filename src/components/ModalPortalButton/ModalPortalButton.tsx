import React, { FC, useContext, useEffect, useState } from "react"
import Button from 'src/components/Button/Button';
import { ThemeContext } from "../Provider/ThemeProvider";
import ModalPortal from "../ModalPortal/ModalPortal";

const ModalPortalButton: FC<{}> = () => {
  const [visible, setVisible] = useState<boolean>(false)
  const [val, setVal] = useState<string>('')
  const handleChahge = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVal(e.currentTarget.value)
  }
  const [theme,] = useContext(ThemeContext);

  return (
    <div style={theme === 'dark' ? { backgroundColor: 'rgb(177, 189, 230)' } : {}} >
      <input value={val} onChange={(e) => handleChahge(e)} style={{ maxWidth: '200px', marginBottom: '20px', marginLeft: '15px'}} />
      <Button size={"small"} label={"Откройте модальное окно в портале"} onClick={() => setVisible(!visible)} />
      {visible && <ModalPortal theme={theme} onClose={() => setVisible(!visible)} ><p>{val}</p></ModalPortal>}
    </div>
  )
}

export default ModalPortalButton;
