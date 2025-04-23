import Link from "next/link";

interface HeaderProps {
  title: string;
  linkTitle?: string;
  linkHref?: string;
}

const Header = ({ title, linkTitle, linkHref }: HeaderProps) => {
  return (
    <div className="md:px-10 px-1 pb-3 flex justify-between border-b ">
      <div>
        <h1 className="w-fit p-2 md:text-xl text-sm font-semibold rounded-xl">
          {title}
        </h1>
      </div>
      {typeof linkHref === "string" && typeof linkTitle === "string" && (
        <div className="flex items-center font-semibold hover:text-amber-600 hover:bg-amber-50 transition-all w-fit px-3 md:text-lg text-sm bg-amber-600 rounded-xl text-amber-50">
          <Link href={linkHref}>{linkTitle}</Link>
        </div>
      )}
    </div>
  );
};

export default Header;
