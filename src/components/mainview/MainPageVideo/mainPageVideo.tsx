import { FaInfo, FaInfoCircle, FaPlay, FaSearch, FaSync } from 'react-icons/fa'
import './mainPageVideo.css'
import ReactPlayer from 'react-player'
import { useState,useEffect } from 'react'
import ContentDetailModal from '../../contentdetailmodal/contentdetailmodal'
import { useSelector, useDispatch } from 'react-redux'
import { openModal } from '../../../store/slices/contentDetailContainerControlSlice'

type Props = {
}

const MainPageVideo = (props: Props) => {
    const [photoControl, setphotoControl] = useState<boolean>(false)
    const modalOpen = useSelector((state:any) => state.contentControl.task);
     const dispatch = useDispatch();

    const handleOpenModal = () => {
        dispatch(openModal());
    };
    useEffect(() => {
        
        
    })
    
    return (
        <div className="billboard" style={{ width: '100%' }}>
          {!photoControl?(
            <ReactPlayer
            width="100%"
            height="100%"
            style={{ width: 'max-content', height: '100%', display: 'block' }}
            url={"https://res.cloudinary.com/dkzqdpw84/video/upload/v1707119257/samples/cld-sample-video.mp4"}
            playing={true}
            onEnded={()=>setphotoControl(true)}
        />
          ):(
            <img onMouseEnter={()=>setphotoControl(false)} style={{width:'100%',height:'100%'}} src="https://occ-0-7329-1490.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABbDMPCrpKs60v2MklHqg9xxbkXh8OXeVRLkfeaO5lAbiirBtvbTOO-udN2ujn0mE4OhUE6oN53g2WatXIZFXROmqpBEZLOigebVl.webp?r=06d" alt="" />
          )}  
           
            <div className="mainVideoFront" style={{display:'block !important'}}>
                <div className="leftBar" >
                    
                    <img style={{width:'80%'}} src="https://occ-0-7329-1490.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABROL1V-W4XPbdSEO6z4dnR52hOtXML9EM8pcr7HAzYkAWz0Oefvwio1ZLiLzOlw6AdiCq2UYGX77bt5f-eSYtlMnDC8huonnyDm2Zl9SNB_e.webp?r=d1a" alt="" />
                    <p className='leftBarText' style={{width:'80%'}}>Zombi avcısı asker Alice, birbiri ardına meydana gelen virüs salgınları insanlığı yok etmek üzereyken hayatta kalan küçük bir grupla Las Vegas'ın kalıntılarında dolaşır.</p>
                    <p className='leftBarCatText' style={{width:'80%'}}>
                        <span>Kategori-1</span>&nbsp; &nbsp;
                        <span>Kategori-2</span>
                    </p>
                    <div className="leftBarButtons">
                        <a href='#' className="leftBarPlayButton">
                            <FaPlay style={{color:'black',fontSize:'1.6rem',marginRight:'5px'}}/>
                            <span>Oynat</span>
                        </a>
                        <div  className="leftBarInfoButton" onClick={()=>handleOpenModal()}>
                            <FaInfoCircle style={{color:'white',fontSize:'1.6rem',marginRight:'5px'}}/>
                            <span >Daha Fazla Bilgi</span>
                        </div>
                    </div>
                </div>
            
            </div>
            <ContentDetailModal />
        </div>

    )
}

export default MainPageVideo
