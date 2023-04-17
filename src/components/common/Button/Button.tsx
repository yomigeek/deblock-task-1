import { ButtonProps } from "./button.types";
const Button = ({ text }: ButtonProps) => {
  return (
    <button
      onClick={() => {}}
      className="bg-yellow-500 py-3 px-7 rounded cursor-pointer hover:bg-yellow-700"
    >
      {text}
    </button>
  );
};

export default Button;
