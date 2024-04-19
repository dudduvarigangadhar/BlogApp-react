import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

class BlogItemDetails extends Component {
  state = {
    blogsData: {},
    isLoading: true,
  }

  componentDidMount() {
    this.getBlogItemDetails()
  }

  getBlogItemDetails = async () => {
    console.log(this.props)
    const {match} = this.props
    const {params} = match
    const {id} = params
    console.log(id)
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    const updatedBlogData = {
      id: data.id,
      title: data.title,
      imageUrl: data.image_url,
      author: data.author,
      avatarUrl: data.avatar_url,
      topic: data.topic,
      content: data.content,
    }
    this.setState({blogsData: updatedBlogData})
    this.setState({isLoading: false})
  }

  renderDetails = () => {
    const {blogsData} = this.state
    const {title, imageUrl, avatarUrl, content, author} = blogsData

    return (
      <div className="blogDetails-container">
        <h1 className="content-title">{title}</h1>
        <div className="content-author-container">
          <img src={avatarUrl} alt="author" className="avatar-image" />
          <p className="author-name">{author}</p>
        </div>
        <div className="content-container">
          <img src={imageUrl} alt={title} className="content-image" />
          <p className="content">{content}</p>
        </div>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div>
        {isLoading ? (
          <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
        ) : (
          this.renderDetails()
        )}
      </div>
    )
  }
}

export default BlogItemDetails
