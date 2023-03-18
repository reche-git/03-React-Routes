import logo from "../assets/favicon.ico";

const Login = () => {
  return (
    <div className="page-containter">
      <h3>Login</h3>
      <form style={{ display: "flex" }}>
        <input
          type="text"
          style={{
            width: "100px",
            height: "20px",
            margin: "10px",
            marginRight: "5px",
          }}
        />
        <input
          type="text"
          style={{
            width: "100px",
            height: "20px",
            margin: "10px",
            marginRight: "5px",
          }}
        />
        <button
          style={{
            height: "20px",
            marginTop: "13px",
            background: "transparent",
          }}
        >
          <img src={logo} alt="" />
        </button>
      </form>
    </div>
  );
};

export default Login;
