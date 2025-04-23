import Link from "next/link";
import Search from "../serach-page";

const Navbar = () => {
  return (
    <>
      <div className="sticky top-0 left-0 right-0 bg-[#27548A] p-6 px-10 flex sm:flex-row flex-col justify-between gap-2 z-50">
        <Link href={"/"}>
          <h1
            className="text-2xl text-amber-50"
            style={{
              fontFamily: "Rubik",
              fontWeight: 800,
              fontStyle: "normal",
            }}
          >
            <span className="text-amber-600 border-b-2 border-l-2 border-t-2 border-b-background border-l-background border-t-background rounded-l-xl p-1 ">
              ANIME
            </span>
            TALES
          </h1>
        </Link>
        <Search />
      </div>
    </>
  );
};

export default Navbar;
