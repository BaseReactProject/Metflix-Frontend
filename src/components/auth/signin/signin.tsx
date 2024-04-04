import React, { useState } from 'react'
import './signin.css'
type Props = {}

const SignIn = (props: Props) => {
    const [signUpControl, setsignUpControl] = useState<boolean>(false)
    const [signUpFormData, setsignUpFormData] = useState({
        firstnamesignin: '',
        lastnamesignin: '',
        mailsignin: '',
        passwordsignin: '',
    });
    const handleSignUpInputChange = (e: any) => {
        const { name, value } = e.target;
        setsignUpFormData((prevsignUpFormData) => ({
            ...prevsignUpFormData,
            [name]: value,
        }));
    };

    const handleSignUpSubmit = (e: any) => {
        e.preventDefault();
        console.log(signUpFormData);
    };
    return (
        <>
            {!signUpControl ? (
                <div className="signUp signin">
                    <div className="content">
                        <h2>Kayıt Ol</h2>

                        <form onSubmit={handleSignUpSubmit} className="form">
                            <div className="inputBox">
                                <label htmlFor="firstnamesignin">İsminiz</label>
                                <input
                                    name='firstnamesignin'
                                    type="text"
                                    required
                                    placeholder='İsminiz'
                                    value={signUpFormData.firstnamesignin}
                                    onChange={handleSignUpInputChange}
                                />
                            </div>
                            <div className="inputBox">
                                <label htmlFor="lastnamesignin">Soyisminiz</label>
                                <input
                                    name='lastnamesignin'
                                    type="text"
                                    required
                                    placeholder='Soyisminiz'
                                    value={signUpFormData.lastnamesignin}
                                    onChange={handleSignUpInputChange}
                                />
                            </div>
                            <div className="inputBox">
                                <label htmlFor="mailsignin">E-Posta Adresi:</label>
                                <input
                                    name='mailsignin'
                                    type="email"
                                    required
                                    placeholder='E-posta Adresiniz'
                                    value={signUpFormData.mailsignin}
                                    onChange={handleSignUpInputChange}
                                />
                            </div>
                            <div className="inputBox">
                                <label htmlFor="passwordsignin">Şifreniz:</label>
                                <input
                                    type="password"
                                    name='passwordsignin'
                                    required
                                    placeholder='Şifreniz'
                                    value={signUpFormData.passwordsignin}
                                    onChange={handleSignUpInputChange}
                                />
                            </div>
                            <div className="links">
                                <a href="#"></a>
                                <a onClick={() => setsignUpControl(true)}>Giriş Yap</a>
                            </div>
                            <div className="inputBox">
                                <input type="submit" value="Giriş Yap" />
                            </div>
                        </form>

                    </div>

                </div>
            ) : (
                <div className=" signin">
                    <div className="content">
                        <h2>Giriş Yap</h2>

                        <form action='post' className="form">

                            <div className="inputBox">
                                <label htmlFor="mailsignin">E-Posta Adresi:</label>
                                <input name='mailsignin' type="text" required placeholder='E-posta Adresiniz' />

                            </div>
                            <div className="inputBox">
                                <label htmlFor="passwordsignin">Şifreniz:</label>
                                <input type="password" name='passwordsignin' required placeholder='Şifreniz' />

                            </div>

                            <div className="links"> <a href="#">Şifremi Unuttum</a> <a onClick={() => setsignUpControl(false)}>Kayıt Ol</a>

                            </div>

                            <div className="inputBox">

                                <input type="submit" value="Giriş Yap" />

                            </div>

                        </form>

                    </div>

                </div>
            )}



        </>
    )
}

export default SignIn