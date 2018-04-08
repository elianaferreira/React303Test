import React from 'react'
import './App.css'
import { Link } from 'react-router-dom'

const PostPreview = props => (
  <React.Fragment>
    <section className='page'>
      <h2 className='header'>
          {props.post.simple_title}
      </h2>
      <img className='media' src={props.post.featured_media.url} />
      <p className='main'><span>{props.post.excerpt}</span></p>
    </section>
    <div className='divider'/>
  </React.Fragment>

)

export default PostPreview
