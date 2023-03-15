import {
  BrowserRouter as Router,
  HashRouter,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { useModal } from "../hooks/useModal";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Dashboard from "../pages/Dashboard";
import Error404 from "../pages/Error404";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Products from "../pages/Products";
import ReactTopics from "../pages/ReactTopics";
import User from "../pages/User";
import MenuConcepts from "./MenuConcepts";
import Modal from "./Modal";
import PrivateRoute from "./PrivateRoute";
import cursorImg from "../assets/cursor.png";

const BasicConcepts = () => {
  const [isOpen, openModal, closeModal] = useModal(false);

  return (
    <div>
      <button className="btnModal" onClick={openModal}>
        <h2>Basic Concepts</h2>
        <img className="cursorImg" src={cursorImg} alt="Cursor Click" />
      </button>
      <Modal isOpen={isOpen} closeModal={closeModal}>
        <div className="ExplinationModal">
          <h3>About CRUD App</h3>
          <p>This is a project that applies the 4 operations in a CRUD:</p>
          <p style={{ textAlign: "center" }}>
            <b>Create - Read - Update - Delete</b>
          </p>
          <p>
            The data is not stored and is going to be reseted to an initial
            state after a page reload, so feel free to add whatever you want.
          </p>
          <hr />
          <p>
            This project has a total of three components, all with "CRUD" as a
            prefix to make it ease for others to undertand the source code.
          </p>
          <ul>
            <li>
              CrudApp: This component holds 3 arrow functions that holds the
              CRUD logic with 3 states to control the data, the edition of data
              and the Modal.
            </li>
            <li>
              CrudForm: A form from witch you are able to add the name and type
              of the pokemon. You can find here the logic to send the
              information to the parent component and the reset of the entire
              form.
            </li>
            <li>
              CrudTable: It's a simple table made to display the data and two
              buttons that will edit or delete the row.
            </li>
          </ul>
        </div>
      </Modal>
      <Router>
        <MenuConcepts />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/user/:username" component={User} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/acerca">
            <Redirect to="/about" />
          </Route>
          <Route exact path="/contacto">
            <Redirect to="/contact" />
          </Route>
          <Route path="/react" component={ReactTopics} />
          <Route exact path="/login" component={Login} />
          {/* <Route exact path="/dashboard" component={Dashboard} /> */}
          <PrivateRoute exact path="/dashboard" component={Dashboard} />

          <Route path="*" component={Error404} />
        </Switch>
      </Router>
      <br />
      <hr />
      <h2>Hash Router</h2>
      <HashRouter>
        <MenuConcepts />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/user/:username" component={User} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/acerca">
            <Redirect to="/about" />
          </Route>
          <Route exact path="/contacto">
            <Redirect to="/contact" />
          </Route>
          <Route path="/react" component={ReactTopics} />
          <Route exact path="/login" component={Login} />
          {/* <Route exact path="/dashboard" component={Dashboard} /> */}
          <PrivateRoute exact path="/dashboard" component={Dashboard} />

          <Route path="*" component={Error404} />
        </Switch>
      </HashRouter>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default BasicConcepts;

// const BasicConcepts = () => {
//   return (
//     <div>
//       <h2>Basic Concepts</h2>
//       <Router>
//         <Switch>
//           <Route exact path="/">
//             <h3>Home</h3>
//             <p>Wellcome to the React Router Lesson!</p>
//           </Route>
//           <Route exact path="/about">
//             <About />
//             <p>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit.
//               Consequatur ut dolorem nostrum doloremque officiis, odit
//               voluptatibus vitae commodi consectetur facere sint repellendus,
//               magni debitis rerum asperiores? Quas sit asperiores odit?
//             </p>
//           </Route>
//           {/* <Route exact path="/contact" component={Contact}/> */}
//           <Route
//             exact
//             path="/contact"
//             children={
//               <>
//                 <Contact />
//                 <p>Papas Friiitaaaaas :D</p>
//               </>
//             }
//           />
//         </Switch>
//       </Router>
//     </div>
//   );
// };

// export default BasicConcepts;
