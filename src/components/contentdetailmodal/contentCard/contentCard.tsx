import React from 'react'
import './contentCard.css'
type Props = {}

const ContentCard = (props: Props) => {
    return (
        <>
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
            </div>
        </>
    )
}

export default ContentCard