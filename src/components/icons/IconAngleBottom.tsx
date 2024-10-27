const AngleBottomIcon = ({svgProps, pathProps}: ISvgProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="8"
      fill="none"
      viewBox="0 0 14 8"
      {...svgProps}
    >
      <path
        className="fill-current"
        d="M7.37 7.835l6.43-6.63C14.201.79 13.958 0 13.43 0H.57C.042 0-.2.79.2 1.205l6.43 6.63c.213.22.527.22.74 0z"
        {...pathProps}
      ></path>
    </svg>
  );
};

export default AngleBottomIcon;
