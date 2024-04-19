// Write your JS code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import BlogItem from '../BlogItem'

import './index.css'

class BlogList extends Component {
  state = {blogList: [], isLoading: true}

  componentDidMount() {
    this.getBlogsList()
  }

  getBlogsList = async () => {
    const response = await fetch(`https://apis.ccbp.in/blogs`)
    const data = await response.json()

    const updatedBlogData = data.map(eachBlog => ({
      id: eachBlog.id,
      title: eachBlog.title,
      author: eachBlog.author,
      imageUrl: eachBlog.image_url,
      avatarUrl: eachBlog.avatar_url,
      topic: eachBlog.topic,
    }))

    this.setState({blogList: updatedBlogData})
    this.setState({isLoading: false})
  }

  render() {
    const {blogList, isLoading} = this.state
    return (
      <div>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          blogList.map(eachBlog => (
            <BlogItem blogDetails={eachBlog} key={eachBlog.id} />
          ))
        )}
      </div>
    )
  }
}

export default BlogList
