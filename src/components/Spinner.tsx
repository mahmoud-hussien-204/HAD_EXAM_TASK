import AppHelper from "@/helpers/AppHelper";

const Spinner = () => {
  return (
    <div className={AppHelper.classes("loader w-[5px] h-[5px] rounded-full text-primary")}></div>
  );
};

export default Spinner;
