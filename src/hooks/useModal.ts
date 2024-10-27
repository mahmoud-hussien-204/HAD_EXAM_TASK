import {ModalContext} from "@/providers/ModalProvider";
import {useContext} from "react";

const useModal = () => {
  return useContext(ModalContext);
};

export default useModal;
