import Footer from "../../components/footer/footer"
import MainView from "../../components/mainview/mainview"
import Navbar from "../../components/navbar/navbar"


type Props = {}

const MainPage = (props: Props) => {
  return (
    <>
        {/*  */}
        <div style={{backgroundColor:'rgb(20,20,20)',height:'100%'}}>
          <div>
            <div dir='ltr'>
              <div>
                <div style={{overflow:'visible',width:'100%',zIndex:'0'}}>
                   <Navbar/>
                   <MainView/>
                   <Footer />
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default MainPage