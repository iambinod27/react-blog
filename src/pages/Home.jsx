import { Spinner } from "flowbite-react";
import { useSelector } from "react-redux";
import { Footers } from "../components/Footers";
import Loading from "../components/Loading";
import Post from "../components/Post";

const Home = () => {
  const { postItems } = useSelector((state) => state.post);

  return (
    <>
      <div className=" mx-auto">
        {postItems < 1 ? (
          <>
            <Loading />
          </>
        ) : (
          <>
            <div className="grid grid-cols-12 ">
              <div className="grid gap-10 col-span-7 my-9 w-[90%] mx-auto">
                {postItems.map((item) => {
                  return <Post item={item} key={item.id} />;
                })}
              </div>
              <div className="cols-span-4">Other side</div>
            </div>
          </>
        )}
      </div>
    </>
  );
};
export default Home;
