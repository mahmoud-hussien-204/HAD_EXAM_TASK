import ExamsStoreProvider from "@/app/(dashboard)/exams/_providers/ExamsStoreProvider";

const ExamsLayout = ({children}: React.PropsWithChildren) => {
  return <ExamsStoreProvider>{children}</ExamsStoreProvider>;
};

export default ExamsLayout;
