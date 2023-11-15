import { RouterProvider } from "react-router-dom";
import routes from "./Routes";
export default function Approuter() {
  return <RouterProvider router={routes} />;
}
