import AppHelper from "@/helpers/AppHelper";

import {forwardRef} from "react";

interface IProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  isError?: boolean;
  options: IOption[];
}

const Select = forwardRef(
  ({isError, className, options, ...props}: IProps, ref: React.ForwardedRef<HTMLSelectElement>) => {
    return (
      <select
        ref={ref}
        {...props}
        className={AppHelper.classes(
          "select select-bordered min-h-0 w-full border-base-200 bg-base-100 text-base-content focus:border-primary focus:outline-0",
          {
            "!border-error": isError,
          },
          className
        )}
      >
        {options.map((option) => (
          <option key={option.value} className="text-white disabled:text-neutral-500" {...option}>
            {option.label}
          </option>
        ))}
      </select>
    );
  }
);

export default Select;

Select.displayName = "Select";
