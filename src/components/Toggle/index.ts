import ToggleComponent from "./Toggle";
import ToggleButton from "./ToggleButton";
import ToggleOn from "./ToggleOn";
import ToggleOff from "./ToggleOff";

const Toggle = Object.assign(ToggleComponent, {
  Button: ToggleButton,
  On: ToggleOn,
  Off: ToggleOff,
});

export default Toggle;
