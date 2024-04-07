import React, { ChangeEvent, FormEvent, useState } from 'react'
import './updatepassword.css';
import authService from '../../../core/services/auth-service';
import { UpdateUserPasswordDto } from '../../../core/models/UserModels';
type Props = {
    fakeId:string|undefined;
}

const UpdatePassword = (props: Props) => {
    const [password, setPassword] = useState<string>("");

    async function  handleSignInSubmit(event: FormEvent<HTMLFormElement>){
        event.preventDefault();
        if (props.fakeId!==undefined) {
            const updatePwCmnd:UpdateUserPasswordDto={fakeId:props.fakeId,password:password};
            await authService.UpdatePassword(updatePwCmnd,"authpage");
        }
       
    }

    function handleInputChange(event: ChangeEvent<HTMLInputElement>): void {
        setPassword(event.target.value);
    }

  return (
    <div className=" updatePassword">
                    <div className="content">
                        <h2>Şifreni Güncelle</h2>

                        <form action='post' name='login' onSubmit={handleSignInSubmit} className="form">

                            <div className="inputBox">
                                <label htmlFor="password">Yeni Şifreniz:</label>
                                <input name='password' type="text" onChange={handleInputChange} required placeholder='Yeni Şifreniz' />

                            </div>

                            <div className="inputBox">

                                <input type="submit" value="Güncelle" />
                                <input type="button" onClick={()=>window.location.href="/authpage"} value="Giriş Sayfası" />
                            </div>

                        </form>

                    </div>

                </div>
  )
}

export default UpdatePassword