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
import cursorImg from "../assets/cursorImg.png";
import mouse from "../assets/mouse.svg";

const BasicConcepts = () => {
  const [isOpen, openModal, closeModal] = useModal(false);

  return (
    <div>
      <button className="btnModal" onClick={openModal}>
        <h2>Basic Concepts</h2>
        <img className="cursorImg" src={cursorImg} alt="Cursor Click" />
      </button>
      <Modal isOpen={isOpen} closeModal={closeModal}>
        <img className="mouseSvg" src={mouse} alt="ScrollMouse" />
        <div className="ExplinationModal-Two-Rows">
          <h3 style={{ textAlign: "center" }}>
            What will you see in this section?
          </h3>
          <p>Item by item:</p>
          <ol>
            <li>
              How the Nav would be with simple a tags (not a SPA since you need
              to reload the page to show another one or another component).
            </li>
            <li>
              A Nav with a Link element, witch lets the user navigate to another
              part of the SPA by clicking or tapping on it. Works similar as the
              Link element in React Native.
            </li>
            <li>
              The NavLink tag, this tag is special because it knows whether or
              not it is "active" or "pending". As it is, you can see how the
              NavLink "glows" when you are in each part of the SPA respectively.
            </li>
            <li>
              useParams hook returns an object of key/value pairs of the dynamic
              params from the current URL that were matched by the Route path.
              We past a key in the path property of our Route, called
              ":username", witch is going to get inherit by his child "User".
              Try it! Pick a user name!
            </li>
            <li>
              Using useLocation hook to returns the current location object.
              This can be useful if you'd like to perform some side effect
              whenever the current location changes. Use my dummy pagination
              component and check the URL.
            </li>
            <li>
              With the use of the Redirect component you can quickly navigate to
              a new location. The new location will override the current
              location in the history stack. The links are in spanish but they
              will send you to their english respective paths.
            </li>
            <li>
              Here useRouteMatch hook attempts to match the current URL in the
              same way that a Route would. It's mostly useful for getting access
              to the match data without actually rendering a Route.
            </li>
            <li>
              The react private route component renders child components
              (children) if the user is logged in. If not logged in, the user is
              redirected to the /login page with the return url passed in the
              location state property. This dummy example is made so you are not
              loged in, if you press the Dashboard Link the page will redirect
              you to the Home.
            </li>
          </ol>
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

//BASIC USAGE POSSIBLE
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
//                 <p>Potato Chiiiiiiiips :D</p>
//               </>
//             }
//           />
//         </Switch>
//       </Router>
//     </div>
//   );
// };

// export default BasicConcepts;
