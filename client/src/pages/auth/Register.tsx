import { Link } from "react-router-dom";
import Input from "../../components/form/Input";
import Label from "../../components/form/Label";
import AuthLayout from "../../layouts/AuthLayout";
import Button from "../../components/form/Button";

const Register = () => {
  return (
    <AuthLayout>
      <form action="" method="post" className="flex flex-col gap-2 min-w-72">
        <div>
          <h1 className="text-xl text-center font-bold">Signup</h1>
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="username">Username</Label>
          <Input id="username" name="username" autoComplete="true" />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" name="password" type="password" />
        </div>
        <div className="flex flex justify-around items-center gap-2 pt-3">
          <span>
            <Link
              to={"/login"}
              className="underline text-blue-400 hover:text-blue-600"
            >
              Login
            </Link>
          </span>
          <Button type="submit">Create Account</Button>
        </div>
      </form>
    </AuthLayout>
  );
};

export default Register;
