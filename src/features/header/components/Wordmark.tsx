import type { JSX } from "react/jsx-runtime";

const Wordmark = (): JSX.Element => {
  return (
    <div>
      <div className="text-[14px] font-bold uppercase tracking-[0.14em] text-[#191919] max-[900px]:hidden">
        AI HUB
      </div>
      <div className="block text-[9.5px] font-normal tracking-[0.18em] text-[#5A5A5A]">
        PROMPTS · SKILLS · INFORMATION · AGENTS
      </div>
    </div>
  );
};

export default Wordmark;
