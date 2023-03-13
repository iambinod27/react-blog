const SidePost = () => {
  return (
    <>
      <div className="grid grid-cols-8 gap-5 pt-2">
        <div className="col-span-5">
          <div className="flex items-center gap-3">
            <img
              src="https://images.pexels.com/photos/4473796/pexels-photo-4473796.jpeg?cs=srgb&dl=pexels-ketut-subiyanto-4473796.jpg&fm=jpg"
              alt="hey"
              className="w-8 h-8 object-cover rounded-full"
            />
            <p className="text-[14px] font-light">users posted name</p>
          </div>
          <h4 className="line-clamp-2 font-medium">
            Hello mf title Hello mf title Hello mf title Hello mf title Hello mf
            title
          </h4>
        </div>
        <div className="col-span-3">
          <img
            src="https://images.pexels.com/photos/6605193/pexels-photo-6605193.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            className="w-20 h-20 object-cover"
          />
        </div>
      </div>
    </>
  );
};
export default SidePost;
