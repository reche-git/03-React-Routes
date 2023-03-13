import BasicConcepts from "./components/BasicConcepts";
import { CrudApi } from "./components/CrudApi";
import { SongSearch } from "./components/SongSearch";

function App() {
  return (
    <div>
      <h1>React Router</h1>
      <a
        href="https://reactrouter.com/en/main"
        target="_blank"
        rel="noreferrer"
      >
        Documentation
      </a>
      <hr />
      <BasicConcepts />
      <hr />
      <SongSearch />
      <hr />
      <CrudApi />
    </div>
  );
}

export default App;
