import React from "react";
function App() {
  return (
    <div
      className="flex h-screen w-screen
      flex-col items-center 
      justify-center gap-4 bg-gradient-to-br from-violet-600 to-orange-600 font-semibold text-white
      "
    >
      <h1 className="text-6xl">Hello Tailwind + React!</h1>
      <p className="text-2xl">
        Criado por{" "}
        <a
          href="https://rafaeldev.me"
          className="font-bold text-emerald-500 
          transition
          duration-100
          ease-in-out hover:text-emerald-600 active:text-emerald-700
          "
          target="_blank"
          rel="noreferrer"
        >
          @rafaelsilva81
        </a>
      </p>
    </div>
  );
}

export default App;
