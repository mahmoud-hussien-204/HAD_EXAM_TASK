import AppHelper from "@/helpers/AppHelper";

type IProps = React.HTMLAttributes<HTMLDivElement>;

const Divider = ({className, ...props}: IProps) => {
  return (
    <div className={AppHelper.classes("", className)} {...props}>
      <div className="divider my-0">OR</div>
    </div>
  );
};

export default Divider;
