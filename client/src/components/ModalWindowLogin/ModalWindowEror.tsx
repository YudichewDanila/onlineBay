import { FC } from 'react';
import style from './ModalWindowLogin.module.scss';

const ModalWindowEror = ({textEror})=>{
    return(
        <div className={style.modalEror}>
            {textEror}
        </div>
    )
}

export default ModalWindowEror;