import FindJobs from "./FindJobs";
import BuildProfile from "./BuildProfile";
import '../css-modules/Intro/style.scss';

const Intro = () => {
    return (<div className = "intro">
        <FindJobs/>
        <BuildProfile />
    </div>);
}
 
export default Intro;