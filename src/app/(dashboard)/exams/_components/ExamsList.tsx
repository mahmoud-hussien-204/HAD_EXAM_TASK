"use client";

import DeleteExam from "@/app/(dashboard)/exams/_components/DeleteExam";

import {useExamsStoreSelector} from "@/app/(dashboard)/exams/_hooks/useExamsStore";

import IconEdit from "@/components/icons/IconEdit";

import Modal from "@/components/Modal";

import {
  TableActionButtonDelete,
  TableActions,
  TableContainer,
  TableTBody,
  TableTD,
  TableTH,
  TableTHead,
  TableTR,
} from "@/components/Table";

import Link from "next/link";

export const ExamsList = () => {
  const exams = useExamsStoreSelector((state) => state.examsReducer.exams);

  return (
    <>
      <TableContainer>
        <TableTHead>
          <TableTR>
            <TableTH>Tile</TableTH>
            <TableTH>Description</TableTH>
            <TableTH>Actions</TableTH>
          </TableTR>
        </TableTHead>
        <TableTBody>
          {exams.map((exam) => (
            <TableTR key={exam.id}>
              <TableTD>{exam.title}</TableTD>
              <TableTD>{exam.description}</TableTD>
              <TableActions>
                <div className="tooltip" data-tip="Edit">
                  <Link href={`/exams/${exam.id}`}>
                    <IconEdit />
                  </Link>
                </div>
                <TableActionButtonDelete data={exam} />
              </TableActions>
            </TableTR>
          ))}
        </TableTBody>
      </TableContainer>

      <Modal DELETE={DeleteExam} />
    </>
  );
};
