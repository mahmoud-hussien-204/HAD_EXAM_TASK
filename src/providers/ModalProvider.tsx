"use client";

import {createContext, useState} from "react";

interface IModalContext extends IModalComponentProps {
  setClassName: React.Dispatch<React.SetStateAction<string>>;
  className: string;
}

export const ModalContext = createContext<IModalContext>({
  type: undefined,
  isOpen: false,
  show: () => {},
  hide: () => {},
  data: {},
  className: "",
  setClassName: () => {},
});

interface IModalProviderProps {
  children: React.ReactNode;
}

const ModalProvider = ({children}: IModalProviderProps) => {
  const [type, setType] = useState<IModals | undefined>(undefined);

  const [isOpen, setIsOpen] = useState(false);

  const [data, setData] = useState<unknown>(undefined);

  const [className, setClassName] = useState("");

  const show = (type: IModals, data: unknown) => {
    setType(type);
    setIsOpen(true);
    setData(data);
  };

  const hide = () => {
    setType(undefined);
    setIsOpen(false);
    setData(undefined);
    setClassName("");
  };

  return (
    <ModalContext.Provider
      value={{
        isOpen,
        show,
        hide,
        data,
        type,
        className,
        setClassName,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
