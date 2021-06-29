import magnifyingGlass from '../../Images/magnifying-glass-circle.jpg';
import { Link } from "react-router-dom";
import '../../css-modules/Intro/FindJobs/style.scss';



const FindJobs = () => {
    return (
        <div className="find-jobs">
            <div className="find-jobs-cover">
                <h1>WE BRING TALENT AND COMPNAIES TOGETHER</h1>
            </div>
            <div className="intro-details">
            <img src = {magnifyingGlass} alt = 'magnifying-glass'></img>
            <div className = 'browse-wrapper'>
                <p> If you're ready for a new challenging job, browse jobs on Thunter and take a look at our popular job locations and job titles. Find your perfect career fit for today. Whatever type of job you're looking for, you can find it on Thunter.
               </p>
               <Link to = "/jobs">
               <button>Browse Jobs </button>
               </Link>
               </div>
            </div>
        </div>
    );
}

export default FindJobs;