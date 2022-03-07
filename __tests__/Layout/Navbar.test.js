/**
 * @jest-environment jsdom
 */

 import { render, screen } from "@testing-library/react";

 import Navbar from "../../src/components/Layout/Navbar.component";
 
 describe("Navbar", () => {
   it("Navbar laster inn og kan vises", () => {
     render(<Navbar />);
     const navbar = screen.getByRole('navigation')
     expect(navbar).toBeInTheDocument();
   });
 });
 