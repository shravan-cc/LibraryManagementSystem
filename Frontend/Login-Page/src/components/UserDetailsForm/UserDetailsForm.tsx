import { InputElement } from "../InputElement/InputElement";
import { RegistrationActions } from "../RegistrationActions/RegistrationActions";

export function UserDetailsForm() {
  return (
    <form className="flex flex-col gap-5 w-full">
      <div className="grid grid-cols-2 gap-5 w-full">
        <InputElement
          inputType="text"
          label="First Name"
          placeholder="Enter your First Name"
        />
        <InputElement
          inputType="text"
          label="Last Name"
          placeholder="Enter your Last Name"
        />
        <InputElement
          inputType="text"
          label="Phone Number"
          placeholder="Enter your Phone number"
        />
        <InputElement
          inputType="text"
          label="Address"
          placeholder="Enter your Address"
        />
        <InputElement
          inputType="text"
          label="Email"
          placeholder="Enter your email"
        />
        <InputElement
          inputType="text"
          label="Role"
          placeholder="Enter your role"
        />
        <InputElement
          inputType="password"
          label="Password"
          placeholder="Enter your password"
        />
        <InputElement
          inputType="password"
          label="Confirm Password"
          placeholder="Confirm Password"
        />
      </div>
      <RegistrationActions
        registerButtonLabel="Signup"
        accountPrompt="Already have an Account?"
        loginText="Log In"
      />
    </form>
  );
}
