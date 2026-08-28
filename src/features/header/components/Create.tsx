import type { JSX } from "react/jsx-runtime";
import { Dialog } from "radix-ui";

const Create = (): JSX.Element => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild={true}>
        <button className="inline-flex h-[38px] items-center justify-center gap-2 whitespace-nowrap rounded-[99px] border border-transparent bg-[#da2127] px-4 text-[13.5px] font-bold text-white transition-[background,border-color,color,transform] duration-[140ms] hover:bg-[#b31a1f] active:translate-y-px focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[#da2127]">
          <svg
            aria-hidden="true"
            className="h-[18px] w-[18px] shrink-0"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14m7-7H5" />
          </svg>
          <span>Create new</span>
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[60] bg-black/45" />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-[60] flex h-[min(92vh,800px)] w-[calc(100vw-2rem)] max-w-[970px] -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden rounded-[24px] bg-white shadow-[0_24px_70px_rgba(0,0,0,0.22)] focus:outline-none sm:w-[calc(100vw-3rem)]">
          <div></div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Create;
