import React from 'react';
import style from '../guests/Guests.module.scss';

const Guests = () => {
  return (
    <div className={style.container}>
      <div className={style.abouts1}>
        <img src="https://preview.colorlib.com/theme/podca/images/person_1.jpg"alt=""/><br></br>
        <span>Megan Smith<br></br>Lorem, ipsum dolor sit amet<br></br> consectetur adipisicing elit. Ullam nulla voluptates sit quas tenetur placeat aliquam, architecto ab modi sed atque sint dignissimos sapiente fugiat eius earum reiciendis doloremque. Vitae.</span>
      </div>
      <div className={style.abouts2}>
        <img src="https://preview.colorlib.com/theme/podca/images/person_2.jpg"alt=""/><br></br>
        <span>Brook Cagle<br></br>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam nulla voluptates sit quas tenetur placeat aliquam, architecto ab modi sed atque sint dignissimos sapiente fugiat eius earum reiciendis doloremque. Vitae.</span>
      </div>
      <div className={style.abouts3}>
        <img src="https://preview.colorlib.com/theme/podca/images/person_3.jpg"alt=""/><br></br>
        <span>Philip Martin<br></br>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam nulla voluptates sit quas tenetur placeat aliquam, architecto ab modi sed atque sint dignissimos sapiente fugiat eius earum reiciendis doloremque. Vitae.</span>
      </div>
    </div>
  )
}

export default Guests