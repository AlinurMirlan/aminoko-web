import { useEffect } from "react";
import { NavigationPanelTop } from "../components/navigation/NavigationPanelTop";
import { NavigationPanelBottom } from "../components/navigation/NavigationPanelBottom";
import { useDispatch } from "react-redux";
import { updateBreakpoints } from "../data/breakpointSlice";
import { SidebarOpenOverlay } from "../components/navigation/SidebarOpenOverlay";
import { Outlet } from "react-router-dom";

export function Index() {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleResize = () => {
      dispatch(updateBreakpoints(window.innerWidth));
    };

    dispatch(updateBreakpoints(window.innerWidth));
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [dispatch]);

  return (
    <div
      className={`bg-background text-on-background min-h-screen overflow-clip z-0`}
    >
      <SidebarOpenOverlay />
      <NavigationPanelTop />
      <main className="py-2 px-3 bg-background">
        <Outlet />
      </main>
      <NavigationPanelBottom />
    </div>
  );
}
