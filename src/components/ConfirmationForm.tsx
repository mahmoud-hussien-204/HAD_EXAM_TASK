import ModalBody from "./ModalBody";

import ModalFooter from "./ModalFooter";

import ModalHeader from "./ModalHeader";

interface IProps {
  message: string;
  subTitle?: string;
  submitButtonTitle?: string;
  isLoading: boolean;
}

const ConfirmationForm = ({
  isLoading,
  message,
  subTitle,
  submitButtonTitle = "Yes, Confirm",
}: IProps) => {
  return (
    <>
      <ModalHeader title="Confirmation" />
      <ModalBody>
        <h5 className="mb-0.5rem text-18 text-base-content">{message}</h5>
        <h6 className="text-14">
          {subTitle || "Lorem ipsum dolor, sit amet consectetur adipisicing elit."}
        </h6>
      </ModalBody>
      <ModalFooter isLoading={isLoading} title={submitButtonTitle} />
    </>
  );
};

export default ConfirmationForm;
