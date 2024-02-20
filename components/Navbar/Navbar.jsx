import ThemeToggle from "../Utilities/ThemeToggler";
import InputSearch from "./InputSearch";
import UserActionButton from "./UserActionButton";
import { Wind } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex flex-wrap items-center justify-between h-16 px-4 bg-light-background dark:bg-dark-background md:drop-shadow-sm">
      <div className="flex items-center gap-2 font-semibold dark:text-dark-text">
        <Link href="/">
          <Wind className="h-6 w-6" />
        </Link>
        <span className="sr-only">Anime</span>
      </div>
      <InputSearch />
      <ThemeToggle />
      <UserActionButton />
    </nav>
  );
};

export default Navbar;
