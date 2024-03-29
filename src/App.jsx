import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Layout from "./components/Layout";
import Account from "./components/Account";
import { useDispatch, useSelector } from "react-redux";
import { getHttpOnlyCookies } from "./utils/getHttpOnlyCookies";
import Home from "./pages/Home";
import { getAllposts } from "./store/actions/postActions";
import Detail from "./pages/Detail";
import { checkUser } from "./store/actions/authActions";
import Profile from "./pages/Profile";

function App() {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const access_token = getHttpOnlyCookies("access_token");
  const isAuth = getHttpOnlyCookies("isAuthenticated");

  useEffect(() => {
    if (isAuth) {
      dispatch(checkUser());
    }
  }, [dispatch, access_token]);

  useEffect(() => {
    dispatch(getAllposts());
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/post/:id" element={<Detail />} />
          <Route path="/user/:id" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Account />} />
        </Route>
      </Routes>

      {/* <Login /> */}
    </div>
  );
}

export default App;
