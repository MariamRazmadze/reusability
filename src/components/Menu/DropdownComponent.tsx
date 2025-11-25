import Menu from "./Menu";
import MenuButton from "./MenuButton";
import MenuDropdown from "./MenuDropdown";
import MenuItem from "./MenuItem";
import Toggle from "../Toggle/index";

export default function DropdownComponent() {
  const sports = ["Tennis", "Pickleball", "Racquetball", "Squash"];
  return (
    <Toggle>
      <Menu>
        <Toggle.Button>
          <MenuButton>Sports</MenuButton>
        </Toggle.Button>
        <Toggle.On>
          <MenuDropdown>
            {sports.map((sport) => (
              <MenuItem key={sport}>{sport}</MenuItem>
            ))}
          </MenuDropdown>
        </Toggle.On>
      </Menu>
    </Toggle>
  );
}
