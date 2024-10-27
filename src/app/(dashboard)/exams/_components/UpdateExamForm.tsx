"use client";

import CreateQuestionForm from "@/app/(dashboard)/exams/_components/CreateQuestionForm";

import EditQuestionForm from "@/app/(dashboard)/exams/_components/EditQuestionForm";

import ExamEditorForm from "@/app/(dashboard)/exams/_components/ExamEditorForm";

import useUpdateExam from "@/app/(dashboard)/exams/_hooks/useUpdateExam";

import Modal from "@/components/Modal";

import {FormProvider} from "react-hook-form";

const UpdateExamForm = () => {
  const {form, handleSubmit, isLoading} = useUpdateExam();
  return (
    <>
      <FormProvider {...form}>
        <form
          noValidate
          onSubmit={handleSubmit}
          name="update-new-exam-form"
          id="update-new-exam-form"
        >
          <ExamEditorForm type="edit" isLoading={isLoading} />
        </form>
      </FormProvider>
      <Modal CREATE_QUESTION={CreateQuestionForm} EDIT_QUESTION={EditQuestionForm} />
    </>
  );
};

export default UpdateExamForm;
