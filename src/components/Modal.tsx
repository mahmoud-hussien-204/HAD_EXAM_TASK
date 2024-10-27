"use client";

import useModal from "@/hooks/useModal";

import {createPortal} from "react-dom";

type IProps = Partial<Record<IModals, React.FunctionComponent<IModalComponentProps>>>;

const Modal = ({...props}: IProps) => {
  const {className, type, isOpen, ...modalProps} = useModal();

  const Content: React.FC = () => {
    if (type && props?.[type]) {
      const Component = props[type];
      return <Component type={type} isOpen={isOpen} {...modalProps} />;
    }
    return null;
  };

  return isOpen
    ? createPortal(
        <ModalWrapper className={className}>{Content ? <Content /> : null}</ModalWrapper>,
        document.getElementById("modal-root") as HTMLElement
      )
    : null;
};

export default Modal;

export const ModalWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className="modal modal-open z-50">
      <div className={`modal-box max-w-[40rem] ${className}`}>{children}</div>
    </div>
  );
};
