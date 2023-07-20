import React, {useEffect, useState} from 'react';
import { createPortal } from 'react-dom';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { useValidater } from '@/hooks/validate';
import style from './ModalWindowLogin.module.scss';
import { ModalWindowLogin } from '@/store/redusers/ModalWindowLogin';
import {UserReducers} from '@/store/redusers/User';
import { postRequest, postAuthRequest } from '@/api/server/postRequest';
import ModalWindowEror from './ModalWindowEror';

const ModalWindowLogins = ()=>{
    const [selectLogin, setSelectLogin] = useState(false);
    const [windowEror, setWindowEror] = useState(false);
    const [textEror, setTextEror] = useState('');
    const {modalShow} = useAppSelector(state => state.ModalWindowLogin);
    const userInputs = {
        SurnameUser:'',
        NameUser:'',
        NumberUser:'',
        EmailUser:'',
        PasswordUser:'',
        IdRole:1
    }
    const [loginData, setLoginData] = useState<{EmailUser:string, PasswordUser:string}>({
        EmailUser:'',
        PasswordUser:''
    });
    const [registerData, setRegisterData] = useState(userInputs);
    const dispatch = useAppDispatch();
    const validateEmaile = useValidater(/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu);
    const validatePhone = useValidater(/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/);

    const styleValidate = {
        blue:{ border:"solid 2px blue"},
        red:{ border:"solid 2px red"}
    }

    function validateNumberPhone(e, state, setState): void{
        setState({...state, NumberUser : (e.target.value.replace(/[^0-9]/g, "").substring(0, 11))});
    }

    async function onRegisterUser(e){
        if(validateEmaile(registerData.EmailUser)){
            if(validatePhone(registerData.NumberUser)){
                if(registerData.SurnameUser.length != 0 && registerData.NameUser.length != 0){
                    setWindowEror(false);
                const result = await postRequest('auth/register', {
                        Surname: registerData.SurnameUser,
                        Name: registerData.NameUser,
                        IdRole: registerData.IdRole,
                        EmailUsers: registerData.EmailUser,
                        NumberPhoneUsers: registerData.NumberUser,
                        PasswordUsers: registerData.PasswordUser,
                    });
                    if(result?.response?.data?.message){ 
                        setWindowEror(true);
                        setTextEror(result.response.data.message);
                     }else{
                        e.target.disabled = true; 
                        setWindowEror(true);
                        setTextEror('Пользователь создан!');
                        setTimeout(()=>{
                            setWindowEror(false);
                            setRegisterData(userInputs);
                            e.target.disabled = false; 
                        },2000) 
                    }
                }else{
                    setWindowEror(true);
                    setTextEror('Ошибка: Заполните все пустые поля');
                }
            }else{
                setWindowEror(true);
                setTextEror('Ошибка: Номер телефона не валиден');
            }
        }
        else{
            setWindowEror(true);
            setTextEror('Ошибка: email не валиден');
        }
    }

    async function onEnter(){
        if(loginData.EmailUser != '' && loginData.PasswordUser != '' ){
        const token = await postRequest('auth/login', {
            LoginUsers: loginData.EmailUser,
            PasswordUsers: loginData.PasswordUser
        });
    
            if(token.data?.token){
                const user = await postAuthRequest('users/user', token.data.token);
                dispatch(ModalWindowLogin.actions.cheked());
                document.querySelector('body').style.overflowY = 'scroll';
                setWindowEror(false); 
                dispatch(UserReducers.actions.cheked(user.data)); 
            }
            else{
                setWindowEror(true);
                setTextEror('Некоректный емэйл или пароль!');
            }
        }
        else{
            setWindowEror(true);
            setTextEror('Заполните пустые поля!');
        }

    }

    return(
        <>
        {modalShow &&  
        <div>
            <div onClick={()=>{ 
                dispatch(ModalWindowLogin.actions.cheked());
                setWindowEror(false);
                document.querySelector('body').style.overflowY = 'scroll';
            }} className={style.backgroundModalWindow}>
        </div>
        {windowEror && <ModalWindowEror textEror={textEror} />}
        {createPortal(
                <div className={style.modalBlock}>
                <p>Личный кабинет</p>
                <div className={style.selectsFormBtn}>
                    <button onClick={()=>setSelectLogin(false)} className={!selectLogin ? style.BtnActive : ''}>Вход</button>
                    <button onClick={()=>setSelectLogin(true)} className={selectLogin ? style.BtnActive : ''}>Регистрация</button>
                </div>
                {!selectLogin ?
                    <form onSubmit={(e)=>e.preventDefault()}>
                        <p>Ваш email *</p>
                        <div className={style.wrapperForm}>
                            <input 
                            type='text'
                            className={style.inputsFormLogin} 
                            value={loginData.EmailUser} 
                            onChange={e=>setLoginData({...loginData, EmailUser : e.target.value})} />
                        </div>
                        <p>Пароль *</p>
                        <div className={style.wrapperForm}>
                            <input 
                            type='password'
                            className={style.inputsFormLogin}
                            value={loginData.PasswordUser} 
                            onChange={e=>setLoginData({...loginData, PasswordUser : e.target.value})} />
                        </div>
                        <div className={style.wrapperForm}>
                            <button 
                            className={style.enterButton}
                            onClick={()=>onEnter()}>
                            Войти
                            </button>
                        </div>
                    </form>
                    :
                    <form onSubmit={(e)=>e.preventDefault()}>
                          <p>Ваша фамилия *</p>
                        <div className={style.wrapperForm}>
                            <input 
                            type='text' 
                            className={style.inputsFormRegister} 
                            value={registerData.SurnameUser}   
                            onChange={(e)=>setRegisterData({...registerData, SurnameUser : e.target.value})}
                            />
                        </div>
                        <p>Ваше имя *</p>
                        <div className={style.wrapperForm}>
                            <input 
                            type='text' 
                            className={style.inputsFormRegister}
                            value={registerData.NameUser}
                            onChange={(e)=>setRegisterData({...registerData, NameUser : e.target.value})}  
                            />
                        </div>
                        <p>Ваш номер телефона *</p>
                        <div className={style.wrapperForm}>
                            <input 
                            type='text' 
                            className={style.inputsFormRegister}  
                            value={registerData.NumberUser}
                            onChange={(e)=>validateNumberPhone(e, registerData, setRegisterData) }
                            />
                        </div>
                        <p>Ваш email *</p>
                        <div className={style.wrapperForm}>
                            <input 
                            type='text'
                            className={style.inputsFormRegister}  
                            value={registerData.EmailUser}
                            onChange={(e)=>setRegisterData({...registerData, EmailUser : e.target.value})}
                            />
                        </div>
                        <p>Ваш пароль *</p>
                        <div className={style.wrapperForm}>
                            <input 
                            type='text' 
                            className={style.inputsFormRegister}
                            value={registerData.PasswordUser}
                            onChange={(e)=>setRegisterData({...registerData, PasswordUser : e.target.value})}
                            />
                        </div>
                        <div className={style.wrapperForm}>
                            <button 
                            className={style.enterButton}
                            onClick={onRegisterUser} 
                            >Регистрация</button>
                        </div>
                    </form>
                    }
            </div>
           , document.querySelector("#__next")
        )}
        </div> 
        }
        
        </>     
    )
}

export default ModalWindowLogins;