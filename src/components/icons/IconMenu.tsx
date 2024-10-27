const MenuIcon = ({pathProps, svgProps}: ISvgProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      {...svgProps}
    >
      <path
        className="fill-current"
        fillRule="evenodd"
        d="M22.75 7a.75.75 0 01-.75.75H2a.75.75 0 010-1.5h20a.75.75 0 01.75.75zM19.75 12a.75.75 0 01-.75.75H5a.75.75 0 010-1.5h14a.75.75 0 01.75.75zM16.75 17a.75.75 0 01-.75.75H8a.75.75 0 010-1.5h8a.75.75 0 01.75.75z"
        clipRule="evenodd"
        {...pathProps}
      ></path>
    </svg>
  );
};

export default MenuIcon;
