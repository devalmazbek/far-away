import Logo from "./components/logo/Logo";
import Form from "./components/form/Form";
import Packinglist from "./components/packing-list/PackingList";
import Stats from "./components/stats/Stats";

function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <Packinglist />
      <Stats />
    </div>
  );
}

export default App;
