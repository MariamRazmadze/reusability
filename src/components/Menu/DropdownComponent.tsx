import Menu from "./Menu";
import MenuButton from "./MenuButton";
import MenuDropdown from "./MenuDropdown";
import MenuItem from "./MenuItem";

export default function DropdownComponent() {
  const sports = ["Tennis", "Pickleball", "Racquetball", "Squash"];
  return (
    <Menu onOpen={() => console.log("Menu Toggled")}>
      <MenuButton>Sports</MenuButton>
      <MenuDropdown>
        {sports.map((sport) => (
          <MenuItem key={sport}>{sport}</MenuItem>
        ))}
      </MenuDropdown>
    </Menu>
  );
}
