import { BiCopyright } from "react-icons/bi";

import type { NextComponentType } from "next";

const Footer: NextComponentType = () => {
  return (
    <footer role="contentinfo" aria-label="Innholdet for bunnteksten med copyright">
      <div className="mt-4 bg-gray-800 shadow">
        <div
          aria-label="Copyright tekst"
          className="container p-6 mx-auto text-base text-center text-white">
          Copyright Daniel Fjeldstad
          <BiCopyright className="inline-block m-2" size="1.2em" />
          {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
