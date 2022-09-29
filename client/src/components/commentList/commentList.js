import React from "react";

const commentStyle = {
  color: "black"
};

const titleStyle = {
  backgroundColor: "#66ccff",
  padding: "10px",
  color: 'black'
};

const divStyle = {
  justifyContent: "Center",
  padding: '20px'
};

const CommentList = ({ comments = [] }) => {
  if (!comments.length) {
    return <h3>No Comments Yet</h3>;
  }

  return (
    <section className="comments">
      <h1 style={titleStyle}>Comments</h1>
      {comments &&
        comments.map((comment) => (
          <div className="row" style={divStyle} key={comment._id}>
            <div className="col-sm-8">
            <div className="card">
              <div className="card-header" style={commentStyle}>Comment</div>
              <div className="card-body">
                <blockquote className="blockquote mb-0">
                  <p style={commentStyle}>
                    {comment.commentBody}
                  </p>
                  <footer className="blockquote-footer">
                    Posted by {comment.username} on {comment.createdAt}
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
          </div>
        ))}
    </section>
  );
};

export default CommentList;
