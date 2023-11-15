import { Outlet } from "react-router-dom";
export default function Homepage() {
  return (
    <div>
      i am Homepage
      <Outlet />
    </div>
  );
}
