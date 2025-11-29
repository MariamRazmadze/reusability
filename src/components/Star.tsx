import { BsStar, BsStarFill } from "react-icons/bs";
import useToggle from "../hooks/useToggle";

export default function Star() {
  const [on, toggle] = useToggle();
  return (
    <>{on ? <BsStarFill onClick={toggle} /> : <BsStar onClick={toggle} />}</>
  );
}
