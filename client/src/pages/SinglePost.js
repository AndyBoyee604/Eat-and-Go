import React from 'react';

import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import CommentList from '../components/commentList/commentList';
import CommentForm from '../components/commentForm/commentForm';

import { QUERY_SINGLE_POST } from '../utils/queries';

const titleStyle = {
  backgroundColor: '#66ccff',
  padding: '20px'
}

const userStyle = {
  padding: "20px",
  justifyContent: 'Center'
};

const commentStyle = {
  color: 'white',
  padding: '20px'
}

const SinglePost = () => {
  const { postId } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_POST, {
    variables: { postId: postId },
  });

  const post = data?.post || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="post">
    <h1 style={titleStyle}>Post Discussion</h1>
          <div className="row bg-dark" style={userStyle}>
          <div className="col-sm-8">
            <div class="card text-center">
              <div class="card-header" style={titleStyle}>{post.createdAt}</div>
              <div class="card-body">
                <h5 class="card-title">{post.postBody}</h5>
                <p class="card-text">
                  -Posted by {post.username}
                  
                </p>
              </div>
            </div>
          </div>
            <div className="bg-dark" style={commentStyle}>
              <CommentList comments={post.comments} />
            </div>

            <div className="m-3 p-4" style={{ border: '1px dotted #1a1a1a' }}>
              <CommentForm postId={post._id} />
            </div>

        </div>
      </section>
  )
};

export default SinglePost;