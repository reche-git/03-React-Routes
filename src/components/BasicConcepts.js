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
          <h3>What is React Router?</h3>
          
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
