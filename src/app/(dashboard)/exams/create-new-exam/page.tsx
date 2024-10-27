import PageHead from "@/app/(dashboard)/_components/PageHead";

import CreateNewExamForm from "@/app/(dashboard)/exams/_components/CreateNewExamForm";

import TransitionPage from "@/components/TransitionPage";

import ModalProvider from "@/providers/ModalProvider";

const CreateNewExamPage = () => {
  return (
    <TransitionPage>
      <ModalProvider>
        <div className="relative">
          <div className="mb-3rem">
            <PageHead title="Create New Exam" />
          </div>
          <CreateNewExamForm />
        </div>
      </ModalProvider>
    </TransitionPage>
  );
};

export default CreateNewExamPage;
