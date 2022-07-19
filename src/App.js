import "./App.css";
import Wobot from "./Wobot";

let size = [
  { id: 1, value: "1-20" },
  { id: 2, value: "21-50" },
  { id: 3, value: "51-200" },
  { id: 4, value: "201-500" },
  { id: 5, value: "500+" },
];

function App() {
  return (
    <>
      <Wobot size={size} />
    </>
  );
}

export default App;
