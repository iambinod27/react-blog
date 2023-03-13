import { Card, Dropdown } from "flowbite-react";
import SidePost from "../components/sidePost";

const Detail = () => {
  return (
    <>
      <div className="grid grid-cols-12 place-content-center">
        <div className="col-span-8 border-r">
          <div className="my-5">
            <h1 className="text-3xl font-semibold">Hello mf</h1>
            <img src="" alt="Title" />
            <p>details</p>
          </div>
        </div>
        <div className="col-span-4 w-[85%] mx-auto ">
          <Card className="border-none shadow-none">
            <div className="flex flex-col items-center pb-5">
              <img
                className="mb-3 h-24 w-24 rounded-full shadow-lg"
                src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                alt="Bonnie image"
              />
              <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                Bonnie Green
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
                  Add friend
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
  );
};
export default Detail;
