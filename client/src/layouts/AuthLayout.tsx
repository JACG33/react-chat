type AuthLayout = {
  children: JSX.Element | JSX.Element[];
};
const AuthLayout: React.FC<AuthLayout> = ({ children }) => {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <div className="rounded-lg shadow-lg p-4">{children}</div>
    </div>
  );
};

export default AuthLayout;
