import { InputElement } from "../InputElement/InputElement";

export function HomePage() {
  return (
    <div className="bg-custom-dark-green p-5 min-h-screen">
      <div className="bg-white p-10 min-h-screen">
        <InputElement inputType="text" label="" placeholder="Search" />
      </div>
    </div>
  );
}
