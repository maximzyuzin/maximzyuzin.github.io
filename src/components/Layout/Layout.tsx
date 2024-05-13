import React, { FC, HTMLProps, PropsWithChildren, useContext } from "react";
import * as styles from './Layout.module.scss'
import { Header } from "../Header/Header";

export interface ILayout extends HTMLProps<HTMLDivElement> { }

const Layout: FC<ILayout> = (props: ILayout) => {

  return <div className={styles.layout} style={{}} >
    <Header />
    {props.children}
  </div>
};

export default Layout;
