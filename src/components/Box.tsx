import Toggle from "./Toggle/index";

export default function Box() {
  return (
    <Toggle
      onToggle={() => {
        console.log("toggled");
      }}
    >
      <Toggle.Button>
        <Toggle.display>
          {(on) => {
            const base =
              "h-[100px] w-[100px] border border-black cursor-pointer transition-colors duration-300 ease-in-out";
            return (
              <div
                className={`${base} ${on ? "bg-white" : "bg-blue-500"}`}
              ></div>
            );
          }}
        </Toggle.display>
      </Toggle.Button>
    </Toggle>
  );
}
