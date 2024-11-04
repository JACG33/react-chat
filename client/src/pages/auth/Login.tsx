import { Link } from "react-router-dom";
import Button from "../../components/form/Button";
import Input from "../../components/form/Input";
import Label from "../../components/form/Label";
import AuthLayout from "../../layouts/AuthLayout";

const Login = () => {
  return (
    <AuthLayout>
      <form action="" method="post" className="flex flex-col gap-2 min-w-72">
        <div>
          <h1 className="text-xl text-center font-bold">Login</h1>
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="username">Username</Label>
          <Input className="" id="username" name="username" autoComplete="true"/>
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="password">Password</Label>
          <Input className="" id="password" name="password" type="password" />
        </div>
        <div className="flex flex justify-around items-center gap-2 pt-3">
          <span>
            <Link
              to={""}
              className="underline text-blue-400 hover:text-blue-600"
            >
              Password Reset
            </Link>
          </span>
          <Button type="submit">Login</Button>
        </div>

        <div className="text-center pt-3">
          <Link
            to={"/register"}
            className="underline text-blue-400 hover:text-blue-600"
          >
            Create account
          </Link>
        </div>
      </form>
    </AuthLayout>
  );
};

export default Login;
