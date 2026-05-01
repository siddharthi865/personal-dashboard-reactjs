import { type ReactNode } from "react";

import ThemeToggle from "./ThemeToggle";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen p-6 transition-colors">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold dark:text-white">Dashboard Pro</h1>
        <ThemeToggle />
      </div>

      {children}
    </div>
  );
};

export default Layout;
