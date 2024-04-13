import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import './profilelogin.css'
import authService from '../../../core/services/auth-service'
import { GetListAccountListItemDto, GetListAccountProfileListItemDto, GetListProfileListItemDto } from '../../../models/responses/responses'
import toastr from 'toastr'
import profileservice from '../../../services/profileservice'
import { CreateProfileCommand } from '../../../models/profilemodels'
import { AxiosError } from 'axios'
type Props = {}

const ProfileLogin = (props: Props) => {
    const [profiles, setprofiles] = useState<GetListAccountProfileListItemDto[]>();
    const [profileName, setprofileName] = useState<string | null>("");
    const [createPinCode, setCreatePinCode] = useState<string | null>("");
    const [createProfileControl, setcreateProfileControl] = useState<boolean>(false);
    const [profileId, setprofileId] = useState<number | undefined>(0);
    const [loginPassword, setloginPassword] = useState<string | null>("");
    const [loginProfileControl, setloginProfileControl] = useState<boolean>(false);

    const getProfiles = async () => {
        await authService.GetProfiles().then(r => { setprofiles(r); });
    }
    const handlePINInputChange = (event: any) => {
        const inputValue = event.target.value;
        const isNumeric = /^[0-9]+$/.test(inputValue);
        setCreatePinCode(event.target.value);
        if (!isNumeric) {
            event.target.value = "";
        }
    }
    const handleLoginPINInputChange = async (event: any) => {
        const inputValue = event.target.value;
        const isNumeric = /^[0-9]+$/.test(inputValue);
        setloginPassword(event.target.value);
        if (!isNumeric) {
            event.target.value = "";
        }else{
            if (event.target.value.length==4) {
               await handleLoginFormSubmit(inputValue);
            }
        }
    }
    const handleProfileNameInputChange = (event: any) => {
        const inputValue = event.target.value;
        setprofileName(event.target.value);
        if (inputValue.length == 30) {
            alert("30 haneden fazla olamaz")
        }
    }
    const handleFormSubmit = async (e: any) => {
        if (profileName && (profileName?.length >= 30 || profileName.length <= 2)) {
            alert("Profil adı 2 haneden yüksek 30 haneden az olmalı");
        } else if (createPinCode && (createPinCode.length != 4)) {
            alert("Pin kodu 4 haneden az veya çok olamaz");
        } else {
            if (profileName && createPinCode) {
                let createProfile: CreateProfileCommand = {
                    name: profileName,
                    password: createPinCode
                };
                await profileservice.add(createProfile).then((r: any) => {
                    if (r.name == "AxiosError") {
                        alert("Bir Sorun Oluştu");
                    } else {
                        window.location.href = "profileloginpage";
                    }
                });
            }

        }
    }
    const handleLoginFormSubmit=async (e:any)=>{
       if (loginPassword && (e.length != 4)) {
            alert("Pin kodu 4 haneden az veya çok olamaz");
        } else {
            if (loginPassword&&profileId) {
                await authService.ProfileLogin(profileId,e).then((r: any) => {
                });
            }

        }
    }

    useEffect(() => {

        getProfiles()
    }, [])


    return (
        <>
            <div className="profilelogin">
                <div className="content" style={{ display: 'flex', flexDirection: 'column' }}>
                    <h1>Profilini Seç</h1>

                    <div className="profilerow">
                        {/* <img src="https://occ-0-7329-1490.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABb81BxMNuz7x4Bt4RAxNIgMh7pbVFbyz41I_IQECtHpk_kZPBAdycxiJOgjo6l2lWKtPJrL4MsjQkrwg4oH4QcMYhE38863oceg0.png" alt="" /> */}
                        {profiles?.map(accountProfile => (
                            <div className="profilecontainer" >
                                <a onClick={() => { setprofileId(accountProfile.profile?.id); setloginProfileControl(true); }}>
                                    <img src={accountProfile.profile?.image?.imageUrl} alt="" />
                                    <h2>{accountProfile.profile?.name}</h2>
                                </a>
                                {/* <input type="button" onClick={handleFormSubmit} value={"Düzenle"}  style={{width:'70%',height:'8%'}}className="edit-profile" tabIndex={0} data-uia="pin-number-0" /> */}
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="svg-icon svg-icon-profile-lock ltr-4z3qvp e1svuwfo1" data-name="Lock" aria-labelledby=":r1:" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M7 6C7 3.23858 9.23858 1 12 1C14.7614 1 17 3.23858 17 6V7H19C20.1046 7 21 7.89543 21 9V18.6529C21 19.6274 20.2885 20.4855 19.2814 20.6076C18.0287 20.7593 15.492 21 12 21C8.50801 21 5.97128 20.7593 4.71855 20.6076C3.71153 20.4855 3 19.6274 3 18.6529V9C3 7.89543 3.89543 7 5 7H7V6ZM15 6V7H9V6C9 4.34315 10.3431 3 12 3C13.6569 3 15 4.34315 15 6ZM5 9V18.627C6.19927 18.7708 8.63769 19 12 19C15.3623 19 17.8007 18.7708 19 18.627V9H5ZM11 12V16H13V12H11Z" fill="currentColor"></path></svg>
                            </div>
                        ))}
                        {profiles && profiles?.length < 5 && (
                            <div className="profilecontainer" onClick={() => setcreateProfileControl(true)}>
                                <a title='Profil Ekle'>
                                    <img src={"https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../releases/preview/2012/png/iconmonstr-plus-4.png&r=0&g=255&b=0"} alt="" />
                                    <h2 style={{ alignItems: 'center', justifyContent: 'center' }} >{"Ekle"}</h2>
                                </a>
                            </div>
                        )}
                    </div>

                </div>
            </div>


            {
                createProfileControl && (
                    <div className='profiles-create-container'>
                        <div className="centered-div profile-pin-prompt">
                            <h1 className="profile-pin-prompt-label">Profil Oluşturun.</h1>
                            <input type="text" onChange={handleProfileNameInputChange} maxLength={30} placeholder='Profil Adını Giriniz' className="pin-number-input" tabIndex={0} data-uia="pin-number-0" aria-label="PIN&nbsp;Kodu Girişi 1." />
                            <input type="tel" onChange={handlePINInputChange} style={{ width: '50%' }} maxLength={4} placeholder='PIN Kodu' className="pin-number-input" tabIndex={0} data-uia="pin-number-0" aria-label="PIN&nbsp;Kodu Girişi 1." />
                            <p className="pin-input-error">PIN kodunuz 4 rakamdan oluşmalıdır.</p>
                            <input type="button" onClick={handleFormSubmit} value={"Oluştur"} style={{ width: '50%' }} className="pin-number-input" tabIndex={0} data-uia="pin-number-0" />
                            <input type="button" onClick={() => setcreateProfileControl(false)} value={"Kapat"} style={{ width: '20%', height: '3% !important', color: 'red' }} className="pin-number-input" tabIndex={0} />
                        </div>
                    </div>
                )
            }
            {
                loginProfileControl && (
                    <div className='profiles-create-container'>
                        <div className="centered-div profile-pin-prompt">
                       
                            <div className="profile-pin-prompt-status">Profil Kilidi özelliği açık.</div>
                            <h1 className="profile-pin-prompt-label">Bu profile erişmek için PIN kodunu girin.</h1>

                            <div className="profile-pin-prompt-pad-wrapper">
                                <div className="pin-input-container">
                                    <input type="text" maxLength={4} onChange={handleLoginPINInputChange} className="pin-number-input" tabIndex={0} />

                                </div>
                                <p className="pin-input-error">PIN kodunuz 4 rakamdan oluşmalıdır.</p>
                                <div className="profile-pin-dismiss" onClick={()=>setloginProfileControl(false)}><a href="#"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="svg-icon svg-icon-close ltr-4z3qvp e1svuwfo1" data-name="X" aria-labelledby=":r1g:" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.5858 12L2.29291 3.70706L3.70712 2.29285L12 10.5857L20.2929 2.29285L21.7071 3.70706L13.4142 12L21.7071 20.2928L20.2929 21.7071L12 13.4142L3.70712 21.7071L2.29291 20.2928L10.5858 12Z" fill="currentColor"></path></svg></a></div>
                            </div>
                        </div>
                    </div>
                )
            }


        </>

    )
}

export default ProfileLogin




