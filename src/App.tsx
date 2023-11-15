import { SkeletonTheme } from "react-loading-skeleton";
import Approuter from "./router/Approuter";
import ThemeProvider from "./themes/ThemeProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <ThemeProvider>
        <SkeletonTheme baseColor="#202020" highlightColor="#444">
          <QueryClientProvider client={queryClient}>
            <Approuter />
          </QueryClientProvider>
        </SkeletonTheme>
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          draggable={false}
          pauseOnHover={false}
          theme="dark"
        />
      </ThemeProvider>
    </>
  );
}

export default App;
