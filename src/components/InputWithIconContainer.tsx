interface IProps {
  children: React.ReactNode;
  icon: React.ReactNode;
}

const InputWithIconContainer = ({children, icon}: IProps) => {
  return (
    <div className="relative">
      {children}
      <div className="absolute end-1rem top-1/2 -translate-y-1/2 cursor-pointer">{icon}</div>
    </div>
  );
};

export default InputWithIconContainer;
