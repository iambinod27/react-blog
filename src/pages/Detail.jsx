import { Card, Dropdown, Spinner } from "flowbite-react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import SidePost from "../components/sidePost";
import { getPostDetail } from "../store/actions/postActions";
import { removeSelectedPost } from "../store/features/post/postSlice";
import dateConverter from "../utils/dateConverter";
import Loading from "../components/Loading";
import CommentList from "../components/commentList";
import { fetchPostComment } from "../store/actions/commentsActions";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostDetail(id));
    return () => {
      dispatch(removeSelectedPost());
    };
  }, [dispatch, id]);

  useEffect(() => {
    dispatch(fetchPostComment(id));
  }, [dispatch, id]);

  const { SelectedPost, isLoading } = useSelector((state) => state.post);
  const { comments, isComment } = useSelector((state) => state.comment);
  console.log(comments);
  const date = dateConverter(SelectedPost.created_at);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className="grid grid-cols-12 place-content-center">
            <div className="col-span-8 border-r px-8">
              <div className="my-5">
                <div className="flex items-center gap-3 mb-4">
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
                <h1 className="text-3xl font-semibold my-5">
                  {SelectedPost.title}
                </h1>
                <img src={SelectedPost.pic} alt={SelectedPost.title} />
                <p>{SelectedPost.content}</p>
                <div>
                  <form></form>
                  <div className="my-5">
                    <h4 className="text-xl font-medium">Comments(5)</h4>
                    {isComment ? (
                      <>
                        <Loading />
                      </>
                    ) : (
                      <>
                        {comments.length < 1 ? (
                          <>
                            <div>
                              <h2 className="text-slate-500">No comments</h2>
                            </div>
                          </>
                        ) : (
                          <>
                            {comments.map((comment) => (
                              <CommentList comment={comment} key={comment.id} />
                            ))}
                          </>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-4 w-[85%] mx-auto ">
              <Card className="border-none shadow-none">
                <div className="flex flex-col items-center pb-5">
                  <img
                    className="mb-3 h-24 w-24 rounded-full shadow-lg object-cover"
                    src="https://assets.entrepreneur.com/content/3x2/2000/20190918135414-tommy-shelby-peaky-blinders.jpeg"
                    alt="Bonnie image"
                  />
                  <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                    Thomas Shelby
                  </h5>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    500 followers
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Bio
                  </span>
                  <div className="mt-4 flex space-x-3 lg:mt-6">
                    <a
                      href="#"
                      className="inline-flex items-center rounded-lg bg-blue-700 py-2 px-4 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Follow
                    </a>
                    <a
                      href="#"
                      className="inline-flex items-center rounded-lg border border-gray-300 bg-white py-2 px-4 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                    >
                      Message
                    </a>
                  </div>
                </div>
              </Card>

              <div>
                <h3 className="font-medium">More from BlogoShpere</h3>
                <div className="flex flex-col gap-4 my-4">
                  <SidePost />
                  <SidePost />
                  <SidePost />
                  <SidePost />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
export default Detail;
