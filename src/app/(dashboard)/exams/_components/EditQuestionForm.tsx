import QuestionBodyForm from "@/app/(dashboard)/exams/_components/QuestionBodyForm";

import useEditQuestionForm from "@/app/(dashboard)/exams/_hooks/useEditQuestionForm";

import ModalFooter from "@/components/ModalFooter";

import ModalHeader from "@/components/ModalHeader";

const EditQuestionForm = ({}: IModalComponentProps) => {
  const {handleSubmit, form, fieldArray, isLoading} = useEditQuestionForm();

  return (
    <form onSubmit={handleSubmit} name="question-form" id="question-form" noValidate>
      <ModalHeader title="Update question" />
      <QuestionBodyForm form={form} fieldArray={fieldArray} />
      <ModalFooter title="Update" isLoading={isLoading} />
    </form>
  );
};

export default EditQuestionForm;
