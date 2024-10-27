import {IExamForm} from "@/app/(dashboard)/exams/interfaces";

import Button from "@/components/Button";

import ErrorMessage from "@/components/ErrorMessage";

import IconEdit from "@/components/icons/IconEdit";

import IconPlus from "@/components/icons/IconPlus";

import IconTrash from "@/components/icons/IconTrash";

import Input from "@/components/Input";

import Label from "@/components/Label";

import Textarea from "@/components/Textarea";

import {EnumModals} from "@/enums";

import useModal from "@/hooks/useModal";

import {useRouter} from "next/navigation";

import {useFieldArray, useFormContext} from "react-hook-form";

interface IProps {
  type: "edit" | "create";
  isLoading: boolean;
}

const ExamEditorForm = ({isLoading}: IProps) => {
  const {show} = useModal();

  const form = useFormContext<IExamForm>();

  const {
    fields: questions,
    append: appendQuestion,
    remove: removeQuestion,
    update: updateQuestion,
  } = useFieldArray<IExamForm>({
    name: "questions",
  });

  const router = useRouter();

  return (
    <>
      <div className="flex items-center gap-0.75rem absolute end-0 top-[-0.3rem]">
        <Button type="submit" isLoading={isLoading}>
          Save
        </Button>
        <Button
          variant="ghost"
          type="button"
          disabled={isLoading}
          onClick={() => router.push("/exams")}
        >
          Cancel
        </Button>
      </div>
      {/*exam info */}
      <div className="border mb-1.5rem rounded-btn p-1rem">
        <div className="mb-1.5rem">
          <Label htmlFor="title">Exam Title</Label>
          <Input
            id="title"
            placeholder="Enter exam title"
            isError={!!form.formState.errors.title}
            {...form.register("title")}
          />
          <ErrorMessage message={form.formState.errors.title?.message} />
        </div>

        <div>
          <Label htmlFor="description">Exam Description</Label>
          <Textarea
            id="description"
            placeholder="Enter exam title"
            isError={!!form.formState.errors.description}
            {...form.register("description")}
          />
          <ErrorMessage message={form.formState.errors.description?.message} />
        </div>
      </div>
      <Label>Questions</Label>
      <ErrorMessage message={form.formState.errors.questions?.message} />
      <div className="flex flex-col items-start gap-0.75rem">
        {questions.map((item, index) => (
          <div
            className="bg-base-100 rounded-btn p-0.75rem w-full flex items-start justify-between gap-1.25rem"
            key={item.id}
          >
            <div>
              <h5>{item.title}</h5>
              {item.description && (
                <p className="text-neutral-500 text-14 mt-0.5rem">{item.description}</p>
              )}
            </div>
            <div className="flex items-center gap-0.75rem">
              <button
                type="button"
                onClick={() =>
                  show(EnumModals.EDIT_QUESTION, {question: item, index, updateQuestion})
                }
                className="text-base-content"
              >
                <IconEdit />
              </button>
              <button type="button" onClick={() => removeQuestion(index)} className="text-error">
                <IconTrash />
              </button>
            </div>
          </div>
        ))}
        <Button
          variant="ghost"
          type="button"
          onClick={() => show(EnumModals.CREATE_QUESTION, {appendQuestion})}
          className="!min-h-0 h-auto !text-13"
        >
          <IconPlus />
          <span>Create Question</span>
        </Button>
      </div>
    </>
  );
};

export default ExamEditorForm;
