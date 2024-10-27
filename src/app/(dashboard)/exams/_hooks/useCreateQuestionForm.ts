import {IQuestionForm} from "@/app/(dashboard)/exams/interfaces";
import useApiSimulation from "@/hooks/useApiSimulation";

import useModal from "@/hooks/useModal";

import {yupResolver} from "@hookform/resolvers/yup";

import {useFieldArray, useForm} from "react-hook-form";

import * as Yup from "yup";

export const schema: Yup.ObjectSchema<IQuestionForm> = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  description: Yup.string(),
  answers: Yup.array()
    .of(
      Yup.object().shape({
        title: Yup.string().required("Answer title is required"),
        description: Yup.string(),
        isCorrect: Yup.boolean().required(),
      })
    )
    .required("Answers are required"),
});

const useCreateQuestionForm = () => {
  const {data, hide} = useModal();

  const {trigger, isLoading} = useApiSimulation();

  const form = useForm<IQuestionForm>({
    mode: "onTouched",
    resolver: yupResolver(schema),
    defaultValues: {
      title: "",
      description: "",
      answers: [
        {
          title: "",
          description: "",
          isCorrect: false,
        },
      ],
    },
  });

  const fieldArray = useFieldArray<IQuestionForm>({
    name: "answers",
    control: form.control,
  });

  const handleSubmit = form.handleSubmit(async (values: IQuestionForm) => {
    await trigger();
    (data as {appendQuestion: (question: IQuestionForm) => void}).appendQuestion(values);
    hide();
  });

  return {form, handleSubmit, fieldArray, isLoading};
};

export default useCreateQuestionForm;
