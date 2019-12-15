import React from 'react';

const CommentListComponent = props => {
  const { comment, deleteComment } = props;

  if (!comment || Object.entries(comment).length === 0) {
    return <div className="mb-5">no comments</div>;
  }

  const arr = Object.keys(comment).reverse();
  return (
    <div className="mb-4">
      {arr.map(item => (
        <div
          key={item}
          className="mb-2"
          style={{ borderRadius: '5px', border: '1px solid #ccc' }}
        >
          <div
            className="bg-info text-white p-1 px-2"
            style={{ borderRadius: '5px 5px 0 0' }}
          >
            {item}
          </div>
          <div className="row">
            <div className="col-12 col-sm-9">
              <div className="p-2">{comment[item]}</div>
            </div>
            <div className="col-12 col-sm-3 text-center">
              <div className="d-flex flex-column justify-content-center h-100 p-1">
                <button
                  className="btn btn-danger btn-sm align-self-center"
                  onClick={deleteComment(item)}
                >
                  delete
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommentListComponent;
