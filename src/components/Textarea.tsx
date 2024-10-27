import AppHelper from "@/helpers/AppHelper";
import {forwardRef} from "react";

interface IProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  isError?: boolean;
}

const Textarea = forwardRef(
  ({isError, className, ...props}: IProps, ref: React.ForwardedRef<HTMLTextAreaElement>) => {
    return (
      <textarea
        ref={ref}
        {...props}
        className={AppHelper.classes(
          "textarea textarea-bordered h-8rem w-full resize-none rounded-0.5rem bg-base-100 text-base-content placeholder:text-13 focus:border-primary focus:outline-0",
          {
            "!border-error": isError,
          },
          className
        )}
      />
    );
  }
);

export default Textarea;

Textarea.displayName = "Textarea";
