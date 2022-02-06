/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen, prettyDOM } from "@testing-library/react";
import Image from "../src/components/UI/Image.component";

describe("Mobile menu", () => {
  it("Expect Image component toBeInTheDocument", () => {
    render(<Image alt="Jest" src="/blue-hero.jpg" width="100" height="100" />);
    const JestImage = screen.getByAltText(/jest/i);
    //console.log(prettyDOM(JestImage));
    expect(JestImage).toBeInTheDocument();
  });
});
