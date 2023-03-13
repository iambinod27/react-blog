import { Avatar, Button, Dropdown, Navbar } from "flowbite-react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import SearchInput from "./SearchInput";

const Navbars = () => {
  const { isAuthenticated, username } = useSelector((state) => state.auth);

  return (
    <>
      <Navbar fluid={true} className="bg-slate-200 border-b">
        <NavLink to="/">
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            <h1>Blogoshpere.</h1>
          </span>
        </NavLink>

        <div className="flex md:order-2">
          <div>
            {isAuthenticated ? (
              <>
                <Dropdown
                  arrowIcon={false}
                  inline={true}
                  label={
                    <Avatar
                      img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                      rounded={true}
                      className="w-11"
                    />
                  }
                  className="p-2"
                >
                  <Dropdown.Header>
                    <span className="block text-sm">Admin</span>
                    <span className="block truncate text-sm font-medium">
                      name@flowbite.com
                    </span>
                  </Dropdown.Header>
                  <Dropdown.Item>Dashboard</Dropdown.Item>
                  <Dropdown.Item>Settings</Dropdown.Item>
                  <Dropdown.Item>Earnings</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item>Sign out</Dropdown.Item>
                </Dropdown>
              </>
            ) : (
              <>
                <div className="flex gap-2 ">
                  <Link to="/login">
                    <Button color="dark" className="px-3 ">
                      Login
                    </Button>
                  </Link>
                  <Link to="/signup">
                    <Button color="light" className="px-3">
                      Sign Up
                    </Button>
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
        <Navbar.Toggle />
      </Navbar>
    </>
  );
};
export default Navbars;
