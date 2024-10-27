import Button from "@/components/Button";

import IconGoogle from "@/components/icons/IconGoogle";

import IconLink from "@/components/icons/IconLink";

import AppHelper from "@/helpers/AppHelper";

import {HTMLAttributes, ReactNode} from "react";

type Props = {title: ReactNode} & HTMLAttributes<HTMLDivElement>;

const WithGoogle = ({title, className, ...props}: Props) => {
  return (
    <div className={AppHelper.classes("", className)} {...props}>
      <Button type="button" variant="outline" className="flex items-center justify-between w-full">
        <div className="flex items-center gap-1rem">
          <IconGoogle />
          <span>{title}</span>
        </div>
        <IconLink />
      </Button>
    </div>
  );
};

export default WithGoogle;
