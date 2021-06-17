import AudienceInfo from '../AudienceInfo/index';
import AudienceList from '../AudienceList/index';
import "../../../css-modules/UserProfile/Audience/AudienceMain/style.scss";
import { useSelector } from 'react-redux';

const AudienceMain = () => {
    const activePage = useSelector(state => state.userToPreview.activeSubpage);
    const audience = useSelector(state => state.userToPreview.audience);

    return (
        <div 
         className = {`details ${activePage ==="AUDIENCE" ? "active-subpage" : ""}`}             
        >
            <span className = "details__title">
                <AudienceInfo
                    audience = { audience }
                    />
            </span>
            {audience && activePage === "AUDIENCE"? <div className="wrapper">
                <AudienceList
                        audience = { audience }
                 />
             </div>: null }                
        </div>
    )
}

export default AudienceMain;
