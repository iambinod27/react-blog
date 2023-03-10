import { useSelector } from "react-redux";
import Post from "../components/Post";

const Home = () => {
  const { postItems } = useSelector((state) => state.post);
  console.log(postItems);
  return (
    <>
      <Post />
    </>
  );
};
export default Home;
