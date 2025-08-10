import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="bg-bg-secondary">
      <Outlet />
    </div>
  );
};

export default RootLayout;
