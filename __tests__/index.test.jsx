/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";

import IndexContent from "../src/components/Index/IndexContent.component";

jest.mock("@sanity/client", () => {
  return function sanity() {
    return {
      fetch: () => ({
        methodOne: [{}],
        methodTwo: [{}]
      })
    };
  };
});

export const data = {
  post: [
    {
      _createdAt: "2022-01-03T19:44:25Z",
      _id: "9165f0de-ff21-4893-b6fa-74a43f4eb0bb",
      _rev: "SyiYL8PETAkyHvIFMuJmn6",
      _type: "sitecontent",
      _updatedAt: "2022-01-04T21:11:26Z",
      id: 1,
      pagename: "Index",
      text: [Array],
      title: "Om Meg"
    },
    {
      _createdAt: "2022-01-03T19:48:27Z",
      _id: "9d264106-6169-4526-ade4-1ce9db44d402",
      _rev: "wEtCi3j9yP1fKRRqSwvNzp",
      _type: "sitecontent",
      _updatedAt: "2022-01-05T03:38:47Z",
      id: 2,
      pagename: "Index",
      text: [Array],
      title: "Prosjekter"
    }
  ]
};

describe("Home", () => {
  it("Welcome to next eksisterer ikke", () => {
    render(<IndexContent />);
    const welcometoNext = screen.queryByText("heading", {
      name: /welcome/i
    });

    expect(welcometoNext).not.toBeInTheDocument();
  });

  it("Welcome eksisterer ikke", () => {
    render(<IndexContent />);
    const welcome = screen.queryByText("heading", {
      name: /hei/i
    });

    expect(welcome).not.toBeInTheDocument();
  });
});
