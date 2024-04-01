import { FaArrowLeft, FaFlag, FaPause, FaPlay, FaAirbnb, FaVectorSquare } from "react-icons/fa";
import './video-player-styles.css'
import ReactPlayer from "react-player";
import { useEffect, useRef, useState } from "react";

type Props = {
    videoType: number,

}

const VideoPlayer = (props: Props) => {

    //video <video autoPlay src="https://res.cloudinary.com/dkzqdpw84/video/upload/v1707119257/samples/cld-sample-video.mp4" tabIndex={-1} ></video>
    //https://res.cloudinary.com/dkzqdpw84/video/upload/v1707119257/samples/cld-sample-video.mp4
    const playerRef = useRef<ReactPlayer>(null);
    //playingOperations
    const [isPlaying, setisPlaying] = useState(false)
    const playingFunc = () => {
        setisPlaying(!isPlaying);
    }
    //changetimeTheVideo
    const seekForward = (state:any) => {
        if (playerRef.current) {
            const currentTime = playerRef.current.getCurrentTime();
            playerRef.current.seekTo(currentTime + 2, 'seconds');
   
        }
    };
    const seekBackward = () => {
        if (playerRef.current) {
            const currentTime = playerRef.current.getCurrentTime();
            playerRef.current.seekTo(currentTime - 10, 'seconds');
          
        }
    };

    //onendedOperation
    const onEnded = () => {
        setisPlaying(false);
        setPlayedSeconds(0)
    }

    //voiceControl
    const [volume, setVolume] = useState<number>(1);
    const [isMuted, setisMuted] = useState<boolean>(false)
    const voiceControl = (e: string) => {
        const voiceToInt = parseInt(e);
        setVolume(voiceToInt / 100);
        voiceToInt == 0 ? setisMuted(true) : setisMuted(false);
    }

    //SpeedControl
    const [speedModalControl, setspeedModalControl] = useState<boolean>(false)
    const [videoSpeed, setvideoSpeed] = useState<number>(1)
    const speedControlFunc = () => {
        setspeedModalControl(!speedModalControl);
    }

    //ScreenControl
    const [isFullScreen, setisFullScreen] = useState(false)
    const screenControlFunc = async () => {
        const elem = document.documentElement;
        if (!isFullScreen) {
            elem.requestFullscreen().catch(() => console.log("problem"));
            setisFullScreen(true)
        } else {
            document.exitFullscreen().catch(() => console.log("problem"));
            setisFullScreen(false)
        }

    };

    //SubTitleControl
    const [subTitleModalControl, setsubTitleModalControl] = useState(false)
    const subtitleControlFunc = () => {
        setsubTitleModalControl(!subTitleModalControl);
    }
    const [subtitles, setSubtitles] = useState<string[]>([]);
    const [selectedSubtitleItem, setSelectedSubtitleItem] = useState(null);
    const handleSubtitleItemClick = (val: any) => {
        setSelectedSubtitleItem(val);
    };

    //VoiceOverControl
    const [voiceOvers, setVoiceOvers] = useState<string[]>([])
    const [selectedVoiceOverItem, setSelectedVoiceOverItem] = useState(null);
    const handleVoiceOverItemClick = (val: any) => {
        setSelectedVoiceOverItem(val);
    };

    //Episode Control
    const [episodeModalControl, setEpisodeModalControl] = useState<boolean>(false)
    const nextEpisodeControlFunc = () => {
        setEpisodeModalControl(!episodeModalControl);
    }
    const getNextEpisode = () => {
        setEpisodeModalControl(!episodeModalControl);
    }

    //mousemovingcontrol
    const [mouseMove, setmouseMove] = useState(true)


    //DurationControl
    const [durationControlx, setDurationControl] = useState<number>();
    const [playedSeconds, setPlayedSeconds] = useState(0);
    const [seeking, setSeeking] = useState<boolean>(false);
    const durationControl = (value:number) => {
        const video = playerRef.current;
        if (video) {
            const duration = video.getDuration();
            const currentTime = (value * duration) / 100;
            video.seekTo(currentTime);
        }
      };
      const handleProgress = (state:any) => {
        if (!seeking) {
          setPlayedSeconds(state.playedSeconds);
        }
      };
    //UseEffect
    useEffect(() => {
        const handleKeyDown = (event: { key: string; }) => {
            if (event.key === 'Escape' && isFullScreen) {
                screenControlFunc();
            }
        };
        document.addEventListener('keydown', handleKeyDown);
        setVoiceOvers(["İngilizce", "Türkçe", "Arapça"]);
        setSubtitles(["İngilizce", "Türkçe", "Arapça"]);

        //Mouse hareketine göre işlem
        let timeoutId: any;
        const handleMouseMove = () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                setmouseMove(false);
                console.log('Mouse hareketi yok!');
            }, 7000);
        };

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            clearTimeout(timeoutId);
        };
    }, []);



    return (
        <>
            <div id="videoContainer" onMouseMove={() => setmouseMove(true)} style={{ width: '100%', height: '100vh' }}>
                <ReactPlayer
                    volume={volume}
                    className="react-player"
                    controls={false}
                    loop={true}
                    style={{ width: '100%', height: '100%', display: 'block' }}
                    playbackRate={videoSpeed}
                    //url={"https://res.cloudinary.com/dkzqdpw84/video/upload/v1707119257/samples/cld-sample-video.mp4"}
                    url={"https://www.youtube.com/watch?v=ZssKNpvFfQM"}
                    playing={isPlaying}
                    muted={isMuted}
                    ref={playerRef}
                    onEnded={onEnded}
                    onProgress={handleProgress}
                    onPlay={() => {setisPlaying(true);}}
                    onPause={() => setisPlaying(false)}
                    onSeek={() => setSeeking(true)} 
                    onSeeked={() => setSeeking(false)}
                />
                {(<div id="videoControls" style={{display:'block !important'}}>
                    <div className="topControls">
                        <div id="goToBack" title="Önceki Sayfaya Dönmek İçin Tıklayın"><FaArrowLeft /></div>
                        <div id="reportProblem" title="Sorun Bildirmek İçin Tıklayın"><FaFlag /></div>
                    </div>


                    <div style={{ width: "100 %" }}>
                        <div className="bottomControls " style={{ backgroundColor: 'black', bottom: '0', opacity: '0.6' }}>
                            <div className="durationMainControl" style={{ position: 'absolute',width:'100% !important' }}>
                                <div className="voiceControl" style={{cursor:'pointer',width:'100%'}}>
                                    <input type="range"
                                     style={{width:"100%"}}
                                     step={0.001}
                                     value={(playedSeconds / (playerRef.current?.getDuration() || 1)) * 100 || 0}
                                    onChange={(e) => durationControl(parseFloat(e.target.value))} />
                                </div>
                            </div>  
                            <div className="bottomLeft" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                                <div className="playingControl">
                                    {!isPlaying ? (<div className='playButton' onClick={playingFunc} title="başlat"><FaPlay /></div>) :
                                        (<div className='stopButton' onClick={playingFunc} title="durdur"><FaPause /></div>)}
                                </div>
                                <div className="seekControl">
                                    <div className='backToTen' onClick={seekBackward} title="10 saniye geri al"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="default-ltr-cache-4z3qvp e1svuwfo1" data-name="Back10" aria-labelledby=":r13v:" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.0198 2.04817C13.3222 1.8214 15.6321 2.39998 17.5557 3.68532C19.4794 4.97066 20.8978 6.88324 21.5694 9.09717C22.241 11.3111 22.1242 13.6894 21.2388 15.8269C20.3534 17.9643 18.7543 19.7286 16.714 20.8192C14.6736 21.9098 12.3182 22.2592 10.0491 21.8079C7.77999 21.3565 5.73759 20.1323 4.26989 18.3439C2.80219 16.5555 2 14.3136 2 12L0 12C-2.74181e-06 14.7763 0.962627 17.4666 2.72387 19.6127C4.48511 21.7588 6.93599 23.2278 9.65891 23.7694C12.3818 24.3111 15.2083 23.8918 17.6568 22.5831C20.1052 21.2744 22.0241 19.1572 23.0866 16.5922C24.149 14.0273 24.2892 11.1733 23.4833 8.51661C22.6774 5.85989 20.9752 3.56479 18.6668 2.02238C16.3585 0.479973 13.5867 -0.214321 10.8238 0.0578004C8.71195 0.265799 6.70517 1.02858 5 2.2532V1H3V5C3 5.55228 3.44772 6 4 6H8V4H5.99999C7.45608 2.90793 9.19066 2.22833 11.0198 2.04817ZM2 4V7H5V9H1C0.447715 9 0 8.55228 0 8V4H2ZM14.125 16C13.5466 16 13.0389 15.8586 12.6018 15.5758C12.1713 15.2865 11.8385 14.8815 11.6031 14.3609C11.3677 13.8338 11.25 13.2135 11.25 12.5C11.25 11.7929 11.3677 11.1758 11.6031 10.6488C11.8385 10.1217 12.1713 9.71671 12.6018 9.43388C13.0389 9.14463 13.5466 9 14.125 9C14.7034 9 15.2077 9.14463 15.6382 9.43388C16.0753 9.71671 16.4116 10.1217 16.6469 10.6488C16.8823 11.1758 17 11.7929 17 12.5C17 13.2135 16.8823 13.8338 16.6469 14.3609C16.4116 14.8815 16.0753 15.2865 15.6382 15.5758C15.2077 15.8586 14.7034 16 14.125 16ZM14.125 14.6501C14.5151 14.6501 14.8211 14.4637 15.043 14.0909C15.2649 13.7117 15.3759 13.1814 15.3759 12.5C15.3759 11.8186 15.2649 11.2916 15.043 10.9187C14.8211 10.5395 14.5151 10.3499 14.125 10.3499C13.7349 10.3499 13.4289 10.5395 13.207 10.9187C12.9851 11.2916 12.8741 11.8186 12.8741 12.5C12.8741 13.1814 12.9851 13.7117 13.207 14.0909C13.4289 14.4637 13.7349 14.6501 14.125 14.6501ZM8.60395 15.8554V10.7163L7 11.1405V9.81956L10.1978 9.01928V15.8554H8.60395Z" fill="currentColor"></path></svg></div>
                                    <div className='previousToTen' onClick={seekForward} title="10 saniye ileri al"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="default-ltr-cache-4z3qvp e1svuwfo1" data-name="Forward10" aria-labelledby=":r140:" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.4443 3.68532C8.36795 2.39998 10.6778 1.8214 12.9802 2.04817C14.8093 2.22833 16.5439 2.90793 18 4H16V6H20C20.5523 6 21 5.55229 21 5V1H19V2.2532C17.2948 1.02859 15.2881 0.2658 13.1762 0.057802C10.4133 -0.214319 7.64154 0.479975 5.33316 2.02238C3.02478 3.56479 1.32262 5.85989 0.516718 8.51661C-0.289188 11.1733 -0.148981 14.0273 0.913451 16.5922C1.97588 19.1572 3.8948 21.2744 6.34325 22.5831C8.79169 23.8918 11.6182 24.3111 14.3411 23.7694C17.064 23.2278 19.5149 21.7588 21.2761 19.6127C23.0374 17.4666 24 14.7763 24 12L22 12C22 14.3136 21.1978 16.5555 19.7301 18.3439C18.2624 20.1323 16.22 21.3565 13.9509 21.8079C11.6818 22.2592 9.32641 21.9098 7.28604 20.8192C5.24567 19.7286 3.64657 17.9643 2.76121 15.8269C1.87585 13.6894 1.75901 11.3111 2.4306 9.09718C3.10219 6.88324 4.52065 4.97067 6.4443 3.68532ZM22 4V7H19V9H23C23.5523 9 24 8.55229 24 8V4H22ZM12.6018 15.5758C13.0389 15.8586 13.5466 16 14.125 16C14.7034 16 15.2078 15.8586 15.6382 15.5758C16.0753 15.2865 16.4116 14.8815 16.6469 14.3609C16.8823 13.8338 17 13.2135 17 12.5C17 11.7929 16.8823 11.1759 16.6469 10.6488C16.4116 10.1217 16.0753 9.71671 15.6382 9.43389C15.2078 9.14463 14.7034 9 14.125 9C13.5466 9 13.0389 9.14463 12.6018 9.43389C12.1713 9.71671 11.8385 10.1217 11.6031 10.6488C11.3677 11.1759 11.25 11.7929 11.25 12.5C11.25 13.2135 11.3677 13.8338 11.6031 14.3609C11.8385 14.8815 12.1713 15.2865 12.6018 15.5758ZM15.043 14.0909C14.8211 14.4637 14.5151 14.6501 14.125 14.6501C13.7349 14.6501 13.429 14.4637 13.207 14.0909C12.9851 13.7117 12.8741 13.1814 12.8741 12.5C12.8741 11.8186 12.9851 11.2916 13.207 10.9187C13.429 10.5395 13.7349 10.3499 14.125 10.3499C14.5151 10.3499 14.8211 10.5395 15.043 10.9187C15.2649 11.2916 15.3759 11.8186 15.3759 12.5C15.3759 13.1814 15.2649 13.7117 15.043 14.0909ZM8.60395 10.7163V15.8554H10.1978V9.01929L7 9.81956V11.1405L8.60395 10.7163Z" fill="currentColor"></path></svg></div>
                                </div>
                                <div className="voiceMainControl">
                                    {!isMuted ? (<div className='voiceControl' title="Ses Düzeyi"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="default-ltr-cache-4z3qvp e1svuwfo1" data-name="VolumeMedium" aria-labelledby=":r141:" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M11 4.00003C11 3.59557 10.7564 3.23093 10.3827 3.07615C10.009 2.92137 9.57889 3.00692 9.29289 3.29292L4.58579 8.00003H1C0.447715 8.00003 0 8.44774 0 9.00003V15C0 15.5523 0.447715 16 1 16H4.58579L9.29289 20.7071C9.57889 20.9931 10.009 21.0787 10.3827 20.9239C10.7564 20.7691 11 20.4045 11 20V4.00003ZM5.70711 9.70714L9 6.41424V17.5858L5.70711 14.2929L5.41421 14H5H2V10H5H5.41421L5.70711 9.70714ZM17.0709 4.92897C18.9462 6.80433 19.9998 9.34787 19.9998 12C19.9998 14.6522 18.9462 17.1957 17.0709 19.0711L15.6567 17.6569C17.157 16.1566 17.9998 14.1218 17.9998 12C17.9998 9.87831 17.157 7.84347 15.6567 6.34318L17.0709 4.92897ZM14.2428 7.7574C15.368 8.88262 16.0001 10.4087 16.0001 12C16.0001 13.5913 15.368 15.1175 14.2428 16.2427L12.8285 14.8285C13.5787 14.0783 14.0001 13.0609 14.0001 12C14.0001 10.9392 13.5787 9.92176 12.8285 9.17161L14.2428 7.7574Z" fill="currentColor"></path></svg></div>)
                                        : (<div className="voiceControl"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="default-ltr-cache-4z3qvp e1svuwfo1" data-name="VolumeOff" aria-labelledby=":r1b2:" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M11 4.00003C11 3.59557 10.7564 3.23093 10.3827 3.07615C10.009 2.92137 9.57889 3.00692 9.29289 3.29292L4.58579 8.00003H1C0.447715 8.00003 0 8.44774 0 9.00003V15C0 15.5523 0.447715 16 1 16H4.58579L9.29289 20.7071C9.57889 20.9931 10.009 21.0787 10.3827 20.9239C10.7564 20.7691 11 20.4045 11 20V4.00003ZM5.70711 9.70714L9 6.41424V17.5858L5.70711 14.2929L5.41421 14H5H2V10H5H5.41421L5.70711 9.70714ZM15.2929 9.70714L17.5858 12L15.2929 14.2929L16.7071 15.7071L19 13.4142L21.2929 15.7071L22.7071 14.2929L20.4142 12L22.7071 9.70714L21.2929 8.29292L19 10.5858L16.7071 8.29292L15.2929 9.70714Z" fill="currentColor"></path></svg></div>)}

                                    <input type="range" onChange={(e) => voiceControl(e.target.value)} />
                                </div>

                            </div>
                            <div className='bottomMiddle' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                                <div className="movieTitle">
                                    <div className="box"></div>
                                    <div className="movieName">
                                        <div className="">Film Adı</div>
                                    </div>
                                </div>
                            </div>
                            <div className='bottomRight' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                                {props?.videoType === 1 && (
                                    <div className="nextEpisode"  >
                                        <div className="nextEpisodeControlBtn" onMouseEnter={nextEpisodeControlFunc} onMouseLeave={nextEpisodeControlFunc}>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="default-ltr-cache-4z3qvp e1svuwfo1" data-name="NextEpisode" aria-labelledby=":r8p:" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M22 3H20V21H22V3ZM4.28615 3.61729C3.28674 3.00228 2 3.7213 2 4.89478V19.1052C2 20.2787 3.28674 20.9977 4.28615 20.3827L15.8321 13.2775C16.7839 12.6918 16.7839 11.3082 15.8321 10.7225L4.28615 3.61729ZM4 18.2104V5.78956L14.092 12L4 18.2104Z" fill="currentColor"></path></svg>
                                            {episodeModalControl && (
                                                <div className="nextEpisodePreviewContainer" >
                                                    <div className="previewCutter">
                                                        <div className="previewContainer">
                                                            <div className="previewTabs" tabIndex={0}>
                                                                <div className="previewTabHeader">
                                                                    <h2>Sonraki Bölüm</h2>
                                                                </div>
                                                                <div className="previewMid">
                                                                    <div className="previewThumbnail" onClick={getNextEpisode}>
                                                                        <button className="playButtonPreview" tabIndex={-1}>
                                                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="default-ltr-cache-4z3qvp e1svuwfo1" data-name="Play" aria-labelledby=":r9j:" aria-hidden="true"><path d="M5 2.69127C5 1.93067 5.81547 1.44851 6.48192 1.81506L23.4069 11.1238C24.0977 11.5037 24.0977 12.4963 23.4069 12.8762L6.48192 22.1849C5.81546 22.5515 5 22.0693 5 21.3087V2.69127Z" fill="currentColor"></path></svg>

                                                                        </button>
                                                                        <div className="cachePreview"></div>
                                                                    </div>
                                                                    <div className="previewDetail" tabIndex={1}>
                                                                        <div className="previewDetailHeader" style={{ display: 'flex' }}>
                                                                            <span className="PreviewEpisodeCount">
                                                                                2
                                                                            </span>
                                                                            <h3 className="PreviewEpisodeName">İkinci Bölüm: Belalar</h3>

                                                                        </div>
                                                                        <div className="previewDetailMiddle">
                                                                            Musa, Firavun'la karşı karşıya gelir ve İbranileri azat etmesini ister. Firavun reddedince de Mısır'ın başına bir dizi felaket gelir.
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )}
                                <div className="subtitleControl" title="Alt Yazı ve Dil Seçeneği">
                                    <div className="subtitleControlBtn" onMouseEnter={subtitleControlFunc} onMouseLeave={subtitleControlFunc}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="default-ltr-cache-4z3qvp e1svuwfo1" data-name="Subtitles" aria-labelledby=":r2c:" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M1 3C1 2.44772 1.44772 2 2 2H22C22.5523 2 23 2.44772 23 3V17C23 17.5523 22.5523 18 22 18H19V21C19 21.3688 18.797 21.7077 18.4719 21.8817C18.1467 22.0557 17.7522 22.0366 17.4453 21.8321L11.6972 18H2C1.44772 18 1 17.5523 1 17V3ZM3 4V16H12H12.3028L12.5547 16.1679L17 19.1315V17V16H18H21V4H3ZM10 9L5 9V7L10 7V9ZM19 11H14V13H19V11ZM12 13L5 13V11L12 11V13ZM19 7H12V9H19V7Z" fill="currentColor"></path></svg>

                                        {subTitleModalControl && (
                                            <div className="subtitleOptions" >
                                                <div style={{ position: 'relative', overflow: 'hidden' }}>
                                                    <div className="subtitleCutter">
                                                        <div className="subtitleLeftSide subtitleSide" >
                                                            <h3 className="subtitleHeader">
                                                                Seslendirme
                                                            </h3>
                                                            <ul className="subtitleLeftSideList subtitleList">
                                                                {subtitles.map((val, index) => (
                                                                    <li
                                                                        key={index}
                                                                        className={`subTitleListItem ${selectedSubtitleItem === val ? 'selected-list-item' : ''}`}
                                                                        onClick={() => handleSubtitleItemClick(val)}
                                                                    >
                                                                        <div className={`itemName ${selectedSubtitleItem === val ? 'selected-list-item' : ''}`}>{val}</div>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                        <div className="subtitleRightSide subtitleSide">
                                                            <h3 className="subtitleHeader">
                                                                Seslendirme
                                                            </h3>
                                                            <ul className="subtitleLeftSideList subtitleList">
                                                                {voiceOvers.map((val, index) => (
                                                                    <li
                                                                        key={index}
                                                                        className={`subTitleListItem ${selectedVoiceOverItem === val ? 'selected-list-item' : ''}`}
                                                                        onClick={() => handleVoiceOverItemClick(val)}
                                                                    >
                                                                        <div className={`itemName ${selectedVoiceOverItem === val ? 'selected-list-item' : ''}`}>{val}</div>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="speedControl"  >
                                    <div className="speedControlBtn" onMouseEnter={speedControlFunc} onMouseLeave={speedControlFunc}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="default-ltr-cache-4z3qvp e1svuwfo1" data-name="InternetSpeed" aria-labelledby=":r1cd:" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M19.0569 6.27006C15.1546 2.20629 8.84535 2.20629 4.94312 6.27006C1.01896 10.3567 1.01896 16.9985 4.94312 21.0852L3.50053 22.4704C-1.16684 17.6098 -1.16684 9.7454 3.50053 4.88481C8.18984 0.0013696 15.8102 0.0013696 20.4995 4.88481C25.1668 9.7454 25.1668 17.6098 20.4995 22.4704L19.0569 21.0852C22.981 16.9985 22.981 10.3567 19.0569 6.27006ZM15 14.0001C15 15.6569 13.6569 17.0001 12 17.0001C10.3431 17.0001 9 15.6569 9 14.0001C9 12.3432 10.3431 11.0001 12 11.0001C12.4632 11.0001 12.9018 11.105 13.2934 11.2924L16.2929 8.29296L17.7071 9.70717L14.7076 12.7067C14.895 13.0983 15 13.5369 15 14.0001Z" fill="currentColor"></path></svg>
                                        {speedModalControl && (
                                            <div className="speedOptions" onClick={speedControlFunc} style={{ display: 'flex', color: 'black', flexDirection: 'column' }}>
                                                <div onClick={() => setvideoSpeed(0.25)}>0.25x</div>
                                                <div onClick={() => setvideoSpeed(0.50)}>0.5x</div>
                                                <div onClick={() => setvideoSpeed(0.75)}>0.75x</div>
                                                <div onClick={() => setvideoSpeed(1)}>1x</div>
                                                <div onClick={() => setvideoSpeed(1.5)}>1.5x</div>
                                                <div onClick={() => setvideoSpeed(2)}>2x</div>
                                            </div>
                                        )}
                                    </div>
                                </div>


                                <div className="screenControl" onClick={screenControlFunc}>
                                    <div className="screenControlBtn">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="default-ltr-cache-4z3qvp e1svuwfo1" data-name="FullscreenEnter" aria-labelledby=":r3v:" aria-hidden="true" data-uia="control-fullscreen-enter"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 5C0 3.89543 0.895431 3 2 3H9V5H2V9H0V5ZM22 5H15V3H22C23.1046 3 24 3.89543 24 5V9H22V5ZM2 15V19H9V21H2C0.895431 21 0 20.1046 0 19V15H2ZM22 19V15H24V19C24 20.1046 23.1046 21 22 21H15V19H22Z" fill="currentColor"></path></svg>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>



                </div>)}
                {
                    !mouseMove && !isPlaying && (
                        <div style={{ display: 'block' }}>
                            <div className="" style={{ position: 'absolute', top: '0', width: '100%', height: '100%', backgroundColor: 'black', opacity: '0.8' }}>
                                <div className="thumbdetailmiddle" style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                    <h1 style={{ color: 'white' }}>Film Adı</h1>

                                    <h4 style={{ color: 'white' }}> 2 saat 14 dakika</h4>
                                    <div color="white" style={{ color: 'white', width: '75%' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi dolorum veniam odio accusamus minima molestiae ducimus, exercitationem similique aspernatur! Amet sint enim similique eius voluptas suscipit ullam culpa dolorem recusandae.
                                        Incidunt nisi harum recusandae illo, eaque, accusantium asperiores doloremque natus id officia laborum nobis tempore? Reprehenderit, repellat consequatur odit nesciunt placeat perspiciatis autem excepturi tenetur voluptate provident nulla distinctio eos!
                                        Quod quasi commodi, laboriosam dolores adipisci quibusdam mollitia inventore, veniam molestias tenetur quae, totam illo quis fugit sed dignissimos? Suscipit cupiditate culpa recusandae eveniet incidunt. Odit at nam assumenda alias.
                                        Optio, necessitatibus impedit! Nesciunt minima a voluptatem aperiam vero placeat animi, nisi optio, maxime reprehenderit aliquid voluptatum delectus ullam distinctio labore, doloribus omnis mollitia harum perspiciatis esse exercitationem eum suscipit!
                                        Iure alias voluptas repudiandae dolorem error iste a officia dicta consectetur vitae, architecto labore aut, eaque aliquam quo eos temporibus? Consequatur suscipit facilis dolore soluta ea ipsam. Sunt, molestias omnis?</div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    )
}

export default VideoPlayer