import type { JSX } from "react/jsx-runtime";
import Brandmark from "./Brandmark";
import Wordmark from "./Wordmark";

const Logo = (): JSX.Element => {
  return (
    <div
      className="flex flex-none items-center gap-3 text-inherit no-underline"
      aria-label="MUFG AI Hub, go to home"
    >
      <Brandmark />
      <Wordmark />
    </div>
  );
};

export default Logo;
