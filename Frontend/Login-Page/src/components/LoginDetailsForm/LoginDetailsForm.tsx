import { InputElement } from "../InputElement/InputElement";
import { RegistrationActions } from "../RegistrationActions/RegistrationActions";

export function LoginDetailsForm() {
  return (
    <form className="flex flex-col gap-5 w-full">
      <InputElement
        inputType="text"
        label="Email"
        placeholder="Enter your Email"
      />
      <InputElement
        inputType="password"
        label="Password"
        placeholder="Enter your password"
      />
      <RegistrationActions
        registerButtonLabel="Login"
        accountPrompt="Don't have an account? "
        loginText="Signup"
      />
    </form>
  );
}
