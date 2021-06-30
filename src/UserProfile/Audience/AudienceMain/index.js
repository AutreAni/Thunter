import AudienceInfo from '../AudienceInfo/index';
import AudienceList from '../AudienceList/index';
import "../../../css-modules/UserProfile/Audience/AudienceMain/style.scss";
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';


const AudienceMain = () => {
    const audience = useSelector(state => state.userToPreview.audience);
    const pathName = useLocation().pathname;

    return (
        <div
            className={`details ${pathName === "/profile/audience" ? "active-subpage" : ""}`}
        >         
               <span className="details__title">
                <Link to="/profile/audience">

                    <AudienceInfo
                        audience={audience}
                    />
                </Link>
            </span>
            {audience && pathName === "/profile/audience" ? <div className="wrapper">
                <AudienceList
                    audience={audience}
                />
            </div> : null}
        </div>
    )
}

export default AudienceMain;
