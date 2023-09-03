import Chat from "./template/Chat";
import Gallery from "./template/Gallery";
import Megamenu from "./template/Megamenu";
import Products from "./template/Products";
import HomanTable from "./template/Table";
import "./App.css";
import Zindex from "./template/Zindex";

function App() {
  return (
    <div className="App">
      <Megamenu />
      <br />

      {/* <Zindex /> */}
      <Gallery />

      <br />
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        <Products />
        <Products />
        <Products />
        <Products />
        <Products />
        <Products />
        <HomanTable />
      </div>
      <Chat />
    </div>
  );
}

export default App;
