import React from "react";

const commentsData = [
  {
    name: "saiful hasan",
    text: "My first comments",
    replies: [{ name: "alex", text: "first alex comment", replies: [] }],
  },
  { name: "saiful hasan", text: "My first comments", replies: [] },
  { name: "saiful hasan", text: "My first comments", replies: [] },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex p-2 shadow-sm bg-gray-100 my-2">
      <img
        className="w-8 h-8 my-2 rounded-full "
        alt="user"
        src="https://preview.redd.it/high-resolution-remakes-of-the-old-default-youtube-avatar-v0-bgwxf7bec4ob1.png?width=640&crop=smart&auto=webp&s=99d5fec405e0c7fc05f94c1e1754f7dc29ccadbd"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index} className="">
      <Comment key={index} data={comment} />
      {comment.replies && comment.replies.length > 0 && (
        <div className="pl-5 border border-l-black ml-5">
          <CommentList comments={comment.replies} />
        </div>
      )}
    </div>
  ));
};


const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="font-bold text-2xl">Comments :</h1>
      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
