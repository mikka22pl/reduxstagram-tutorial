import React from 'react';
import { Link } from 'react-router';
import CSSTransitionGroup from 'react-addons-css-transition-group';

const Photo = React.createClass({
  render() {
    const { post, i, comments } = this.props;
    return (
      <figure class="grid-figure">
        <div class="grid-photo-wrap">
          <Link to={`/view/${post.code}`}>
            <img src={post.display_src} alt={post.caption} class="grid-photo" />
          </Link>

          <CSSTransitionGroup transitionName="like"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}>
            <span key={post.likes} class="likes-heart">{post.likes}</span>
          </CSSTransitionGroup>
        </div>

        <figcaption>
          <p>{post.caption}</p>
          <div class="control-buttons">
            <button onClick={this.props.increment.bind(null, i)} class="likes">&hearts; {post.likes}</button>
            <Link to={`/view/${post.code}`} class="button">
              <span class="coment-count">
                <span class="speech-bubble"></span>
                {comments[post.code] ? comments[post.code].length : 0}
              </span>
            </Link>
          </div>
        </figcaption>
      </figure>
    );
  }
});

export default Photo;
