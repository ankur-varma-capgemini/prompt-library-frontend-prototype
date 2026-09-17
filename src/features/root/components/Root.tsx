import Header from "#/features/header/components/Header";
import Bar from "#/features/navigation/Bar";
import { TanStackDevtools } from "@tanstack/react-devtools";
import { Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import type { JSX } from "react/jsx-runtime";

const Root = (): JSX.Element => {
  return (
    <>
      <Header />
      <Bar />
      <Outlet />
      <TanStackDevtools
        config={{
          position: "bottom-right",
        }}
        plugins={[
          {
            name: "TanStack Router",
            render: <TanStackRouterDevtoolsPanel />,
          },
        ]}
      />
    </>
  );
};

export default Root;
