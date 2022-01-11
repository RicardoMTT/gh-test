import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";

export const DashboardPage = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};
