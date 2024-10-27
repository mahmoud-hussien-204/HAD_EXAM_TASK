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
          "input input-bordered w-full focus:border-primary focus:outline-0 placeholder:text-13",
          {
            "input-error focus:border-error": isError,
          },
          className
        )}
      />
    );
  }
);

export default Input;

Input.displayName = "Input";
