import ToggleComponent from "./Toggle";
import ToggleButton from "./ToggleButton";
import ToggleOn from "./ToggleOn";
import ToggleOff from "./ToggleOff";
import ToggleDisplay from "./ToggleDisplay";

const Toggle = Object.assign(ToggleComponent, {
  Button: ToggleButton,
  On: ToggleOn,
  Off: ToggleOff,
  display: ToggleDisplay,
});

export default Toggle;
