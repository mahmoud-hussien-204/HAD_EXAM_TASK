import AppHelper from "@/helpers/AppHelper";

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
}

export const Title = ({className, title, subtitle, ...props}: IProps) => {
  return (
    <div className={AppHelper.classes("", className)} {...props}>
      <h1 className="text-3xl font-medium mb-0.5rem">{title}</h1>
      {subtitle ? <h3 className="text-lg text-gray-500">{subtitle}</h3> : null}
    </div>
  );
};
