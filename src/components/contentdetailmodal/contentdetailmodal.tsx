import React, { useState } from 'react'
import './contentdetailmodal.css'
import ReactPlayer from 'react-player'
import { FaCheck, FaCheckCircle, FaDiscord, FaHeart, FaPlay, FaPlusCircle, FaRegPlusSquare } from 'react-icons/fa'
import { AiFillLike, AiFillDislike, AiOutlineLike, AiOutlineDislike } from 'react-icons/ai'
import { IoHandRightOutline, IoHandLeftOutline } from 'react-icons/io5';
import ContentCard from './contentCard/contentCard'
type Props = {}

const ContentDetailModal = (props: Props) => {
    const [addListControl, setaddListControl] = useState<boolean>(false);
    const [activeLike, setActiveLike] = useState<string>('');
    const [likeContainerControl, setlikeContainerControl] = useState<boolean>(false)

    const handleLikeClick = (likeType: string) => {
        setActiveLike(likeType);
    };
    return (
        <>
            <div className="contentDetailModal">
                <div className="contentDetailModalContent">
                    <div className="modalPlayerContainer">
                        <ReactPlayer
                            width="100%"
                            height="100%"
                            style={{ width: 'max-content', height: '100%', display: 'block' }}
                            url={"https://www.youtube.com/watch?v=9mPdzuhCm60"}
                            playing={false}
                            loop={true}
                        />
                        <div className="modalPlayerButtons">
                            <div className="modalPlayerBottomSide">
                                <div className="bottomleftside">
                                    <a href='#' className="leftBarPlayButton">
                                        <FaPlay style={{ color: 'black', fontSize: '1.6rem', marginRight: '5px' }} />
                                        <span>Oynat</span>
                                    </a>
                                    <span className="addToList">
                                        {!addListControl ? (
                                            <FaPlusCircle onClick={() => setaddListControl(!addListControl)} title='Listeme Ekle' style={{ color: 'white', fontSize: '2.3rem', marginRight: '5px' }} />
                                        ) : (
                                            <FaCheckCircle onClick={() => setaddListControl(!addListControl)} title='Listemden Çıkart' style={{ color: 'white', fontSize: '2.3rem', marginRight: '5px' }} />
                                        )}
                                    </span>
                                    <span className='likeControl' >

                                        <div className={"likeControlContainer"} >
                                            <div className="">
                                                <div>
                                                    <div className="likeControlContainerBody" >
                                                        <div className="likeOpeContainer">
                                                            <div className="" style={{ opacity: '1', transform: 'none' }} >
                                                                <a >
                                                                    <AiOutlineLike className={activeLike === 'like' ? 'activeLike' : ''} style={{ color: 'white', fontSize: '2.3rem', marginRight: '5px' }} />
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="likeOpeContainer"> <div className="" style={{ opacity: '1', transform: 'none' }}>
                                                            <a >
                                                                <IoHandRightOutline className={activeLike === 'hand' ? 'activeLike' : ''} onClick={() => handleLikeClick('hand')} style={{ color: 'white', fontSize: '2.3rem', marginRight: '5px' }} />
                                                            </a>
                                                        </div></div>
                                                        <div className="likeOpeContainer"> <div className="" style={{ opacity: '1', transform: 'none' }}>
                                                            <a >
                                                                <AiOutlineDislike className={activeLike === 'dislike' ? 'activeLike' : ''} onClick={() => handleLikeClick('dislike')} style={{ color: 'white', fontSize: '2.3rem', marginRight: '5px' }} />
                                                            </a>
                                                        </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="contentInfos">
                        <div className="contentInfoLeftSide">
                            <div className="contentInfoTopSide">
                                <div className="contentMetaDataContainer">
                                    <div style={{ display: "flex", alignItems: 'center', color: '#bcbcbc' }}>
                                        <div className="year">2014</div>
                                        <span className="duration" style={{ marginLeft: '5px' }}>1 sa. 54 dk.</span>
                                    </div>
                                    <p className='contentWarnings'>Şiddet, Şiddet</p>
                                </div>
                            </div>
                            <p style={{ fontSize: '16px', lineHeight: '26px', color: 'white' }}>Kıyamet sonrası bir gelecekte bir grup genç, gizemli bir topluluğun içinde kapana kısılır. Burada hayatta kalmak için dev bir labirenti çözmeleri gerekmektedir.</p>
                        </div>
                        <div className="contentInfoRightSide">
                            <div className="contentInfoRightBottom" style={{ marginTop: '10px' }}>
                                <span style={{ color: '#777' }}>Yönetmen: </span>
                                <span className='tagItem'>
                                    <a >Metin Koyuncu</a>
                                </span>
                            </div>
                            <div className="contentInfoRightTopSide" style={{ marginTop: '10px' }}>
                                <span style={{ color: '#777' }}>Oyuncu Kadrosu: </span>
                                <span className='tagItem'>
                                    <a >Dylan O'Brien,</a>
                                    <a >Dylan O'Brien,</a>
                                    <a >Dylan O'Brien,</a>
                                </span>
                            </div>
                            <div className="contentInfoRightMiddle" style={{ marginTop: '10px' }}>
                                <span style={{ color: '#777' }}>Türler: </span>
                                <span className='tagItem'>
                                    <a >Bilim Kurgu Filmleri,</a>
                                    <a >Kitaplardan Uyarlanan Filmler,</a>
                                    <a >Dylan O'Brien,</a>
                                </span>
                            </div>
                            <div className="contentInfoRightBottom" style={{ marginTop: '10px' }}>
                                <span style={{ color: '#777' }}>Ana Kategori: </span>
                                <span className='tagItem'>
                                    <a >Sürükleyici</a>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="contentAnalogues">
                        <h3>Benzerleri</h3>
                        <div className="sectionContainer" style={{boxSizing:'inherit'}}>
                            <div className="analoguesContainer">
                                <ContentCard/>
                                <ContentCard/>
                                <ContentCard/>
                                <ContentCard/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContentDetailModal