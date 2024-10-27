import AppHelper from "@/helpers/AppHelper";

interface IProps extends React.PropsWithChildren {
  className?: string;
}

const Container = ({children, className}: IProps) => {
  return <div className={AppHelper.classes("container", className)}>{children}</div>;
};

export default Container;
