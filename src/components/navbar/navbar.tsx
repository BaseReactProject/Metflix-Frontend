import { useState } from 'react'
import SearchBox from '../searchbox/searchbox'
import './navbar.css'
import authService from '../../core/services/auth-service'

type Props = {}

const Navbar = (props: Props) => {
  const [profileTabControl, setprofileTabControl] = useState<boolean>(false);
  return (
    <>
      <div className="pinningHeader">
        <div className="pinningHeaderContainer">
          {/* <div style={{overflow:'auto'}}></div> */}
          <div className="mainHeader" >
           
            <img style={{width:'10%',height:'80%'}} src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" className="logo icon-logoUpdate active"/>
           
            <ul className="tabbed-primary-navigation">
              <li className="navigation-menu">
                <a className="menu-trigger" role="button" aria-haspopup="true" href="#" tabIndex={0}>Göz at</a>
              </li>
              <li className="navigation-tab">
                <a href="#" className="current active" >Anasayfa</a>
              </li>
              <li className="navigation-tab">
                <a href="/browse/genre/83" >Diziler</a>
              </li>
              <li className="navigation-tab">
                <a href="/browse/genre/83" >Filmler</a>
              </li>
              <li className="navigation-tab">
                <a href="/browse/genre/83" >Yeni ve Popüler</a>
              </li>
              <li className="navigation-tab">
                <a href="/browse/genre/83" >Listem</a>
              </li>
            </ul>
            <div className="secondary-navigation">
              <div className="nav-element">
                <SearchBox />
              </div>
              <div className="nav-element">
                <span className="notifications">
                  <button className="notifications-menu" aria-haspopup="true" aria-expanded="false" aria-label="Bildirimler">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ltr-4z3qvp e1svuwfo1" data-name="Bell" aria-labelledby=":Rlp94m:" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.0002 4.07092C16.3924 4.55624 19 7.4736 19 11V15.2538C20.0489 15.3307 21.0851 15.4245 22.1072 15.5347L21.8928 17.5232C18.7222 17.1813 15.4092 17 12 17C8.59081 17 5.27788 17.1813 2.10723 17.5232L1.89282 15.5347C2.91498 15.4245 3.95119 15.3307 5.00003 15.2538V11C5.00003 7.47345 7.60784 4.55599 11.0002 4.07086V2H13.0002V4.07092ZM17 15.1287V11C17 8.23858 14.7614 6 12 6C9.2386 6 7.00003 8.23858 7.00003 11V15.1287C8.64066 15.0437 10.3091 15 12 15C13.691 15 15.3594 15.0437 17 15.1287ZM8.62593 19.3712C8.66235 20.5173 10.1512 22 11.9996 22C13.848 22 15.3368 20.5173 15.3732 19.3712C15.3803 19.1489 15.1758 19 14.9533 19H9.0458C8.82333 19 8.61886 19.1489 8.62593 19.3712Z" fill="white"></path></svg>
                  </button></span>
              </div>
              <div className="nav-element">
                <div className="account-menu-item">
                  <div className="account-dropdown-button" onClick={()=>setprofileTabControl(!profileTabControl)}>
                    <a  role="button" tabIndex={0} aria-haspopup="true" aria-expanded="false" aria-label="Metin Koyuncu - Hesap ve Ayarlar">
                      <span className="profile-link" role="presentation">
                        <img className="profile-icon" src="https://occ-0-7329-1490.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTvTV1d97HoOuutIG9GUEJgNIhg89JU3EQmtIikzdqolTLHSDqxwytfl61TC-HlrVt7QrzxdB5xR3nD2CPKNL9TF3qKTmcI.png?r=cad" alt="" />
                      </span>
                    </a>
                    <span className={ profileTabControl?"active caret":"caret"} role="presentation"></span>
                  </div>
                  {profileTabControl&&(<div onMouseLeave={()=>setprofileTabControl(false)} className="account-drop-down sub-menu theme-lakira" role='menu' tabIndex={0} style={{ opacity: "1", transitionDuration: '150ms' }}>
                    <div className="ptrack-content">
                      <div className="topbar"></div>
                      <ul className="sub-menu-list profiles" role='list' aria-label='Profiller'>
                        <li className="sub-menu-item profile" role='listItem'>
                          <div >
                            <div className="profile-link" tabIndex={0}>
                              <div className="avatar-wrapper">
                                <img className="profile-icon" src="https://occ-0-7329-1490.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABVC11njRAccYpkkyuBsUHtOOKYFGkwSR5W17rS9AcsA928D5_xgxoWHbUZESUThei8tFV3So6eTfjsvn0RRqN3kuxbq7KCI.png?r=59d" alt="" />
                              </div>
                              <span className="profile-name">TAHA KAYA</span>
                            </div>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="svg-icon svg-icon-profile-lock ltr-4z3qvp e1svuwfo1" data-name="Lock" aria-labelledby=":r88:" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M7 6C7 3.23858 9.23858 1 12 1C14.7614 1 17 3.23858 17 6V7H19C20.1046 7 21 7.89543 21 9V18.6529C21 19.6274 20.2885 20.4855 19.2814 20.6076C18.0287 20.7593 15.492 21 12 21C8.50801 21 5.97128 20.7593 4.71855 20.6076C3.71153 20.4855 3 19.6274 3 18.6529V9C3 7.89543 3.89543 7 5 7H7V6ZM15 6V7H9V6C9 4.34315 10.3431 3 12 3C13.6569 3 15 4.34315 15 6ZM5 9V18.627C6.19927 18.7708 8.63769 19 12 19C15.3623 19 17.8007 18.7708 19 18.627V9H5ZM11 12V16H13V12H11Z" fill="white"></path></svg>
                            <div className="profile-children"></div>
                          </div>
                        </li>
                        <li className="sub-menu-item profile" role='listItem'>
                          <div >
                            <div className="profile-link" tabIndex={0}>
                              <div className="avatar-wrapper">
                                <img className="profile-icon" src="https://occ-0-7329-1490.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABVC11njRAccYpkkyuBsUHtOOKYFGkwSR5W17rS9AcsA928D5_xgxoWHbUZESUThei8tFV3So6eTfjsvn0RRqN3kuxbq7KCI.png?r=59d" alt="" />
                              </div>
                              <span className="profile-name">TAHA KAYA</span>
                            </div>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="svg-icon svg-icon-profile-lock ltr-4z3qvp e1svuwfo1" data-name="Lock" aria-labelledby=":r88:" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M7 6C7 3.23858 9.23858 1 12 1C14.7614 1 17 3.23858 17 6V7H19C20.1046 7 21 7.89543 21 9V18.6529C21 19.6274 20.2885 20.4855 19.2814 20.6076C18.0287 20.7593 15.492 21 12 21C8.50801 21 5.97128 20.7593 4.71855 20.6076C3.71153 20.4855 3 19.6274 3 18.6529V9C3 7.89543 3.89543 7 5 7H7V6ZM15 6V7H9V6C9 4.34315 10.3431 3 12 3C13.6569 3 15 4.34315 15 6ZM5 9V18.627C6.19927 18.7708 8.63769 19 12 19C15.3623 19 17.8007 18.7708 19 18.627V9H5ZM11 12V16H13V12H11Z" fill="white"></path></svg>
                            <div className="profile-children"></div>
                          </div>
                        </li>
                        <li className="sub-menu-item profile" role='listItem'>
                          <div >
                            <div className="profile-link" tabIndex={0}>
                              <div className="avatar-wrapper">
                                <img className="profile-icon" src="https://occ-0-7329-1490.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABVC11njRAccYpkkyuBsUHtOOKYFGkwSR5W17rS9AcsA928D5_xgxoWHbUZESUThei8tFV3So6eTfjsvn0RRqN3kuxbq7KCI.png?r=59d" alt="" />
                              </div>
                              <span className="profile-name">TAHA KAYA</span>
                            </div>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="svg-icon svg-icon-profile-lock ltr-4z3qvp e1svuwfo1" data-name="Lock" aria-labelledby=":r88:" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M7 6C7 3.23858 9.23858 1 12 1C14.7614 1 17 3.23858 17 6V7H19C20.1046 7 21 7.89543 21 9V18.6529C21 19.6274 20.2885 20.4855 19.2814 20.6076C18.0287 20.7593 15.492 21 12 21C8.50801 21 5.97128 20.7593 4.71855 20.6076C3.71153 20.4855 3 19.6274 3 18.6529V9C3 7.89543 3.89543 7 5 7H7V6ZM15 6V7H9V6C9 4.34315 10.3431 3 12 3C13.6569 3 15 4.34315 15 6ZM5 9V18.627C6.19927 18.7708 8.63769 19 12 19C15.3623 19 17.8007 18.7708 19 18.627V9H5ZM11 12V16H13V12H11Z" fill="white"></path></svg>
                            <div className="profile-children"></div>
                          </div>
                        </li>
                        <li className="sub-menu-item profile" role='listItem'>
                          <div >
                            <div className="profile-link" tabIndex={0}>
                              <div className="avatar-wrapper">
                                <img className="profile-icon" src="https://occ-0-7329-1490.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABVC11njRAccYpkkyuBsUHtOOKYFGkwSR5W17rS9AcsA928D5_xgxoWHbUZESUThei8tFV3So6eTfjsvn0RRqN3kuxbq7KCI.png?r=59d" alt="" />
                              </div>
                              <span className="profile-name">TAHA KAYA</span>
                            </div>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="svg-icon svg-icon-profile-lock ltr-4z3qvp e1svuwfo1" data-name="Lock" aria-labelledby=":r88:" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M7 6C7 3.23858 9.23858 1 12 1C14.7614 1 17 3.23858 17 6V7H19C20.1046 7 21 7.89543 21 9V18.6529C21 19.6274 20.2885 20.4855 19.2814 20.6076C18.0287 20.7593 15.492 21 12 21C8.50801 21 5.97128 20.7593 4.71855 20.6076C3.71153 20.4855 3 19.6274 3 18.6529V9C3 7.89543 3.89543 7 5 7H7V6ZM15 6V7H9V6C9 4.34315 10.3431 3 12 3C13.6569 3 15 4.34315 15 6ZM5 9V18.627C6.19927 18.7708 8.63769 19 12 19C15.3623 19 17.8007 18.7708 19 18.627V9H5ZM11 12V16H13V12H11Z" fill="white"></path></svg>
                            <div className="profile-children"></div>
                          </div>
                        </li>
                      </ul>
                      <ul className="sub-menu-list responsive-links"></ul>
                      <ul className="account-links sub-menu-list">
                        <li className="sub-menu-item profile-link" role='listItem'>
                          <a  className="sub-menu-link sub-menu-link-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-mirrorinrtl="true" className="ltr-4z3qvp e1svuwfo1" data-name="Pencil" aria-labelledby=":ral:" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M19.1213 1.7071C17.9497 0.535532 16.0503 0.53553 14.8787 1.7071L13.2929 3.29289L12.5858 4L1.58579 15C1.21071 15.3751 1 15.8838 1 16.4142V21C1 22.1046 1.89543 23 3 23H7.58579C8.11622 23 8.62493 22.7893 9 22.4142L20 11.4142L20.7071 10.7071L22.2929 9.12132C23.4645 7.94975 23.4645 6.05025 22.2929 4.87868L19.1213 1.7071ZM15.5858 7L14 5.41421L3 16.4142L3 19C3.26264 19 3.52272 19.0517 3.76537 19.1522C4.00802 19.2527 4.2285 19.4001 4.41421 19.5858C4.59993 19.7715 4.74725 19.992 4.84776 20.2346C4.94827 20.4773 5 20.7374 5 21L7.58579 21L18.5858 10L17 8.41421L6.70711 18.7071L5.29289 17.2929L15.5858 7ZM16.2929 3.12132C16.6834 2.73079 17.3166 2.73079 17.7071 3.12132L20.8787 6.29289C21.2692 6.68341 21.2692 7.31658 20.8787 7.7071L20 8.58578L15.4142 4L16.2929 3.12132Z" fill="currentColor"></path></svg>
                            <span>Profil Yönetimi</span>
                          </a>
                        </li>
                        <li className="sub-menu-item profile-link" role='listItem'>
                          <a onClick={()=>authService.LogOut("authpage")} className="sub-menu-link sub-menu-link-icon">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-mirrorinrtl="true" className="ltr-4z3qvp e1svuwfo1" data-name="LinkOut" aria-labelledby=":rbm:" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M4 2C2.89543 2 2 2.89543 2 4V20C2 21.1046 2.89543 22 4 22H20C21.1046 22 22 21.1046 22 20V12H20V20H4V4L12 4V2H4ZM15 4H18.5858L9.29289 13.2929L10.7071 14.7071L20 5.41421V9H22V3C22 2.44772 21.5523 2 21 2H15V4Z" fill="currentColor"></path></svg>
                            <span>Profilden Çık</span>
                          </a>
                        </li>
                        <li className="sub-menu-item profile-link" role='listItem'>
                          <a href="" className="sub-menu-link sub-menu-link-icon">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ltr-4z3qvp e1svuwfo1" data-name="User" aria-labelledby=":r1v:" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M15 5C15 6.65685 13.6569 8 12 8C10.3431 8 9 6.65685 9 5C9 3.34315 10.3431 2 12 2C13.6569 2 15 3.34315 15 5ZM17 5C17 7.76142 14.7614 10 12 10C9.23858 10 7 7.76142 7 5C7 2.23858 9.23858 0 12 0C14.7614 0 17 2.23858 17 5ZM4 21C4 16.5817 7.58172 13 12 13C16.4183 13 20 16.5817 20 21V21.5136C19.5678 21.5667 18.9844 21.6327 18.2814 21.6988C16.6787 21.8495 14.461 22 12 22C9.53901 22 7.32131 21.8495 5.71861 21.6988C5.01564 21.6327 4.43224 21.5667 4 21.5136V21ZM21.1508 23.3775C21.1509 23.3774 21.151 23.3774 21 22.3889L21.151 23.3774C21.6393 23.3028 22 22.8829 22 22.3889V21C22 15.4772 17.5228 11 12 11C6.47715 11 2 15.4772 2 21V22.3889C2 22.8829 2.36067 23.3028 2.84897 23.3774L3 22.3889C2.84897 23.3774 2.84908 23.3774 2.8492 23.3775L2.84952 23.3775L2.85043 23.3776L2.85334 23.3781L2.86352 23.3796L2.90103 23.3852C2.93357 23.3899 2.98105 23.3968 3.04275 23.4055C3.16613 23.4228 3.3464 23.4472 3.57769 23.4765C4.04018 23.535 4.7071 23.6126 5.5314 23.6901C7.1787 23.8449 9.461 24 12 24C14.539 24 16.8213 23.8449 18.4686 23.6901C19.2929 23.6126 19.9598 23.535 20.4223 23.4765C20.6536 23.4472 20.8339 23.4228 20.9573 23.4055C21.0189 23.3968 21.0664 23.3899 21.099 23.3852L21.1365 23.3796L21.1467 23.3781L21.1496 23.3776L21.1505 23.3775L21.1508 23.3775Z" fill="currentColor"></path></svg>
                            <span>Hesap</span>
                          </a>
                        </li>
                        <li className="sub-menu-item profile-link" role='listItem'>
                          <a href="" className="sub-menu-link sub-menu-link-icon">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ltr-4z3qvp e1svuwfo1" data-name="CircleQuestionMark" aria-labelledby=":r20:" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0ZM12 8C10.6831 8 10 8.74303 10 9.5H8C8 7.25697 10.0032 6 12 6C13.9968 6 16 7.25697 16 9.5C16 10.8487 14.9191 11.7679 13.8217 12.18C13.5572 12.2793 13.3322 12.4295 13.1858 12.5913C13.0452 12.7467 13 12.883 13 13V14H11V13C11 11.5649 12.1677 10.6647 13.1186 10.3076C13.8476 10.0339 14 9.64823 14 9.5C14 8.74303 13.3169 8 12 8ZM13.5 16.5C13.5 17.3284 12.8284 18 12 18C11.1716 18 10.5 17.3284 10.5 16.5C10.5 15.6716 11.1716 15 12 15C12.8284 15 13.5 15.6716 13.5 16.5Z" fill="currentColor"></path></svg>
                            <span>Yardım Merkezi</span>
                          </a>
                        </li>

                      </ul>
                      <ul className="sub-menu-list sign-out-links">
                      <li className="sub-menu-item"><a className="sub-menu-link " href="/SignOut?lnkctr=mL">Netflix oturumunu kapat</a></li>
                      </ul>
                    </div>
                  </div>)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar