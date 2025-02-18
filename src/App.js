import { Nav } from "./components/navbar/Appbar.js";
import { Container } from "@mui/material";
import { TaskManager } from "./components/TaskManager/TaskManager.js";

function App() {
  return (
    <>
      <Nav />
      <Container maxWidth="lg">
        <TaskManager />
      </Container>
    </>
  );
}

export default App;
