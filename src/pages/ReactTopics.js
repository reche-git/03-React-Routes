import {
  Link,
  Route,
  Switch,
  useParams,
  useRouteMatch,
} from "react-router-dom";

const Topic = () => {
  let { topic } = useParams();
  return (
    <div>
      <h4>{topic.toUpperCase()}</h4>
      <p>You are seeing this page thanks to a nested route</p>
    </div>
  );
};

const ReactTopics = () => {
    // let match = useRouteMatch();
    // console.log(match);
  //"path" nos permite construir rutas relativas <Route>
  //"path" helps construct relative routes in <Route>
  //"url" nos permite construir enlaces relativos <Link> or <NavLink>
  //"url" helps construct relative routes in <Link> or <NavLink>

  let { path, url } = useRouteMatch();
  return (
    <div>
      <h3>React Topics</h3>
      <ul>
        <li>
          <Link to={`${url}/jsx`}>JSX</Link>
        </li>
        <li>
          <Link to={`${url}/props`}>Props</Link>
        </li>
        <li>
          <Link to={`${url}/state`}>State</Link>
        </li>
        <li>
          <Link to={`${url}/components`}>Components</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path={path}>
          <h4>Choose a React Topic:</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Consequatur facilis eos dolorem ratione cupiditate rerum quasi quia
            non maxime, nostrum quas cumque enim minus voluptatum obcaecati quod
            explicabo nulla tenetur?
          </p>
        </Route>
        {/* The component is at the top to facilitate the lesson */}
        <Route path={`${path}/:topic`} component={Topic} />
      </Switch>
    </div>
  );
};

export default ReactTopics;
