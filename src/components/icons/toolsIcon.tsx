import {Props} from ".";

export default function ToolsIcon({pathProps, svgProps}: Props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='22'
      height='22'
      fill='none'
      viewBox='0 0 22 22'
      className='w-1.25rem'
      {...svgProps}
    >
      <path
        className='fill-current'
        fillRule='evenodd'
        d='M.25 5a4.75 4.75 0 019.5 0v.432l2.033-2.033a4.75 4.75 0 116.718 6.717l-2.134 2.134H17a4.75 4.75 0 110 9.5H5A4.75 4.75 0 01.25 17V5zm8.214 15.25H17a3.25 3.25 0 000-6.5h-2.133l-5.978 5.978a4.77 4.77 0 01-.425.522zm1.286-3.504l7.69-7.69a3.25 3.25 0 00-4.596-4.597L9.75 7.553v9.193zM5 1.75A3.25 3.25 0 001.75 5v12a3.25 3.25 0 006.5 0V5A3.25 3.25 0 005 1.75zm0 15a.25.25 0 100 .5.25.25 0 000-.5zM3.25 17a1.75 1.75 0 113.5 0 1.75 1.75 0 01-3.5 0z'
        clipRule='evenodd'
        {...pathProps}
      ></path>
    </svg>
  );
}
