interface IUser {
  id: string;
  email: string;
  name: string;
  avatar_url: string;
  access_token: string;
}

interface ISvgProps {
  svgProps?: React.SVGProps<SVGSVGElement>;
  pathProps?: React.SVGProps<SVGPathElement>;
}
