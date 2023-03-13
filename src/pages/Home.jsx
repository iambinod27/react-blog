import { Spinner } from "flowbite-react";
import { useSelector } from "react-redux";
import { Footers } from "../components/Footers";
import Post from "../components/Post";

const Home = () => {
  const { postItems } = useSelector((state) => state.post);

  return (
    <>
      <div className=" mx-auto">
        <div className="grid grid-cols-12 ">
          <div className="grid gap-10 col-span-7 ">
            {/* {postItems < 1 ? (
              <>
                <div className="w-full h-72 flex items-center">
                  <div className="text-center">
                    <Spinner aria-label="Center-aligned spinner example" />
                  </div>
                </div>
              </>
            ) : (
              <>
                {postItems.map((item) => {
                  return <Post item={item} key={item.id} />;
                })}
              </>
            )} */}
            Hello
          </div>
          <div className="cols-span-4">Other side</div>
        </div>
      </div>
    </>
  );
};
export default Home;
