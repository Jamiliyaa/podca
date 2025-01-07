import React from 'react';
import style from '../sectioneone/Sectionone.module.scss';

const Sectioneone = () => {
  return (
    <div className={style.container}>
       <div className={style.textbox}>
         <h1>Episode 09: How To Create<br></br> Web Page Using Bootstrap 4</h1>
         <span>By Mike Smith | 16 September 2017 | 1:30:20</span>
         <br></br><button>Read The Transcript</button>
       </div>
    </div>
  )
}

export default Sectioneone