import type { JSX } from "react/jsx-runtime";

const Create = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold">Create a New Prompt</h1>
      <p className="mt-4 text-lg">This is the create prompt page.</p>
    </div>
  );
};

export default Create;
