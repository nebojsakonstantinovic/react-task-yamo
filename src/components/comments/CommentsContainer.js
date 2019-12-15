import React, { Component } from 'react';
import { connect } from 'react-redux';

import { CommentsOperations } from './duck';
import CommentsComponent from './CommentsComponent';

class CommentsContainer extends Component {
  componentDidMount() {
    const { comment, loadComments } = this.props;
    if (!comment) {
      loadComments();
    }
  }

  deleteComment = subject => () => {
    const { deleteComments, id } = this.props;
    deleteComments({
      id,
      subject,
    });
  };

  render() {
    const { comment, id } = this.props;
    return (
      <CommentsComponent
        comment={comment}
        deleteComment={this.deleteComment}
        id={id}
      />
    );
  }
}

const mapStateToProps = (state, props) => {
  const { comments } = state;
  const { id } = props.match.params;
  return { comment: comments[id], id };
};

const mapDispatchToProps = {
  loadComments: CommentsOperations.loadComments,
  saveComments: CommentsOperations.saveComments,
  deleteComments: CommentsOperations.deleteComments,
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentsContainer);
