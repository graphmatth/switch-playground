import SwitchPlayground from "./components/SwitchPlayground";

function App() {
  return (
    <div className="App">
      <div
        style={{
          maxWidth: 1440,
          margin: "0 auto",
          textAlign: "center",
          minHeight: "100vh",
          display: "grid",
          alignItems: "center",
        }}
      >
        <SwitchPlayground />
      </div>
    </div>
  );
}

export default App;
