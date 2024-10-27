// examsSlice.ts
import {IExam, IExamForm} from "@/app/(dashboard)/exams/interfaces";

import {fakeDataExams} from "@/fakeData";

import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface InitialState {
  exams: IExam[];
}

const initialState: InitialState = {
  exams: fakeDataExams,
};

const examsSlice = createSlice({
  name: "exams-slice",
  initialState,
  reducers: {
    deleteExam: (state, action: PayloadAction<number | string>) => {
      console.log(state.exams, action.payload);
      state.exams = state.exams.filter((exam) => exam.id !== action.payload);
    },
    createNewExam: (state, action: PayloadAction<IExamForm>) => {
      const exam = {...action.payload, id: state.exams.length + 1};
      state.exams = [...state.exams, exam];
    },
    updateExam: (state, action: PayloadAction<IExam>) => {
      const findIndex = state.exams.findIndex((exam) => exam.id == action.payload.id);
      if (findIndex !== -1) {
        state.exams[findIndex] = action.payload;
      }
    },
  },
});

export const examsSliceActions = examsSlice.actions;

export default examsSlice.reducer;
