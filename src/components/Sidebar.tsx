import { Outlet } from "react-router-dom";

function Sidebar() {
  return (
    <>
      <aside>Hello Sidebar</aside>
      <Outlet />
    </>
  );
}

export default Sidebar;
