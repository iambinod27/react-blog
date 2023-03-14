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
          <div className="grid gap-10 col-span-7 my-9 w-[90%] mx-auto">
            {postItems < 1 ? (
              <>
                <div className="w-full h-96 flex items-center justify-center">
                  <div className="text-center">
                    <div className="flex flex-col gap-4 font-light">
                      <Spinner
                        aria-label="Center-aligned spinner example"
                        size="xl"
                      />
                      Loading...
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                {postItems.map((item) => {
                  return <Post item={item} key={item.id} />;
                })}
              </>
            )}
          </div>
          <div className="cols-span-4">Other side</div>
        </div>
      </div>
    </>
  );
};
export default Home;
