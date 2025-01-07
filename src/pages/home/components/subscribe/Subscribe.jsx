import React from 'react';
import style from '../subscribe/Subscribe.module.scss';

const Subscribe = () => {
  return (
    <div className={style.container}>
<div className={style.textbox}>
    <h1>Subscribe</h1>
    <span>Lorem ipsum dolor sit amet,consectetur adipisicing elit <br></br>nihil saepe libero sit odio obcaecati veniam.</span>
    <br></br>
<input type={style.file} id={style.fileInput} accept={style.image}/>
</div>
    </div>
  )
}

export default Subscribe