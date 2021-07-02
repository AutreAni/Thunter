import CoursesList from "./CoursesList"
import '../css-modules/Courses/style.scss';


const Courses = () => {
 const blogs = [
   {id:1, title:"Speaking Confidently and Effectively", body:" In this course, you'll learn how to build on your presentation skills, to gain a competitive advantage in your career!", link:"https://www.lynda.com/Business-tutorials/Speaking-Confidently-Effectively/2875044-2.html"},
   {id:2, title:"Learning React.js", body:"Dive in and learn React.js from scratch! Learn Reactjs, Hooks and way more!", link:"https://www.udemy.com/topic/react/"},
   {id:3, title:"Project Management Simplified", body:"Acquire PM knowledge to assist you to become a successful Project Manager!", link:"https://www.udemy.com/course/project-management-simplified/"}
 ];

 
  return ( 
      <CoursesList  blogs={blogs} title="Courses that may interest you" />
   );
}
 
export default Courses;