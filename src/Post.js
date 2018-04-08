import React from 'react';
import './App.css';

const Paragraph = props => (
  <p><span dangerouslySetInnerHTML={{__html: props.text}}/></p>
)

const BlockQuote = props => (
  <p><i dangerouslySetInnerHTML={{__html: props.text}}/></p>
)

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
    </React.Fragment>
  );
}

export default Post;
