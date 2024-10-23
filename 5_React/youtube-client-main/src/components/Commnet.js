import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useDispatch } from "react-redux";
import { createComment, modifyComment, deleteComment } from "";

const Commnet = ({ comment, videoCode }) => {
  const dispatch = useDispatch();
  const { id } = useAuth();
  const [newReply, setNewReply] = useState({
    commentText: "",
    videoCode: videoCode,
    id: id,
    parentCode: 0,
  });
};

const deleteComment = () => {
  dispatch(removeComment({ videoCode, commentCode }));
};

const edit = (commentId, commentText, commentCode) => {
  if (id === commentId) {
    setIsEdit(true);
    setNewReply({ ...newReply, commentText, commentCode });
  }
};

const editCancel = () => {
  setIsEdit(false);
  setNewReplt({ ...newReply, commentText: "", commentCode: 0 });
};

const editSubmit = () => {
  dispatch(modifyComment(newReply));
  editCancle();
};

return (
  <div className="comment-content">
    {comment.delete ? (
      <p>삭제된 댓글입니다.</p>
    ) : (
      <>
        {" "}
        <h4>{comment.id}</h4>
        {idEdit ? (
          <>
            <input
              type="text"
              value={newReply.commentText}
              onChange={(e) =>
                setNewReply({
                  ...newReply,
                  commentText: e.target.value,
                  commentCode: comment.commentCode,
                })
              }
            />
            <div className="edit-content">
              <button onClick={editCancel}>취소</button>
              <button onClick={editSubmit}>수정</button>
            </div>
          </>
        ) : (
          <p onClick={() => edit(comment.id)}>
            {comment.commentText}
            {commentCode}
          </p>
        )}
        <button
          onClick={() =>
            setNewReply({
              ...newReply,
              parentCode: comment.commentCode,
            })
          }
        >
          답글
        </button>
        {id === comment.id && (
          <button onClick={() => deleteComment(comment.commentCode)}>
            삭제{" "}
          </button>
        )}
      </>
    )}

    {newReply.parentCode === comment.commentCode && (
      <>
        <input
          type="text"
          placeholder="답글 추가.."
          value={newReply.commentText}
          onChange={(e) =>
            setNewReply({
              ...newReply,
              commentText: e.target.value,
            })
          }
        />
        <div className="reply-add-status">
          <button
            onClick={() =>
              setIsReply({
                ...newReply,
                commentText: "",
                parentCode: 0,
              })
            }
          >
            취소
          </button>
          <button onClick={addReply}>답글</button>
        </div>
      </>
    )}
  </div>
);
