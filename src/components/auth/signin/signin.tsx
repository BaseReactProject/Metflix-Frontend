import React, { useState } from 'react'
import './signin.css'
import { UserForLoginDto, UserForRegisterDto } from '../../../core/models/UserModels'
import authService from '../../../core/services/auth-service'
import SecurityKeyModal from './securitykey/securitykeymodal'
import { useDispatch } from 'react-redux'
import { openSecurityModal } from '../../../store/slices/auth/securityModalSlice'
import { openForgetPwModal } from '../../../store/slices/auth/forgetPasswordModalSlice'
import ForgetPasswordModal from './forgetpassword/forgetpasswordmodal'
type Props = {}

const SignIn = (props: Props) => {
    const [signUpControl, setsignUpControl] = useState<boolean>(false);
    const dispatch = useDispatch();
    const [signUpFormData, setsignUpFormData] = useState<UserForRegisterDto>({
        email: "",
        password: "",
        firstName: "",
        lastName: "",
    });
    const [signInFormData, setsignInFormData] = useState<UserForLoginDto>({
        email: "",
        password: "",
        authenticatorCode:null
    });

    const handleSignUpInputChange = (e: any) => {
        const { name, value } = e.target;
        setsignUpFormData((prevsignUpFormData) => ({
            ...prevsignUpFormData,
            [name]: value,
        }));
    };

    const handleSignUpSubmit = async (e: any)  => {
        e.preventDefault();
       await authService.Register(signUpFormData).then((r)=>dispatch(openSecurityModal())).catch((r)=>console.log(r));
    };

    const handleSignInInputChange = (e: any) => {
        const { name, value } = e.target;
        setsignInFormData((prevsignUpFormData) => ({
            ...prevsignUpFormData,
            [name]: value,
        }));
    };
    const handleSignInSubmit = async (e: any)  => {
        e.preventDefault();
       await authService.Login(signInFormData,"mainpage");
    };
    return (
        <>
            {!signUpControl ? (
                <div className="signUp signin">
                    <div className="content">
                        <h2>Kayıt Ol</h2>

                        <form onSubmit={handleSignUpSubmit} name='signUp' className="form">
                            <div className="inputBox">
                                <label htmlFor="firstName">İsminiz</label>
                                <input
                                    name='firstName'
                                    type="text"
                                    required
                                    placeholder='İsminiz'
                                    onChange={handleSignUpInputChange}
                                />
                            </div>
                            <div className="inputBox">
                                <label htmlFor="lastName">Soyisminiz</label>
                                <input
                                    name='lastName'
                                    type="text"
                                    required
                                    placeholder='Soyisminiz'
                                    onChange={handleSignUpInputChange}
                                />
                            </div>
                            <div className="inputBox">
                                <label htmlFor="email">E-Posta Adresi:</label>
                                <input
                                    name='email'
                                    type="email"
                                    required
                                    placeholder='E-posta Adresiniz'
                                    onChange={handleSignUpInputChange}
                                />
                            </div>
                            <div className="inputBox">
                                <label htmlFor="password">Şifreniz:</label>
                                <input
                                    type="password"
                                    name='password'
                                    required
                                    placeholder='Şifreniz'
                                    onChange={handleSignUpInputChange}
                                />
                            </div>
                            <div className="links">
                                <a href="#"></a>
                                <a onClick={() => setsignUpControl(true)}>Giriş Yap</a>
                            </div>
                            <div className="inputBox">
                                <input type="submit" value="Kayıt Ol" />
                            </div>
                        </form>

                    </div>

                </div>
            ) : (
                <div className=" signin">
                    <div className="content">
                        <h2>Giriş Yap</h2>

                        <form action='post' name='login' onSubmit={handleSignInSubmit} className="form">

                            <div className="inputBox">
                                <label htmlFor="email">E-Posta Adresi:</label>
                                <input name='email' type="text" onChange={handleSignInInputChange} required placeholder='E-posta Adresiniz' />

                            </div>
                            <div className="inputBox">
                                <label htmlFor="password">Şifreniz:</label>
                                <input type="password" name='password' onChange={handleSignInInputChange} required placeholder='Şifreniz' />

                            </div>

                            <div className="links"> <a href="#" onClick={()=>dispatch(openForgetPwModal())}>Şifremi Unuttum</a> <a onClick={() => setsignUpControl(false)}>Kayıt Ol</a>

                            </div>

                            <div className="inputBox">

                                <input type="submit" value="Giriş Yap" />

                            </div>

                        </form>

                    </div>

                </div>
            )}
            <SecurityKeyModal/>
            <ForgetPasswordModal/>



        </>
    )
}

export default SignIn