import React, { ReactElement, FC } from "react";
import {
  render as defaultRender,
  RenderOptions,
  RenderResult,
  Queries,
} from "@testing-library/react";

import { RouterContext } from "next/dist/next-server/lib/router-context";
import { NextRouter } from "next/router";

import { mockRouter } from "./mocks";

interface RenderProps {
  readonly router?: Partial<NextRouter>;
  readonly renderOptions?: RenderOptions;
}

const render = (
  ui: ReactElement,
  { router, ...renderOptions }: RenderProps
): RenderResult<Queries, HTMLElement> => {
  const wrapper: FC = ({ children }) => {
    return (
      <RouterContext.Provider value={{ ...mockRouter, ...router }}>
        {children}
      </RouterContext.Provider>
    );
  };
  return defaultRender(ui, { wrapper, ...renderOptions });
};

// re-export everything
export * from "@testing-library/react";
// override render method
export { render };
