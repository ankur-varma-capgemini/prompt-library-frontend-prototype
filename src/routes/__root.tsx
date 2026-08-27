import { createRootRoute } from "@tanstack/react-router";

import "../styles.css";
import Root from "#/features/root/components/Root";

export const Route = createRootRoute({
  component: Root,
});
