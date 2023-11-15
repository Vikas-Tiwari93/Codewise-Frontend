type AuthProps = {
  children: React.ReactNode;
};
export default function CheckAuth({ children }: AuthProps) {
  const authToken = localStorage.getItem("authToken") || "";
  if (!authToken) {
    window.location.replace(
      `${import.meta.env.VITE_REACT_APP_AUTH_APP_BASE_URL}/auth/signin`
    );
  }

  return <div>{authToken ? children : <p> you are being logged out</p>}</div>;
}
