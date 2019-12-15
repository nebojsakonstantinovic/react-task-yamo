import React from 'react';

import InputCommentComponent from './CommentsComponent/InputCommentComponent';
import CommentListComponent from './CommentsComponent/CommentListComponent';

const CommentsComponent = props => {
  const { comment, deleteComment, id } = props;
  return (
    <div className="container">
      <InputCommentComponent id={id} />
      <CommentListComponent comment={comment} deleteComment={deleteComment} />
    </div>
  );
};

export default CommentsComponent;
