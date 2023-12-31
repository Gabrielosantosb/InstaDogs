import React from "react";
import { PhotoCommentsForm } from "./PhotoCommentsForm";
import { useContext } from "react";
import { UserContext } from "../../Hooks/userContext";
import { useState } from "react";
import { CommentsContainer } from "./styles";
import { CommentSection,CommentItem } from "./PhotoCommentsForm/styles";

// import { Container } from './styles';

export const PhotoComments = (props) => {
  const { login } = useContext(UserContext);
  const [comments, setComments] = useState(props.comments);

  return (
    <CommentsContainer>
      <CommentSection>
        {comments.map((comment) => (
          <CommentItem key={comment.comment_ID}>
            <b>
              {comment.comment_author}: <span>{comment.comment_content}</span>
            </b>
          </CommentItem>
        ))}
      </CommentSection>
      {login && <PhotoCommentsForm id={props.id} comments={comments} setComments={setComments} single={props.single} />}
    </CommentsContainer>
  );
};
