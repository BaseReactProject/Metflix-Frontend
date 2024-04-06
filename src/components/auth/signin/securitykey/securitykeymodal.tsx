import React, { useState } from 'react'
import './securitykeymodal.css'
import authService from '../../../../core/services/auth-service';
import { VerifyEmailAuthenticatorModel } from '../../../../core/models/EmailModels';
import { useSelector, useDispatch } from 'react-redux'
import { closeSecurityModal } from '../../../../store/slices/auth/securityModalSlice';
import toastr from 'toastr'

type Props = {}

const SecurityKeyModal = (props: Props) => {
  const [signUpControl, setsignUpControl] = useState(false);
  const [securityKey, setsecurityKey] = useState<string>();
  const modalControl = useSelector((state: any) => state.securityModalControl.task);
  const dispatch = useDispatch();
  const handleModalClose = () => {
    dispatch(closeSecurityModal());
  };

  const handleInputChange = (e: any) => {
    setsecurityKey(e.target.value);
  };

  const handleSecurityFormSubmit = async (e: any) => {
    e.preventDefault();
    if (securityKey != null) {
      let verifyEmailModel: VerifyEmailAuthenticatorModel = { activationKey: securityKey };
      await authService.VerifyEmailAuthenticator(verifyEmailModel)
        .then((r:any) => {
          console.log(r);
          
           if(r.status ==500){
            toastr.error("Hatalı Bir Kod Girdiniz lütfen tekrar deneyiniz")
           }else if (r.status==200){
            toastr.success("İşlem Başarılı Giriş Yapabilirsiniz.");
            handleModalClose();
           }
           
        })
        .catch(r =>
          {
            toastr.success("Hatalı Bir Kod Girdiniz lütfen tekrar deneyiniz.");
         
        }
        );
    }
  }
  return (
    <>
      {modalControl && (
        <div style={{ width: '100%', position: 'fixed', height: "100%", backgroundColor: 'rgba(0, 0, 0, 0.7)', zIndex: '1001', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

          <div className="securityKeyModal">
            <div className="content">
              <h2>E-Mail'ine Bir Doğrulama Kodu Gönderdik</h2>

              <form action='post' onSubmit={handleSecurityFormSubmit} name='login' className="form">

                <div className="inputBox" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                  <label htmlFor="securityKey">Doğrulama Kodunuzu Aşağıdaki Kısma Giriniz</label>
                  <br />
                  <input type="text" value={securityKey} onChange={handleInputChange} style={{ width: '30%', alignItems: 'center' }} required placeholder='Doğrulama Kodunuz' />

                </div>
                {/* doing another time<div className="links"> <a href="#"></a> <a onClick={() => setsignUpControl(false)}>Tekrar Kod Gönder</a> */}
                {/* 
             </div> */}
                <div className="inputBox">

                  <input type="submit" value="Onayla" />

                </div>

              </form>

            </div>

          </div>
        </div>
      )}
    </>

  )
}

export default SecurityKeyModal


