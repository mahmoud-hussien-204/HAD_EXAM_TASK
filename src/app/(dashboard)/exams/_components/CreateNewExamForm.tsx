"use client";

import CreateQuestionForm from "@/app/(dashboard)/exams/_components/CreateQuestionForm";

import EditQuestionForm from "@/app/(dashboard)/exams/_components/EditQuestionForm";

import ExamEditorForm from "@/app/(dashboard)/exams/_components/ExamEditorForm";

import useCreateNewExam from "@/app/(dashboard)/exams/_hooks/useCreateNewExam";

import Modal from "@/components/Modal";

import {FormProvider} from "react-hook-form";

const CreateNewExamForm = () => {
  const {form, handleSubmit, isLoading} = useCreateNewExam();
  return (
    <>
      <FormProvider {...form}>
        <form
          noValidate
          onSubmit={handleSubmit}
          name="create-new-exam-form"
          id="create-new-exam-form"
        >
          <ExamEditorForm type="create" isLoading={isLoading} />
        </form>
      </FormProvider>
      <Modal CREATE_QUESTION={CreateQuestionForm} EDIT_QUESTION={EditQuestionForm} />
    </>
  );
};

export default CreateNewExamForm;
