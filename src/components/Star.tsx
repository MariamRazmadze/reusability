import { BsStar, BsStarFill } from "react-icons/bs";
import Toggle from "./Toggle/index";

type StarProps = {
  onChange?: () => void;
};

export default function Star({ onChange }: StarProps) {
  return (
    <Toggle onToggle={onChange}>
      <Toggle.Button>
        <Toggle.On>
          <BsStarFill />
        </Toggle.On>
        <Toggle.Off>
          <BsStar />
        </Toggle.Off>
      </Toggle.Button>
    </Toggle>
  );
}
