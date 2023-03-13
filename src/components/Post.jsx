import { Card } from "flowbite-react";
import dateConverter from "../utils/dateConverter";

const Post = ({ item }) => {
  return (
    <>
      <Card>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {item.title}
        </h5>

        <div>
          <p className="font-normal text-gray-700 dark:text-gray-400 line-clamp-2">
            {item.content}
          </p>
        </div>
        <p>{date}</p>
      </Card>
    </>
  );
};
export default Post;
