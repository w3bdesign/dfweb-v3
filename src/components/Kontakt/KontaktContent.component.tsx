import type { NextComponentType } from "next";

const KontaktContent: NextComponentType = () => {
  return (
    <div>
      <main>
        <h1 className="text-5xl text-rose-500 text-center">
          Velkommen til Kontakt denne er fra komponenten
        </h1>
      </main>
    </div>
  );
};

export default KontaktContent;
