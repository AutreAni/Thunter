import '../../../css-modules/UserProfile/Audience/AudiencePage/style.scss';
import AudienceList from '../AudienceList/index';
import NetworkIndex from '../../../Network/index';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserFriends } from '@fortawesome/free-solid-svg-icons';


const AudiencePage = () => {
    const audience = useSelector(state => state.currentUser.audience);


    return (
        <div className="wrapper">
            <div className="audience__main">
                <div className="existing__audience">
                    <div className="audience__info">
                        <FontAwesomeIcon icon={faUserFriends} className="icon audience__icon" />
                        <span className="audience__qt">Audience {audience?.length}</span>
                    </div>
                    <AudienceList audience = {audience} />
                    {/* // users={ users } /> */}
                </div>
                <div className="under__preview">
                    <NetworkIndex />
                </div>
            </div>
        </div>
    )
}

export default AudiencePage;
