import { AuthForm } from "../AuthForm/AuthForm";

export function SignUpPage() {
  return (
    <div className="grid grid-cols-[40%_60%] min-h-screen">
      <img
        src="src/assets/image.png"
        className="object-cover w-full h-[100vh]"
      />
      <div className="px-[50px] max-h-md p-[30px]">
        <AuthForm />
      </div>
    </div>
  );
}
