import type { JSX } from "react/jsx-runtime";
import Logo from "./Logo";
import Panel from "./Panel";

const Header = (): JSX.Element => {
    return (
        <header className="flex h-[70px] items-center gap-4 px-5 justify-between">
            <Logo />
            <Panel />
        </header>
    );
};

export default Header;
