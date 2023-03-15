import BasicConcepts from "./components/BasicConcepts";
import { CrudApi } from "./components/CrudApi";
import { SongSearch } from "./components/SongSearch";

function App() {
  return (
    <div>
      <h1>
        <a
          href="https://reactrouter.com/en/main"
          target="_blank"
          rel="noreferrer"
        >
          React Router Documentation
        </a>
      </h1>
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
