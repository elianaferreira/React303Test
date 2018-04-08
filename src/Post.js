import React from 'react';
import './App.css';

const Paragraph = props => (
  <p><span dangerouslySetInnerHTML={{__html: props.text}}/></p>
);

const BlockQuote = props => (
  <p><i dangerouslySetInnerHTML={{__html: props.text}}/></p>
);

const Post = props => {
  //in case user try to load this view directly (not from the list) return to the principal view (list of news)
  if (!props.history.location.state) {
    props.history.push('/');
    //return something
    return <div />;
  }
  return (
    <React.Fragment>
      <h2 className='header'>{props.history.location.state.post.title}</h2>
      <div className='subheader'>
        <span className='author'>by {props.history.location.state.post.authors}</span>
        <span className='date'>at {new Date(props.history.location.state.post.date).toDateString()}</span>
      </div>
      <img src={props.history.location.state.post.featured_media.url} width={'40%'}/>
      <section className='content'>
        {props.history.location.state.post.content.map((p, index) => {
          if (p.type === 'paragraph') {
            return <Paragraph key={index} text={p.text}/>
          } else if (p.type === 'block_quote') {
            return <BlockQuote key={index} text={p.text} />
          }
        })}
      </section>
      <section className='tagBox'>
        {props.history.location.state.post.tags.map(tag => {
          return <span className='tag'>{tag.name}</span>
        })}
      </section>
    </React.Fragment>
  );
}

export default Post;
