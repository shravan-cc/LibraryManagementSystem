import { UserDetailsForm } from "../UserDetailsForm/UserDetailsForm";
import { GoogleAuthButton } from "../GoogleAuthButton/GoogleAuthButton";

export function AuthForm() {
  return (
    <div className="flex flex-col gap-5 max-h-screen w-full">
      <h1 className="font-semibold text-[#043133] text-5xl">Welcome</h1>
      <UserDetailsForm />
      <GoogleAuthButton
        buttonLabel="Sign up with Google"
        inputUrl="src/assets/Google.png"
      />
    </div>
  );
}
