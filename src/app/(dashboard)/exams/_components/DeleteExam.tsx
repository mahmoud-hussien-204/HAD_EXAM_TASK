import {useExamsStoreDispatch} from "@/app/(dashboard)/exams/_hooks/useExamsStore";

import {examsSliceActions} from "@/app/(dashboard)/exams/_store/examsSlice";

import {IExam} from "@/app/(dashboard)/exams/interfaces";

import ConfirmationForm from "@/components/ConfirmationForm";

import useApiSimulation from "@/hooks/useApiSimulation";

const DeleteExam = ({data, hide}: IModalComponentProps) => {
  const dataProps = data as IExam;

  const dispatch = useExamsStoreDispatch();

  const {trigger, isLoading} = useApiSimulation();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await trigger();
    dispatch(examsSliceActions.deleteExam(dataProps.id));
    hide();
  };

  return (
    <form onSubmit={handleSubmit}>
      <ConfirmationForm
        message={`Are you sure you want this exam?`}
        isLoading={isLoading}
        subTitle={`ID: ${dataProps.id}  - Title: ${dataProps.title}`}
      />
    </form>
  );
};

export default DeleteExam;
