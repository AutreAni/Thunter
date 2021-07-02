const CoursesList = ({ blogs, title }) => {

  return (
    <div className="styleBox" >
      <h5>{title}</h5>
      {blogs.map((blog) => (
        <div key={blog.id} className="blogBox">
          <h6> <a href={blog.link} target="_blank" rel="noopener noreferrer"> {blog.title}</a></h6>
          <p style={{ fontSize: '13px', color: 'grey' }}>{blog.body}</p>
        </div>

      ))}

    </div>
  )

}

export default CoursesList;