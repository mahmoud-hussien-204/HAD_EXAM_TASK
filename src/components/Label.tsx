import AppHelper from "@/helpers/AppHelper";

interface IProps extends Partial<React.LabelHTMLAttributes<HTMLLabelElement>> {
  children: React.ReactNode;
}

const Label = ({children, className, ...props}: IProps) => {
  return (
    <label
      className={AppHelper.classes("block text-gray-500 font-medium mb-0.5rem", className)}
      {...props}
    >
      {children}
    </label>
  );
};

export default Label;
