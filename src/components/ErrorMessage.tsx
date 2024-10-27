interface IProps {
  message: string | undefined;
}

const ErrorMessage = ({message}: IProps) => {
  return <p className="text-error text-sm mt-0.25rem">{message}</p>;
};

export default ErrorMessage;
