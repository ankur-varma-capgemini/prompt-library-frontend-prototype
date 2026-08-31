import type { JSX } from "react/jsx-runtime";
import Logo from "./Logo";
import Panel from "./Panel";
import { Link } from "@tanstack/react-router";

const Header = (): JSX.Element => {
  return (
    <header className="flex h-16 items-center justify-between gap-4 border-b-[3px] border-[#DA2127] bg-white px-5">
      <Link to="/">
        <Logo />
      </Link>
      <Panel />
    </header>
  );
};

export default Header;
