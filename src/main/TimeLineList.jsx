import LikeButtons from "../PostTimeline/LikesButtons"
import { useSelector, useDispatch } from 'react-redux';
import { setUserToPreview } from "../actions/userToPreview";
import './mainTimeLine.css';
import { useHistory } from 'react-router-dom';

const MainList = ({ blogs }) => {

  const inputText= "Add a comment ...";
  const history = useHistory();
  const currentUser = useSelector(state => state.currentUser);
  const dispatch = useDispatch();
  const goToUserPage = () => {
    dispatch(setUserToPreview(currentUser));  
    history.push('/profile/about');
  }
  const avatar = currentUser.picture;
  return (
    <div>
      {blogs.map(d => (
        <div key={d.id} className='divContainer'>
          <div className="title-wrapperT" onClick = {goToUserPage}>
            {d.logo ?
              <img src={d.logo} className="logoT" alt="logo" />
              : null
            }
            <div className="title-inner-wrapper">
              {d.title ?
                <a className="titleT" { ...d.link !== "/profile/about"?{ href:d.link} : {} } 
                onClick = {goToUserPage} target={d.link === "/profile/about"? "_self" :"blank"} rel="noopener noreferrer">{d.title}</a>
                : null
              }
              {d.date ?
                <p className="dateT">{d.date}</p>
                : null
              }
            </div>
          </div>
          {d.text ?
            <p className="contentT">{d.text}</p>
            : null
          }
          {d.img ?
            <img src={d.img} className=' imgStyle' alt="img" />
            : null
          }
          <LikeButtons />
          <div className='inputDiv-c'>
          <img className = "comment-avatar" src = {avatar} alt = "user"></img>
            <input type="text" placeholder={inputText} />
          </div>


        </div>
      ))}

    </div>

  )
}
export default MainList