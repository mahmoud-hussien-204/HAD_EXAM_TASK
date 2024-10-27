import PageHead from "@/app/(dashboard)/_components/PageHead";

import {ExamsList} from "@/app/(dashboard)/exams/_components/ExamsList";

import TransitionPage from "@/components/TransitionPage";

import ModalProvider from "@/providers/ModalProvider";

import type {Metadata} from "next";

import Link from "next/link";

export const metadata: Metadata = {
  title: "Exams list page",
  description: "HAD - Examination front-end task exams list",
};

const ExamsPage = () => {
  return (
    <TransitionPage>
      <ModalProvider>
        <div className="flex justify-between items-end gap-1rem mb-3rem">
          <PageHead title="Exams List" search="Search in exams" />
          <Link
            href="/exams/create-new-exam"
            className="btn font-medium h-3rem px-1.5rem text-base btn-primary text-white"
          >
            Create New Exam
          </Link>
        </div>
        <ExamsList />
      </ModalProvider>
    </TransitionPage>
  );
};

export default ExamsPage;
