"use client";

import IconClose from "@/components/icons/IconClose";

import useModal from "@/hooks/useModal";

interface IProps {
  title: React.ReactNode;
  isCloseBtn?: boolean;
}

const ModalHeader = ({title, isCloseBtn = true}: IProps) => {
  const {hide} = useModal();

  return (
    <div className="flex items-center justify-between border-b pb-1rem">
      <h3 className="text-20 text-base-content">{title}</h3>
      {isCloseBtn && (
        <button type="button" onClick={hide} className="text-primary">
          <IconClose />
        </button>
      )}
    </div>
  );
};

export default ModalHeader;
