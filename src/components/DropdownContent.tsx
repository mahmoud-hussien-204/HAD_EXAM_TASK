import AppHelper from "@/helpers/AppHelper";

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const DropdownContent = ({className, children}: IProps) => {
  return (
    <div
      tabIndex={0}
      className={AppHelper.classes(
        "dropdown-content border w-full mt-0.5rem bg-base-100 p-1rem rounded-box",
        className
      )}
    >
      {children}
    </div>
  );
};

export default DropdownContent;
