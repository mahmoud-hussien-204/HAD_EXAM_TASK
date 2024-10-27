import AppHelper from "@/helpers/AppHelper";

import Link from "next/link";

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  isLogin?: boolean;
}

export default function HaveAndNotHaveAccount({isLogin = true, className, ...props}: IProps) {
  return (
    <div className={AppHelper.classes("text-center", className)} {...props}>
      <p className="text-gray-500">
        {isLogin ? (
          <>
            Not a Member yet?{" "}
            <Link href="" className="link-primary">
              Sign up
            </Link>
          </>
        ) : (
          <>
            Have an Account?{" "}
            <Link href="" className="link-primary">
              Sign in
            </Link>
          </>
        )}
      </p>
    </div>
  );
}
