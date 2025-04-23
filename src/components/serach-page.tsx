"use client";

import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const Search = () => {
  const searchRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (searchRef.current) {
      router.push(`/search/${searchRef.current.value}`);
    }
  };
  return (
    <div className="relative bg-[#bdd3ec] rounded-md flex">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Cari anime..."
          className="rounded-b-md p-1"
          ref={searchRef}
        />
        <button className="absolute top-1 end-1.5 cursor-pointer" type="submit">
          <MagnifyingGlass size={22} />
        </button>
      </form>
    </div>
  );
};

export default Search;
