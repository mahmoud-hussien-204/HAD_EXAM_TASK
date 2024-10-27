import ImageLogo from "@/app/assets/logo.png";

import Image from "next/image";

interface IProps {
  className?: string;
}

const Logo = ({className}: IProps) => {
  return <Image src={ImageLogo} alt="borcel-logo" width={200} className={className} />;
};

export default Logo;
