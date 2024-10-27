const IconClose = ({svgProps}: ISvgProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      {...svgProps}
    >
      <circle cx="12" cy="12" r="10" className="stroke-current" strokeWidth="1.5"></circle>
      <path
        className="stroke-current"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M14.5 9.5l-5 5m0-5l5 5"
      ></path>
    </svg>
  );
};

export default IconClose;
