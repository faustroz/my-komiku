"use client";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import { Input } from "@/components/ui/input";

const InputSearch = () => {
  const searchRef = useRef();
  const router = useRouter();

  const handleSearch = (event) => {
    const keyword = searchRef.current.value;
    if (!keyword || keyword.trim() === "") return;

    if (event.key === "Enter" || event.type === "click") {
      event.preventDefault();
      router.push(`/search/${keyword}`);
    }
  };

  return (
    <div className="flex flex-1 justify-center gap-4 text-sm md:text-base lg:gap-6 px-4 lg:px-0">
      <div className="w-full max-w-md relative flex items-center">
        <MagnifyingGlass
          className="absolute left-3.5 h-5 w-5 text-gray-300 dark:text-gray-700 cursor-pointer"
          onClick={handleSearch}
        />
        <Input
          className="pl-10 text-center w-full"
          placeholder="Search for anime"
          type="search"
          ref={searchRef}
          onKeyDown={handleSearch}
        />
      </div>
    </div>
  );
};

export default InputSearch;
