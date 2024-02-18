import SwitchPlayground from "./components/SwitchPlayground";
import { styled } from "../styled-system/jsx";

function App() {
  return (
    <styled.main
      maxWidth="1440px"
      margin="0 auto"
      textAlign="center"
      minHeight="100vh"
      display="grid"
      alignItems="center"
    >
      <SwitchPlayground />
    </styled.main>
  );
}

export default App;
