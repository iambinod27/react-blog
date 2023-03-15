import dateConverter from "../utils/dateConverter";

const CommentList = ({ comment }) => {
  const date = dateConverter(comment.created_at);
  return (
    <div>
      <div className="flex items-center gap-3 my-2">
        <img
          src="https://images.pexels.com/photos/4473796/pexels-photo-4473796.jpeg?cs=srgb&dl=pexels-ketut-subiyanto-4473796.jpg&fm=jpg"
          alt="hey"
          className="w-10 h-10 object-cover rounded-full"
        />
        <div className="text-[14px] flex flex-col">
          <p className="font-normal">users posted name</p>
          <div className="font-light">{date}</div>
        </div>
      </div>
      <div className="font-light">{comment.content}</div>
    </div>
  );
};
export default CommentList;
