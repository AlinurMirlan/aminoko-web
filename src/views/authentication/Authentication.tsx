import { Outlet } from "react-router-dom";
import { IconLogo } from "../../assets/IconLogo";

export function Authentication() {
  return (
    <main className="bg-background text-on-background h-screen">
      <div
        data-testid="application__logo"
        className="flex flex-col items-center justify-center h-full max-w-sm mx-auto"
      >
        <IconLogo className="h-11 mb-3" />
        <Outlet />
      </div>
    </main>
  );
}
