import {IQuestionForm} from "@/app/(dashboard)/exams/interfaces";

import Button from "@/components/Button";

import ErrorMessage from "@/components/ErrorMessage";

import IconClose from "@/components/icons/IconClose";

import IconPlus from "@/components/icons/IconPlus";

import Input from "@/components/Input";

import Label from "@/components/Label";

import ModalBody from "@/components/ModalBody";

import Select from "@/components/Select";

import Textarea from "@/components/Textarea";

import {UseFieldArrayReturn, UseFormReturn} from "react-hook-form";

interface IProps {
  form: UseFormReturn<IQuestionForm>;
  fieldArray: UseFieldArrayReturn<IQuestionForm>;
}

const QuestionBodyForm = ({form, fieldArray}: IProps) => {
  return (
    <ModalBody>
      <div className="mb-1.25rem">
        <Label>Question Type</Label>
        <Select options={[{label: "Single Choice", value: "0"}]} disabled />
      </div>

      <div className="mb-1.25rem">
        <Label htmlFor="question-title">Question Title</Label>
        <Input
          id="question-title"
          placeholder="Enter question title"
          isError={!!form.formState.errors.title}
          {...form.register("title")}
        />
        <ErrorMessage message={form.formState.errors.title?.message} />
      </div>

      <div className="mb-1.25rem">
        <Label>Question Description</Label>
        <Textarea
          id="question-description"
          placeholder="Enter question description"
          isError={!!form.formState.errors.description}
          {...form.register("description")}
        />
        <ErrorMessage message={form.formState.errors.description?.message} />
      </div>

      <Label>Answers</Label>

      <div className="items-start flex flex-col gap-0.75rem">
        {fieldArray.fields.map((answer, index) => (
          <div className="grid grid-cols-11 gap-0.75rem" key={answer.id}>
            <div className="col-span-5">
              <Input
                placeholder="Answer title"
                isError={!!form.formState.errors.answers?.[index]?.title}
                {...form.register(`answers.${index}.title`)}
              />
              <ErrorMessage message={form.formState.errors.answers?.[index]?.title?.message} />
            </div>
            <div className="col-span-5">
              <Input
                placeholder="Answer description"
                isError={!!form.formState.errors.answers?.[index]?.description}
                {...form.register(`answers.${index}.description`)}
              />
              <ErrorMessage
                message={form.formState.errors.answers?.[index]?.description?.message}
              />
            </div>

            <button
              disabled={fieldArray.fields.length < 2}
              onClick={() => fieldArray.remove(index)}
              type="button"
              className="text-error grid place-content-center  disabled:text-base-200"
            >
              <IconClose />
            </button>
          </div>
        ))}
        {fieldArray.fields.length < 4 && (
          <Button
            type="button"
            variant="ghost"
            className="!min-h-0 h-auto !text-13"
            onClick={() =>
              fieldArray.append({
                title: "",
                description: "",
                isCorrect: false,
              })
            }
          >
            <IconPlus />
            Add Answer
          </Button>
        )}
      </div>
    </ModalBody>
  );
};

export default QuestionBodyForm;
