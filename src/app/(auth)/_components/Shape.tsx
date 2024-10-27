const Shape = () => {
  return (
    <div className="absolute top-1/2 -translate-y-1/2 translate-x-8rem end-0 h-[90%] min-h-[500px] w-1/3 lg:w-1/2 border border-primary/20 rounded-md rotate-12 ">
      <div className="absolute inset-4rem rounded-inherit border border-primary/40">
        <div className="hidden lg:block absolute inset-4rem rounded-inherit border border-primary/60"></div>
      </div>
    </div>
  );
};

export default Shape;
