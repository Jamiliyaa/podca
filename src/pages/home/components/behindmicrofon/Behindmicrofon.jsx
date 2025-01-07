import React from 'react';
import style from '../behindmicrofon/Behindmicrofon.module.scss';

const Behindmicrofon = () => {
    return (
        <div className={style.container}>
            <div className={style.textbox}>
                <h1>Behind The Mic</h1>
            </div>
            <div className={style.photoesbox}>
                <div className={style.  photoes}>
                    <img src="https://preview.colorlib.com/theme/podca/images/person_1.jpg" alt="girl" />
                    <img src="https://preview.colorlib.com/theme/podca/images/person_2.jpg" alt="girl" />
                    <img src="https://preview.colorlib.com/theme/podca/images/person_3.jpg" alt="boy" />
                    <img src="https://preview.colorlib.com/theme/podca/images/person_4.jpg" alt="boy" />
                    <img src="https://preview.colorlib.com/theme/podca/images/person_5.jpg" alt="boy" />
                    <img src="https://preview.colorlib.com/theme/podca/images/person_6.jpg" alt="girl" />
                </div>
            </div>
        </div>
    )
}

export default Behindmicrofon