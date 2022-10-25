import React from "react";

type Props = {};

const Header = (props: Props) => {
  return (
    <header
      className="bg-slate-200
                        flex justify-between
                        px-10 py-5
                        shadow-lg
                        dark:bg-slate-800"
    >
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <span className="text-lg">Maiky Perlee</span>
    </header>
  );
};

export default Header;
