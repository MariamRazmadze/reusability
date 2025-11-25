import { BsStar, BsStarFill } from "react-icons/bs";
import Toggle from "./Toggle/index";

export default function Star() {
  return (
    <Toggle>
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
