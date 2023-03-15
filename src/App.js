import BasicConcepts from "./components/BasicConcepts";
import { CrudApi } from "./components/CrudApi";
import { SongSearch } from "./components/SongSearch";
import Modal from "./components/Modal";
import cursorImg from "./assets/cursor.png";
import { useModal } from "./hooks/useModal";

function App() {
  const [isOpen, openModal, closeModal] = useModal(false);

  return (
    <div>
      <button className="btnModal" onClick={openModal}>
        <h1>React Router</h1>
        <img className="cursorImg" src={cursorImg} alt="Cursor Click" />
      </button>
      <Modal isOpen={isOpen} closeModal={closeModal}>
        <div className="ExplinationModal">
          <h3>What is React Router?</h3>
          <p>
            React Router is a JavaScript framework that lets us handle client
            and server-side routing in React applications. It enables the
            creation of single-page web or mobile apps that allow navigating
            without refreshing the page. It also allows us to use browser
            history features while preserving the right application view.
          </p>
          <p>
            Here you're gonna see the basics concepts on use to show the
            understandment about this library.
          </p>
        </div>
      </Modal>
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
