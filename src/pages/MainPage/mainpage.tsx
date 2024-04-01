import MainView from "../../components/mainview/mainview"
import Navbar from "../../components/navbar/navbar"


type Props = {}

const MainPage = (props: Props) => {
  return (
    <>
        {/*  */}
        <div>
          <div>
            <div dir='ltr'>
              <div>
                <div style={{overflow:'visible',width:'100%',zIndex:'0'}}>
                   <Navbar/>
                   <MainView/>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default MainPage