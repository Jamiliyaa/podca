import React from 'react';
import style from '../header/Header.module.scss';
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  return (
 <header>
    <div className={style.container}>
        <div className={style.textbox}>
<h3>PODCA</h3>
        </div>
        <div className={style.hmbgr}>
        <GiHamburgerMenu />
        </div>
    </div>
 </header>
  )
}

export default Header