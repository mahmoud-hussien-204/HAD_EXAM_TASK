import {schema} from "@/app/(dashboard)/exams/_hooks/useCreateNewExam";

import {
  useExamsStoreDispatch,
  useExamsStoreSelector,
} from "@/app/(dashboard)/exams/_hooks/useExamsStore";

import {examsSliceActions} from "@/app/(dashboard)/exams/_store/examsSlice";

import {IExam, IExamForm} from "@/app/(dashboard)/exams/interfaces";

import useApiSimulation from "@/hooks/useApiSimulation";

import {yupResolver} from "@hookform/resolvers/yup";

import {useParams, useRouter} from "next/navigation";

import {useRef} from "react";

import {useForm} from "react-hook-form";

import toast from "react-hot-toast";

const useUpdateExam = () => {
  const params = useParams();

  const examId = params?.["exam-id"];

  const exams = useExamsStoreSelector((state) => state.examsReducer.exams);

  const dispatch = useExamsStoreDispatch();

  const examData = useRef<IExam>();

  if (!examData.current && Array.isArray(exams)) {
    console.log("run");
    examData.current = exams.find((exam) => exam.id == examId);
  }

  const form = useForm<IExamForm>({
    mode: "onTouched",
    resolver: yupResolver(schema),
    defaultValues: {
      title: examData.current?.title || "",
      description: examData.current?.description || "",
      questions: examData.current?.questions || [],
    },
  });

  const {trigger, isLoading} = useApiSimulation();

  const router = useRouter();

  const handleSubmit = form.handleSubmit(async (values: IExamForm) => {
    await trigger();
    dispatch(examsSliceActions.updateExam({...values, id: examId as string}));
    toast.success("Exam Updated successfully");
    router.push("/exams");
  });

  return {form, handleSubmit, isLoading};
};

export default useUpdateExam;
