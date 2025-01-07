import React from 'react';
import style from '../footer/Footer.module.scss';
import { CiHeart } from "react-icons/ci";

const Footer = () => {
  return (
    <div className={style.container}>
      <div className={style.textbox}>
        <span>Copyright ©2025 All rights reserved | This template is made with <CiHeart /> by Colorlib</span>
      </div>
    </div>
  )
}

export default Footer