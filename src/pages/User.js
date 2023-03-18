import { useParams } from "react-router-dom";

const User = () => {
  let { username } = useParams();

  return (
    <div className="page-containter">
      <h3>User Page!</h3>
      <p>
        User Name: <b>{username}</b>
      </p>
    </div>
  );
};

export default User;
