import { Link, useLocation } from "@tanstack/react-router";
import type { JSX } from "react/jsx-runtime";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Prompt Library", to: "/prompts" },
];

const Bar = (): JSX.Element => {
  const { pathname } = useLocation();

  return (
    <div className="border-b border-[#E7E7E9] bg-[#F7F7F8]">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-4 py-2.5">
        <nav className="flex flex-1 items-center justify-center overflow-x-auto">
          <ul className="inline-flex items-center gap-1 rounded-full border border-[#E7E7E9] bg-[#F1F1F2] p-1 shadow-[0_1px_0_rgba(17,17,17,0.02)]">
            {navItems.map(({ label, to }) => {
              const isActive =
                to === "/"
                  ? pathname === "/"
                  : pathname === to || pathname.startsWith(`${to}/`);

              return (
                <li
                  key={label}
                  className={[
                    "relative inline-flex h-9 items-center justify-center whitespace-nowrap rounded-full px-4 text-sm font-semibold transition-colors",
                    isActive
                      ? "bg-white text-[#191919] shadow-[0_1px_2px_rgba(15,15,17,0.08)]"
                      : "text-[#5F5F66] hover:text-[#191919]",
                  ].join(" ")}
                >
                  <Link
                    to={to}
                    aria-current={isActive ? "page" : undefined}
                    className="flex h-full w-full items-center justify-center"
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Bar;