import React, { useState } from 'react'
import './contentCard.css'
type Props = {}

const ContentCard = (props: Props) => {
    const [isOnTheList, setisOnTheList] = useState<boolean>(false)
    return (

        <div className="titleCard--container">
            <div className="titleCard-imageWrapper has-duration">
                <div >
                    <img src="https://occ-0-7329-1490.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABTB9R75hRx7M6dONoidh8mf6OvwWAtdp771coT1UshIf1MtUUiN23DNd8c6ghrLyfgfhpg07ZWrX5kBQ83_sXPy0CXKvBlOUg7U.webp?r=fa4" alt="Jumper" />
                </div>
                <div className="titleCard-playIcon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="titleCard-playSVG ltr-4z3qvp e1svuwfo1" data-name="Play" aria-labelledby=":r2j:" aria-hidden="true"><path d="M5 2.69127C5 1.93067 5.81547 1.44851 6.48192 1.81506L23.4069 11.1238C24.0977 11.5037 24.0977 12.4963 23.4069 12.8762L6.48192 22.1849C5.81546 22.5515 5 22.0693 5 21.3087V2.69127Z" fill="white"></path></svg>
                </div>
                <span className="duration ellipsized">1 sa. 28 dk.</span>
            </div>
            <div className="titleCard--metadataWrapper">
                <div>
                    <div className="videoMetadata--container-container">
                        <div className="videoMetadata--container titlecard-videoMetadata videoMetadata--two-lines">
                            <div className="videoMetadata--second-line">
                                <div className="year">2014</div>
                                <span className="maturity-rating">
                                    <span className='maturity-number'>
                                        13+
                                    </span>
                                </span>
                                <span className="player-feature-badge">
                                    HD
                                </span>
                            </div>
                        </div>
                        <div>
                            <div className="ltr-bjn8wh">
                                <div>
                                    <button className='color-supplementary hasIcon round ltr-11vo9g5' type='button'>

                                        <div style={{ lineHeight: '0' }}>
                                            <div className="small ltr-iyulz3" onClick={()=>setisOnTheList(!isOnTheList)}>
                                               {!isOnTheList?(
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 'auto' }} className="ltr-4z3qvp e1svuwfo1" data-name="Plus" aria-labelledby=":ri:" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M11 11V2H13V11H22V13H13V22H11V13H2V11H11Z" fill="currentColor"></path></svg>
                                               ):(
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ltr-4z3qvp e1svuwfo1" data-name="Checkmark" aria-labelledby=":r23:" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M21.2928 4.29285L22.7071 5.70706L8.70706 19.7071C8.51952 19.8946 8.26517 20 7.99995 20C7.73474 20 7.48038 19.8946 7.29285 19.7071L0.292847 12.7071L1.70706 11.2928L7.99995 17.5857L21.2928 4.29285Z" fill="currentColor"></path></svg>
                                               )} 
                                                
                                            </div>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <p className='titleCard-synopsis previewModal--small-text'>
                     <div>
                        <div style={{color:'#d2d2d2'}}>
                        Savaştan parçalanmış bir dünyada özel yetenekleri olduğunu fark eden Tris, kendisi gibi olanları hedefleyen uğursuz bir komploya direnmek için Four ile iş birliği yapar.
                        </div>
                    </div>                           
                </p>
            </div>
        </div>

    )
}

export default ContentCard