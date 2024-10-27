const IconSearch = ({pathProps, svgProps}: ISvgProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      fill="none"
      viewBox="0 0 22 22"
      className="w-1rem"
      {...svgProps}
    >
      <path
        className="fill-current"
        fillRule="evenodd"
        d="M10.5 1.75a8.75 8.75 0 100 17.5 8.75 8.75 0 000-17.5zM.25 10.5C.25 4.84 4.84.25 10.5.25S20.75 4.84 20.75 10.5c0 2.56-.939 4.902-2.491 6.698l3.271 3.272a.75.75 0 11-1.06 1.06l-3.272-3.271A10.21 10.21 0 0110.5 20.75C4.84 20.75.25 16.16.25 10.5z"
        clipRule="evenodd"
        {...pathProps}
      ></path>
    </svg>
  );
};

export default IconSearch;
