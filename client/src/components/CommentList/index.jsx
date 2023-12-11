// Our variable that handles the comment list and what we store the comments in.
const CommentList = ({ comments = [] }) => {
  console.log(comments);
  if (!comments.length) {
    return <h3>No Comments Yet</h3>;
  }
// This is what the variable returns. It returns a string of HTML that the App.jsx displays.
  return (
    <>
      <h3
        className="p-5 display-inline-block"
        style={{ borderBottom: '1px dotted #1a1a1a' }}
      >
        Comments
      </h3>
      <div className="flex-row my-4">
        {comments &&
          comments.map((comment) => (
            <div key={comment._id} className="col-12 mb-3 pb-3">
              <div className="p-3 bg-dark text-light">
                <h5 className="card-header">
                  An anonymous user commented{' '}
                  <span style={{ fontSize: '0.825rem' }}>
                    on {comment.createdAt}
                  </span>
                </h5>
                <p className="card-body">{comment.commentText}</p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};
// Exporting our variable so it can be called in other files.
export default CommentList;
