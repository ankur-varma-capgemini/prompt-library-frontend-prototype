import type { JSX } from "react/jsx-runtime";

const Brandmark = (): JSX.Element => {
    return (
        <div className="flex items-center rounded-[6px] px-2 py-[5px] after:ml-3 after:block after:h-[26px] after:w-[1px] after:bg-[#CFCFD4] after:content-['']">
            <img
                src="https://www.mufgamericas.com/themes/custom/mufg/logo.svg"
                alt="MUFG"
                className="h-[40px] w-auto"
            />
        </div>
    );
};

export default Brandmark;
