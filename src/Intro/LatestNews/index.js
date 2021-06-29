import post1 from '../../Images/post1.jpg';
import post2 from '../../Images/post2.jpg';
import post3 from '../../Images/post3.jpg';
import post4 from '../../Images/post4.jpg';
import '../../css-modules/Intro/LatestNews/style.scss';



const LatesNews = () => {
    return (
        <div className='latest-news-wrapper'>
            <h1>BE CONNECTED</h1>
            <div className="intro-details">
                <div className="post post1">
                    <div className="descr descr1">
                        <p>Stay up to date with your feed.</p>
                    </div>
                </div>
                <div className="post post2">
                    <div className="descr descr2">
                        <p>Get course recommendations</p>
                    </div>
                </div>
                <div className="post post3">
                    <div className="descr descr3">
                        <p>Celebrate your friends' success and share yours</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LatesNews;