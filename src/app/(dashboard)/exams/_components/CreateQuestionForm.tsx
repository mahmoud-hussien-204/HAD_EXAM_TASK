import QuestionBodyForm from "@/app/(dashboard)/exams/_components/QuestionBodyForm";

import useCreateQuestionForm from "@/app/(dashboard)/exams/_hooks/useCreateQuestionForm";

import ModalFooter from "@/components/ModalFooter";

import ModalHeader from "@/components/ModalHeader";

const CreateQuestionForm = ({}: IModalComponentProps) => {
  const {handleSubmit, form, fieldArray, isLoading} = useCreateQuestionForm();

  return (
    <form onSubmit={handleSubmit} name="question-form" id="question-form" noValidate>
      <ModalHeader title="Create new question" />
      <QuestionBodyForm form={form} fieldArray={fieldArray} />
      <ModalFooter title="Create Question" isLoading={isLoading} />
    </form>
  );
};

export default CreateQuestionForm;
