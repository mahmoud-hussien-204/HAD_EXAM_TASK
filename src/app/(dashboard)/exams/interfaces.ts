export interface IAnswer {
  title: string;
  isCorrect: boolean;
  description?: string;
}

export interface IQuestion {
  title: string;
  answers: IAnswer[];
  description?: string;
}

export interface IExam {
  id: number | string;
  title: string;
  questions: IQuestion[];
  description?: string;
}

export type IQuestionForm = IQuestion;

export interface IExamForm {
  title: string;
  description: string;
  questions: IQuestionForm[];
}
