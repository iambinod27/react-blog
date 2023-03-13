import { useSelector } from "react-redux";
import Post from "../components/Post";

const Home = () => {
  const { postItems } = useSelector((state) => state.post);

  console.log(postItems);

  return (
    <>
      <div className=" mx-auto">
        <div className="grid grid-cols-12 ">
          <div className="grid gap-10 col-span-7 ">
            {postItems.map((item) => {
              return <Post item={item} key={item.id} />;
            })}
          </div>
          <div className="cols-span-4"></div>
        </div>
      </div>
    </>
  );
};
export default Home;
