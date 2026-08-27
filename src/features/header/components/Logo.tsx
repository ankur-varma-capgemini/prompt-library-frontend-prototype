import type { JSX } from "react/jsx-runtime";
import Brandmark from "./Brandmark";
import Wordmark from "./Wordmark";

const Logo = (): JSX.Element => {
    return (
        <div className="flex items-center gap-12">
            <Brandmark />
            <Wordmark />
        </div>
    );
};

export default Logo;
