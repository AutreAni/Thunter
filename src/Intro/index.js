import FindJobs from "./FindJobs";
import BuildProfile from "./BuildProfile";
import LatestNews from './LatestNews';
import '../css-modules/Intro/style.scss';

const Intro = () => {
    return (<div className = "intro">
        <FindJobs/>
        <LatestNews/>
        <BuildProfile />
    </div>);
}
 
export default Intro;