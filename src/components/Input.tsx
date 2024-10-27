import AppHelper from "@/helpers/AppHelper";

import {forwardRef} from "react";

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  isError?: boolean;
}

const Input = forwardRef(
  ({isError, className, ...props}: IProps, ref: React.ForwardedRef<HTMLInputElement>) => {
    return (
      <input
        ref={ref}
        {...props}
        className={AppHelper.classes(
          "input input-bordered w-full focus:border-primary focus:outline-0 focus:outline-primary/50 focus:outline-dashed placeholder:text-13",
          {
            "input-error focus:outline-error/50 focus:border-error": isError,
          },
          className
        )}
      />
    );
  }
);

export default Input;
