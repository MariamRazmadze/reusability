import Avatar from "./components/Avatar";

function App() {
  return (
    <main>
      <Avatar />
      <Avatar src="/darlene.jpg" alt="avatar" />
      <Avatar colorClass="pink">AB</Avatar>
      <Avatar colorClass="blue">CD</Avatar>
      <Avatar colorClass="green">EF</Avatar>
    </main>
  );
}
export default App;
