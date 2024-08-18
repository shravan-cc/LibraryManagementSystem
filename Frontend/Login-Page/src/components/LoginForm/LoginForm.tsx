import { GoogleAuthButton } from "../GoogleAuthButton/GoogleAuthButton";
import { LoginDetailsForm } from "../LoginDetailsForm/LoginDetailsForm";

export function LoginForm() {
  return (
    <div className="flex flex-col gap-5 max-h-screen w-full">
      <h1 className="font-semibold text-[#043133] text-5xl">Welcome</h1>
      <LoginDetailsForm />
      <GoogleAuthButton
        buttonLabel="Login with Google"
        inputUrl="src/assets/Google.png"
      />
    </div>
  );
}
