import { Avatar, Button, Dropdown, Modal, Navbar } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { getHttpOnlyCookies } from "../utils/getHttpOnlyCookies";
import { onLogout } from "../store/features/auth/authSlice";
import { BiEditAlt } from "react-icons/bi";
import { useState } from "react";

const Navbars = () => {
  const isAuth = getHttpOnlyCookies("isAuthenticated");

  const username = getHttpOnlyCookies("username");

  const dispatch = useDispatch();

  const [show, setShow] = useState(false);

  const onClick = () => setShow(true);
  const onClose = () => setShow(false);
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
            {isAuth ? (
              <>
                <div className="flex gap-5">
                  <Button color="dark" className="flex gap-2" onClick={onClick}>
                    Write Post <BiEditAlt />
                  </Button>
                  <Modal show={show} onClose={onClose}>
                    <Modal.Header>Terms of Service</Modal.Header>
                    <Modal.Body>
                      <div className="space-y-6">
                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                          With less than a month to go before the European Union
                          enacts new consumer privacy laws for its citizens,
                          companies around the world are updating their terms of
                          service agreements to comply.
                        </p>
                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                          The European Union’s General Data Protection
                          Regulation (G.D.P.R.) goes into effect on May 25 and
                          is meant to ensure a common set of data rights in the
                          European Union. It requires organizations to notify
                          users as soon as possible of high-risk data breaches
                          that could personally affect them.
                        </p>
                      </div>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button onClick={onClick}>I accept</Button>
                      <Button color="gray" onClick={onClick}>
                        Decline
                      </Button>
                    </Modal.Footer>
                  </Modal>
                  <Dropdown
                    arrowIcon={false}
                    inline={true}
                    label={
                      <>
                        <Avatar
                          img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                          className="w-11"
                        />
                        <span className="block text-base">
                          {isAuth && username}
                        </span>
                      </>
                    }
                    className="p-2"
                  >
                    <Dropdown.Header>
                      <span className="block truncate text-sm font-medium">
                        name@flowbite.com
                      </span>
                    </Dropdown.Header>
                    <Dropdown.Item>Dashboard</Dropdown.Item>
                    <Dropdown.Item>Settings</Dropdown.Item>
                    <Dropdown.Item>Earnings</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item onClick={() => dispatch(onLogout())}>
                      Sign out
                    </Dropdown.Item>
                  </Dropdown>
                </div>
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
