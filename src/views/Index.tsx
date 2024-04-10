import { useEffect } from "react";
import { NavigationPanelTop } from "../components/navigation/NavigationPanelTop";
import { NavigationPanelBottom } from "../components/navigation/NavigationPanelBottom";
import { useDispatch, useSelector } from "react-redux";
import { updateBreakpoints } from "../data/breakpointSlice";
import { Outlet } from "react-router-dom";
import { RootState } from "../data/store";
import { SidepanelLeft } from "../components/sidepanel/SidepanelLeft";
import { SidepanelRight } from "../components/sidepanel/SidepanelRight";

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
  const bottomPanelDimensions = useSelector(
    (state: RootState) => state.dimensions.bottomPanelDimensions
  );

  return (
    <div
      className={`mx-auto max-w-screen-lg bg-background text-on-background min-h-dvh flex flex-col overflow-clip z-0`}
    >
      <NavigationPanelTop />
      <div className="flex flex-grow">
        <SidepanelLeft />
        <main className="max-w-screen-sm self-stretch px-3 py-2 bg-background flex-grow flex flex-col w-full">
          <div className="flex flex-col flex-grow">
            <Outlet />
            <div style={{ height: bottomPanelDimensions.height }}></div>
          </div>
        </main>
        <SidepanelRight />
      </div>
      <NavigationPanelBottom />
    </div>
  );
}
