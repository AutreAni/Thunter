const CoursesList = ({blogs,title}) => {
  
  return (  
    <div className="styleBox" >
      <h6 style={{color:'gray', textAlign:'center', borderBottom:'1px solid lightgray', padding:'3px'}}>{title}</h6>
      {blogs.map((blog) =>(
      <div key={blog.id} className="blogBox"> 
        <h6> <a href={blog.link}> {blog.title}</a></h6>
        <p style={{fontSize:'13px', color:'grey'}}>{blog.body}</p>
      </div>

        
     ))}
  
    </div>
  )
 
}
 
export default CoursesList;