const Profile = () => {
  return (
    <>
      <div className="grid grid-cols-8">
        <div className="col-span-2 border-r">
          <div className="p-7">
            <img
              src="https://images.pexels.com/photos/15764525/pexels-photo-15764525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="User Profile"
              className="object-cover w-full h-60"
            />
            <div>
              <h3 className="font-medium text-2xl capitalize">
                Sarah tancredi
              </h3>
              <div className="my-2">bio</div>
            </div>
          </div>
        </div>
        <div className="col-span-6">
          <div className="p-7">
            <h2 className="text-3xl pb-4 border-b">Your Recent Post</h2>
            <div className="h-96 w-full flex items-center justify-center">
              <p className="font-normal text-[#6b6b6b]">No Post availible</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Profile;
