import { createFileRoute } from "@tanstack/react-router";
import Home from "../../features/prompt/Home";

export const Route = createFileRoute("/prompts/")({
  component: Home,
});
