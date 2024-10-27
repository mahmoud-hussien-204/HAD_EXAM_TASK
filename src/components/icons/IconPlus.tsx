const IconPlus = ({svgProps}: ISvgProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="8"
      height="8"
      fill="none"
      viewBox="0 0 8 8"
      className="h-0.75rem w-0.75rem"
      {...svgProps}
    >
      <path
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M7 4H4m0 0H1m3 0V1m0 3v3"
        className="stroke-current"
      ></path>
    </svg>
  );
};

export default IconPlus;
