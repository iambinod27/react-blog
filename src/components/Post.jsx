import { Card } from "flowbite-react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getPostDetail } from "../store/actions/postActions";
import dateConverter from "../utils/dateConverter";

const Post = ({ item }) => {
  const date = dateConverter(item.created_at);

  return (
    <>
      <Card>
        <div className="flex items-center gap-3">
          <img
            src="https://images.pexels.com/photos/4473796/pexels-photo-4473796.jpeg?cs=srgb&dl=pexels-ketut-subiyanto-4473796.jpg&fm=jpg"
            alt="hey"
            className="w-6 h-6 object-cover rounded-full"
          />
          <p className="text-[14px] font-light">users posted name</p>
        </div>
        <Link to={`/post/${item.id}`}>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white line-clamp-2">
            {item.title}
          </h5>
        </Link>

        <div>
          <p className="font-normal text-gray-700 dark:text-gray-400 line-clamp-2">
            {item.content}
          </p>
        </div>
        <div>
          <p>{date}</p>
        </div>
      </Card>
    </>
  );
};
export default Post;
