import { Spinner } from "flowbite-react";

const Loading = () => {
  return (
    <div className="w-full h-96 flex items-center justify-center">
      <div className="text-center">
        <div className="flex flex-col gap-4 font-light">
          <Spinner aria-label="Center-aligned spinner example" size="xl" />
          Loading...
        </div>
      </div>
    </div>
  );
};
export default Loading;
