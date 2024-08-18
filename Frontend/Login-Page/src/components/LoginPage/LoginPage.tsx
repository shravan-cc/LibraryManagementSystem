import { LoginForm } from "../LoginForm/LoginForm";

export function LoginPage() {
  return (
    <div className="grid grid-cols-[40%_60%] min-h-screen">
      <img
        src="src/assets/image.png"
        className="object-cover w-full h-[100vh]"
      />
      <div className="max-h-md p-[100px]">
        <LoginForm />
      </div>
    </div>
  );
}
