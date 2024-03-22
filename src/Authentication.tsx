import { Outlet } from "react-router-dom";
import { LogoIcon } from "./assets/LogoIcon";

export function Authentication() {
  return (
    <main className="bg-background text-on-background h-screen">
      <div
        data-testid="application__logo"
        className="flex flex-col items-center justify-center h-full"
      >
        <LogoIcon className="h-10" />
        <Outlet />
      </div>
    </main>
  );
}
