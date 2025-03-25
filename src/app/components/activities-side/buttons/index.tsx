
import "./index.css"

export interface ButtonsInterface {
  text: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  color?: string;
  width?: string;
}

export default function Buttons({ text, onClick, color = "#6a0dad", width = "150px" }: ButtonsInterface) {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color, width: width }}
      className="button"
    >
      {text}
    </button>
  );
}