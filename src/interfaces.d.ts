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

type IModals = keyof typeof import("./enums").EnumModals;

interface IModalComponentProps {
  type: IModals | undefined;
  isOpen: boolean;
  show: (type: IModals, data?: unknown) => void;
  hide: () => void;
  data: unknown;
}

interface IOption
  extends React.DetailedHTMLProps<
    React.OptionHTMLAttributes<HTMLOptionElement>,
    HTMLOptionElement
  > {
  value: string;
  label: string;
}
