import {useExamsStoreDispatch} from "@/app/(dashboard)/exams/_hooks/useExamsStore";

import {examsSliceActions} from "@/app/(dashboard)/exams/_store/examsSlice";

import {IExamForm, IQuestionForm} from "@/app/(dashboard)/exams/interfaces";

import useApiSimulation from "@/hooks/useApiSimulation";

import {yupResolver} from "@hookform/resolvers/yup";

import {useRouter} from "next/navigation";

import {useForm} from "react-hook-form";

import toast from "react-hot-toast";

import * as Yup from "yup";

export const questionSchema: Yup.ObjectSchema<IQuestionForm> = Yup.object().shape({
  title: Yup.string().required("Question title is required"),
  description: Yup.string(),
  answers: Yup.array()
    .of(
      Yup.object().shape({
        title: Yup.string().required("Answer title is required"),
        isCorrect: Yup.boolean().required(),
        description: Yup.string(),
      })
    )
    .min(1, "At least one answer is required") // Ensures at least one answer exists
    .required("Answers are required"),
});

export const schema: Yup.ObjectSchema<IExamForm> = Yup.object().shape({
  title: Yup.string().required("Exam title is required"),
  description: Yup.string().required("Exam description is required"),
  questions: Yup.array()
    .of(questionSchema)
    .min(1, "At least one question is required") // Ensures at least one question exists
    .required("Questions are required"),
});

const useCreateNewExam = () => {
  const form = useForm<IExamForm>({
    mode: "onTouched",
    resolver: yupResolver(schema),
    defaultValues: {
      title: "",
      description: "",
      questions: [],
    },
  });

  const {trigger, isLoading} = useApiSimulation();

  const dispatch = useExamsStoreDispatch();

  const router = useRouter();

  const handleSubmit = form.handleSubmit(async (values: IExamForm) => {
    await trigger();
    dispatch(examsSliceActions.createNewExam(values));
    toast.success("Exam created successfully");
    router.push("/exams");
  });

  return {form, handleSubmit, isLoading};
};

export default useCreateNewExam;
