import {useState} from "react"
import CoursesList from "./CoursesList"
import './courses.css'


const Courses = () => {
 const [blogs,setBlog] = useState([
   {id:1, title:"Speaking Confidently and Effectively", body:" In this course, you'll learn how to build on your presentation skills, to gain a competitive advantage in your career!", link:"https://www.lynda.com/Business-tutorials/Speaking-Confidently-Effectively/2875044-2.html"},
   {id:2, title:"Learning React.js", body:"Dive in and learn React.js from scratch! Learn Reactjs, Hooks and way more!", link:"https://www.udemy.com/topic/react/"},
   {id:3, title:"Project Management Simplified", body:"Acquire PM knowledge to assist you to become a successful Project Manager!", link:"https://www.udemy.com/course/project-management-simplified/"}
 ])

 
  return ( 
    <div>
      <CoursesList  blogs={blogs} title="Courses may be interested you" />
    </div>
   );
}
 
export default Courses;