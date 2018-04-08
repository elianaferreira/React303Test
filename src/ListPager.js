import React from 'react';
import './App.css';
import axios from 'axios';
import PostPreview from './PostPreview';

class ListPager extends React.Component {
  constructor () {
    super()
    this.state = { posts: [], loaded: false, error: null }
  }

  componentDidMount () {
    axios
      .get('https://techcrunch.com/wp-json/tc/mobile/v1/posts/featured')
      .then(({ data }) => {
        this.setState({ posts: data, loaded: true });
      })
      .catch(() => {
        this.setState({ loaded: true, error: true });
      })
  }

  render () {
    if (this.state.error) {
      throw new Error('Error');
    }
    return (
      <React.Fragment>
        {this.state.loaded && this.state.posts.posts.map(p => <PostPreview key={p.id} post={p} />)}
        {!this.state.loaded && <p>Loading...</p>}
      </React.Fragment>
    )
  }
}

export default ListPager
