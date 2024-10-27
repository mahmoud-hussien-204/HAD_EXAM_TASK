import Search from "@/components/Search";

interface IProps {
  title: React.ReactNode;
  search?: string;
}

const PageHead = ({title, search}: IProps) => {
  return (
    <div className="border-s-4 border-s-primary ps-1rem">
      <h1 className="text-24 mb-0.5rem">{title}</h1>
      {search && <Search placeholder={search} />}
    </div>
  );
};

export default PageHead;
