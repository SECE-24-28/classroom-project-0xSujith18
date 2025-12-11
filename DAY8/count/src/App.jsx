import './App.css'
import One from "./One";
import Two from "./Two";
import Three from "./Three";
import { DataProvider } from "./DataContext";

function App() {
  return (
    <DataProvider>
      <Two />
      <One />
      <Three />
    </DataProvider>
  );
}
export default App
