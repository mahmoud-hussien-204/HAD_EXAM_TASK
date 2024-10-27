import {ReactNode} from "react";

type Props = {children: ReactNode};

const Content = ({children}: Props) => {
  return (
    <div className="bg-primary/5 flex flex-col lg:ms-sidebar-width peer-checked/sidebar-toggle:ms-sidebar-width lg:peer-checked/sidebar-toggle:ms-sidebar-width-sm m-content-margin rounded-box transition-all min-h-content-min-height min-w-content-min-width lg:min-w-0">
      {children}
    </div>
  );
};

export default Content;
