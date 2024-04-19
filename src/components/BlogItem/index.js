import {Link} from 'react-router-dom'

import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {id, title, imageUrl, avatarUrl, topic, author} = blogDetails

  return (
    <Link to={`/blogs/${id}`} className="link-blog">
      <div className="home-blog-container">
        <div>
          <img src={imageUrl} alt="topic" className="blog-small-image" />
        </div>
        <div className="topic-container">
          <p className="topic">{topic}</p>
          <h1 className="title">{title}</h1>
          <div className="author-container">
            <img src={avatarUrl} alt="avatar" className="author-image" />
            <p className="author-name">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
