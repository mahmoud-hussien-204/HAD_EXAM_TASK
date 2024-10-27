"use client";

import IconTrash from "@/components/icons/IconTrash";

import {EnumModals} from "@/enums";

import AppHelper from "@/helpers/AppHelper";

import useModal from "@/hooks/useModal";

interface IProps {
  children: React.ReactNode;
  className?: string;
}

export const TableContainer = ({children, className}: IProps) => {
  return (
    <div className="overflow-x-auto overflow-y-hidden">
      <table className={AppHelper.classes("w-full min-w-min align-middle", className)}>
        {children}
      </table>
    </div>
  );
};

export const TableTHead = ({children, className}: IProps) => {
  return <thead className={className}>{children}</thead>;
};

export const TableTBody = ({children, className}: IProps) => {
  return <tbody className={className}>{children}</tbody>;
};

export const TableTR = ({children}: IProps) => {
  return <tr className="only:!bg-transparent odd:bg-base-100">{children}</tr>;
};

export const TableTH = ({children, className}: IProps) => {
  return (
    <th
      className={AppHelper.classes(
        "h-3.5rem whitespace-nowrap px-1rem text-start font-14 font-medium text-neutral-500 ",
        className
      )}
    >
      {children}
    </th>
  );
};

type TableTDProps = IProps &
  React.DetailedHTMLProps<
    React.TdHTMLAttributes<HTMLTableDataCellElement>,
    HTMLTableDataCellElement
  >;

export const TableTD = ({children, className, ...props}: TableTDProps) => {
  return (
    <td
      className={AppHelper.classes(
        "h-3.5rem whitespace-nowrap px-1rem font-14 text-base-content first:rounded-es-btn first:rounded-ss-btn last:rounded-ee-btn last:rounded-se-btn",
        className
      )}
      {...props}
    >
      {children}
    </td>
  );
};

export const TableSkeleton = (props: Omit<TableTDProps, "children">) => {
  return (
    <TableTD {...props}>
      <div className="skeleton h-2rem w-full rounded-btn opacity-40"></div>
    </TableTD>
  );
};

export const TableFlexContent = ({children}: IProps) => {
  return <div className="flex items-center gap-0.5rem">{children}</div>;
};

export const TableActions = ({children}: IProps) => {
  return (
    <TableTD>
      <div className="flex gap-0.75rem">{children}</div>
    </TableTD>
  );
};

interface IButtonProps {
  data?: unknown;
}

export const TableActionButtonDelete = ({data = {}}: IButtonProps) => {
  const {show} = useModal();

  return (
    <div className="tooltip" data-tip="Delete">
      <button
        onClick={() => {
          show(EnumModals.DELETE, data);
        }}
        type="button"
      >
        <IconTrash />
      </button>
    </div>
  );
};
