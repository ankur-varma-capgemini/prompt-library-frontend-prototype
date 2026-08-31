import { createFileRoute } from "@tanstack/react-router";
import Create from "../../features/prompt/Create";

export const Route = createFileRoute("/prompts/create")({
  component: Create,
});
