import PageHead from "@/app/(dashboard)/_components/PageHead";

import UpdateExamForm from "@/app/(dashboard)/exams/_components/UpdateExamForm";

import TransitionPage from "@/components/TransitionPage";

import ModalProvider from "@/providers/ModalProvider";

const UpdateExamPage = () => {
  return (
    <TransitionPage>
      <ModalProvider>
        <div className="relative">
          <div className="mb-3rem">
            <PageHead title="Update Exam" />
          </div>
          <UpdateExamForm />
        </div>
      </ModalProvider>
    </TransitionPage>
  );
};

export default UpdateExamPage;
