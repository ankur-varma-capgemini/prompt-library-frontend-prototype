import type { JSX } from "react/jsx-runtime";
import Logo from "./Logo";
import Panel from "./Panel";

const Header = (): JSX.Element => {
    return (
        <header className="fixed inset-x-0 top-0 z-[60] flex h-16 items-center justify-between gap-4 border-b-[3px] border-[#DA2127] bg-white px-5">
            <Logo />
            <Panel />
        </header>
    );
};

export default Header;
