const IconFile = ({svgProps}: ISvgProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      className="w-1.25rem"
      {...svgProps}
    >
      <path
        className="stroke-current"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M18 10h-5"
        opacity="0.5"
      ></path>
      <path
        className="stroke-current"
        strokeWidth="1.5"
        d="M10 3h6.5c.464 0 .697 0 .892.026a3 3 0 012.582 2.582c.026.195.026.428.026.892"
        opacity="0.5"
      ></path>
      <path
        className="stroke-current"
        strokeWidth="1.5"
        d="M2 6.95c0-.883 0-1.324.07-1.692A4 4 0 015.257 2.07C5.626 2 6.068 2 6.95 2c.386 0 .58 0 .766.017a4 4 0 012.18.904c.144.119.28.255.554.529L11 4c.816.816 1.224 1.224 1.712 1.495a4 4 0 00.848.352C14.098 6 14.675 6 15.828 6h.374c2.632 0 3.949 0 4.804.77.079.07.154.145.224.224.77.855.77 2.172.77 4.804V14c0 3.771 0 5.657-1.172 6.828C19.657 22 17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172C2 19.657 2 17.771 2 14V6.95z"
      ></path>
    </svg>
  );
};

export default IconFile;
