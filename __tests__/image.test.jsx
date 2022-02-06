/**
 * @jest-environment jsdom
 */

import React from "react";

import { render, screen } from "@testing-library/react";
import Image from "../src/components/UI/Image.component";
// Debug: //console.log(prettyDOM(JestImage));

describe("Mobile menu", () => {
  it("Expect Image component toBeInTheDocument", () => {
    render(<Image alt="Jest" src="/blue-hero.jpg" width="100" height="100" />);
    const JestImage = screen.getByAltText(/jest/i);
    expect(JestImage).toBeInTheDocument();
  });

  it("Expect mock", () => {
    const isMobileConnection = jest.fn();

    render(<Image alt="Jest" src="/blue-hero.jpg" width="100" height="100" />);

    expect(isMobileConnection.mock.calls.length).toBe(0);
  });
});
