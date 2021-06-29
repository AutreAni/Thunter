import accountImg from '../../Images/Profile-720.png';
import { Link } from 'react-router-dom';
import '../../css-modules/Intro/BuildProfile/style.scss'

const BuildProfile = () => {
    return (
    <div className = "intro-details build-profile">
        <div>
            <p>You are more than your resume.<br/>Let your talents, personality and potential do the talking. We give you the opportunity to share your story so companies can get to know the real you.</p>
            <Link to = "/sign-page/login">
            <button>Join Now</button>
            </Link>
        </div>
        <img src={accountImg} alt=""></img>
    </div>);
}

export default BuildProfile;