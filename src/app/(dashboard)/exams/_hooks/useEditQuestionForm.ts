import {schema} from "@/app/(dashboard)/exams/_hooks/useCreateQuestionForm";

import {IQuestionForm} from "@/app/(dashboard)/exams/interfaces";

import useApiSimulation from "@/hooks/useApiSimulation";

import useModal from "@/hooks/useModal";

import {yupResolver} from "@hookform/resolvers/yup";

import {useFieldArray, useForm} from "react-hook-form";

interface IProps {
  question: IQuestionForm;
  index: number;
  updateQuestion: (index: number, data: IQuestionForm) => void;
}

const useEditQuestionForm = () => {
  const {data, hide} = useModal();

  const questionData = data as IProps;

  const {trigger, isLoading} = useApiSimulation();

  const form = useForm<IQuestionForm>({
    mode: "onTouched",
    resolver: yupResolver(schema),
    defaultValues: {
      title: questionData.question.title,
      description: questionData.question.description || "",
      answers: questionData.question.answers || [],
    },
  });

  const fieldArray = useFieldArray<IQuestionForm>({
    name: "answers",
    control: form.control,
  });

  const handleSubmit = form.handleSubmit(async (values: IQuestionForm) => {
    await trigger();
    questionData.updateQuestion(questionData.index, values);
    hide();
  });

  return {form, handleSubmit, fieldArray, isLoading};
};

export default useEditQuestionForm;
