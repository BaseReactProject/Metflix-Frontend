import React from 'react'
import './maincontentslider.css';
import ContentMiniView from '../../contentminiview/contentminiview';
type Props = {}

const MainContentSlider = (props: Props) => {
    return (
        <>
            <div className="lolomoRow lolomoRow_title_card ltr-0">
                <h2 className="rowHeader ltr-0">
                    <a href="/browse/m/genre/81232239" className="rowTitle ltr-0" >
                        <div className="row-header-title">Destansı Dünyalar</div>
                        <div className="aro-row-header more-visible">
                            <div className="see-all-link">Tümüne Göz At
                            </div>
                        </div>
                    </a>
                </h2>
                <div className='rowContainer rowContainer_title_card'>
                    <div>
                        <div className="rowContent slider-hover-trigger-layer">
                            <div className="slider">
                                <div className="sliderMask showPeek">
                                    <div className="sliderContent row-with-x-columns">
                                        <div className="slider-item slider-item-0">
                                            <ContentMiniView/>
                                        </div>
                                        <div className="slider-item slider-item-0">
                                            <ContentMiniView/>
                                        </div><div className="slider-item slider-item-0">
                                            <ContentMiniView/>
                                        </div><div className="slider-item slider-item-0">
                                            <ContentMiniView/>
                                        </div><div className="slider-item slider-item-0">
                                            <ContentMiniView/>
                                        </div>
                                        <div className="slider-item slider-item-0">
                                            <ContentMiniView/>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainContentSlider