import React, { useState } from 'react'
import './forgetPassword.css'
import authService from '../../../../core/services/auth-service';
import { VerifyEmailAuthenticatorModel } from '../../../../core/models/EmailModels';
import { useSelector, useDispatch } from 'react-redux'
import { closeForgetPwModal } from '../../../../store/slices/auth/forgetPasswordModalSlice';
import toastr from 'toastr'

type Props = {}

const ForgetPasswordModal = (props: Props) => {
  const [forgetPassword, setforgetPassword] = useState<string>();
  const modalControl = useSelector((state: any) => state.forgetPwModalControl.task);
  const dispatch = useDispatch();
  const handleModalClose = () => {
    dispatch(closeForgetPwModal());
  };

  const handleInputChange = (e: any) => {
    setforgetPassword(e.target.value);
  };

  const handleForgetPasswordFormSubmit = async (e: any) => {
    e.preventDefault();
  
    if (forgetPassword != null) {
      console.log(forgetPassword);
      
      await authService.ForgetPassword(forgetPassword)
        .then((r:any) => {
            handleModalClose();
           
        }).catch((r)=>console.log(r)
        )
    }
  }
  return (
    <>
      {modalControl && (
        <div style={{ width: '100%', position: 'fixed', height: "100%", backgroundColor: 'rgba(0, 0, 0, 0.7)', zIndex: '1001', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

          <div className="forgetPasswordModal">
            <div className="content">
              <h2>Lütfen Emailini Gir</h2>

              <form action='post' onSubmit={handleForgetPasswordFormSubmit} name='login' className="form">

                <div className="inputBox" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                  <label htmlFor="forgetPassword">Doğrulama Kodunuzu Aşağıdaki Kısma Giriniz</label>
                  <br />
                  <input type="text" value={forgetPassword} onChange={handleInputChange} style={{ width: '60%', alignItems: 'center' }} required placeholder='E-Mail Adresiniz' />

                </div>
                {/* doing another time<div className="links"> <a href="#"></a> <a onClick={() => setsignUpControl(false)}>Tekrar Kod Gönder</a> */}
                {/* 
             </div> */}
                <div className="inputBox">

                  <input type="submit" value="Onayla" />
                  
                </div>  
                <div className="inputBox">

                  <input onClick={()=>dispatch(closeForgetPwModal())} type="button" style={{marginLeft:'35%',width:'30%',justifyContent:'center',alignItems:'center'}} value="Kapat" />
                  
                </div>  

              </form>

            </div>

          </div>
        </div>
      )}
    </>

  )
}

export default ForgetPasswordModal


