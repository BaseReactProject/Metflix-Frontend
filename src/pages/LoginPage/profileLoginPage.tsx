import "./loginPage.css"
import ProfileLogin from '../../components/auth/profilelogin/profilelogin'
type Props = {}

const ProfileLoginPage = (props: Props) => {
    const spans = Array.from({ length: 520 }, (_, index) => index + 1);
  return (
    <>
    <section> 
    {spans.map((number) => (
        <span key={number}></span>
      ))}
   <ProfileLogin></ProfileLogin>

  </section></>
  )
}

export default ProfileLoginPage