const IconTrash = ({svgProps}: ISvgProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 20 20"
      className="w-1rem"
      {...svgProps}
    >
      <path
        className="fill-current"
        fillRule="evenodd"
        d="M8.31.25h3.38c.217 0 .406 0 .584.028a2.25 2.25 0 011.64 1.183c.084.16.143.339.212.544l.111.335a1.25 1.25 0 001.263.91h3a.75.75 0 010 1.5h-17a.75.75 0 010-1.5h3.09a1.25 1.25 0 001.173-.91l.112-.335c.068-.205.127-.384.21-.544A2.25 2.25 0 017.727.278C7.904.25 8.093.25 8.31.25zm-1.302 3a2.757 2.757 0 00.175-.428l.1-.3c.091-.273.112-.328.133-.368a.75.75 0 01.547-.395c.044-.007.104-.009.392-.009h3.29c.288 0 .348.002.392.01a.75.75 0 01.547.394c.021.04.042.095.133.369l.1.3.039.113c.039.108.085.213.136.314H7.008z"
        clipRule="evenodd"
      ></path>
      <path
        className="fill-current"
        d="M3.915 6.45a.75.75 0 10-1.497.1l.464 6.952c.085 1.282.154 2.318.316 3.132.169.845.455 1.551 1.047 2.104.591.554 1.315.793 2.17.904.822.108 1.86.108 3.146.108h.879c1.285 0 2.324 0 3.146-.108.854-.111 1.578-.35 2.17-.904.591-.553.877-1.26 1.046-2.104.162-.813.23-1.85.316-3.132l.464-6.952a.75.75 0 00-1.497-.1l-.46 6.9c-.09 1.347-.154 2.285-.294 2.99-.137.685-.327 1.047-.6 1.303-.274.256-.648.422-1.34.512-.713.093-1.653.095-3.004.095h-.774c-1.35 0-2.29-.002-3.004-.095-.692-.09-1.066-.256-1.34-.512-.273-.256-.463-.618-.6-1.302-.14-.706-.204-1.644-.294-2.992l-.46-6.899z"
      ></path>
      <path
        className="fill-current"
        d="M7.425 8.254a.75.75 0 01.821.671l.5 5a.75.75 0 11-1.492.15l-.5-5a.75.75 0 01.671-.821zM12.575 8.254a.75.75 0 01.671.82l-.5 5a.75.75 0 01-1.492-.149l.5-5a.75.75 0 01.82-.671z"
      ></path>
    </svg>
  );
};

export default IconTrash;
