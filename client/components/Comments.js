import React from 'react';

const Comments = React.createClass({
  renderComment(comment, i) {
    console.log(comment);
    return (
      <div class="comment" key={i}>
        <p>
          <strong>{comment.user}</strong>
          {comment.text}
          <button class="remove-comment" onClick={this.props.removeComment.bind(null, this.props.params.postId, i)}>&times;</button>
        </p>
      </div>
    )
  },
  handleSubmit(e) {
    e.preventDefault();
    const { postId } = this.props.params;
    const author = this.refs.author.value;
    const comment = this.refs.comment.value;
    this.props.addComment(postId, author, comment);
    this.refs.commentForm.reset();
  },
  render() {
    return (
      <div class="comments">
        {this.props.postComments.map(this.renderComment)}
        <form ref="commentForm" class="comment-form" onSubmit={this.handleSubmit}>
          <input type="text" ref="author" name="" placeholder="author" />
          <input type="text" ref="comment" name="" placeholder="comment" />
          <input type="submit" hidden />
        </form>
      </div>
    )
  }
});

export default Comments;
