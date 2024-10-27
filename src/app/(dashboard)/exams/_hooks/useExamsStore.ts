import {ExamsDispatch, ExamsStore} from "@/app/(dashboard)/exams/_store/examsStore";

import {useDispatch, useSelector} from "react-redux";

export const useExamsStoreDispatch = useDispatch.withTypes<ExamsDispatch>();

export const useExamsStoreSelector = useSelector.withTypes<ExamsStore>();
