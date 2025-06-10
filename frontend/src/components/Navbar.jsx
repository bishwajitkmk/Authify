// frontend/src/components/Navbar.jsx
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const isAuth = !!localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    navigate("/login");
  };

  return (
    <nav style={{ padding: "1rem", background: "#eee" }}>
      {isAuth ? (
        <>
          <Link to="/dashboard">Dashboard</Link>
          <button onClick={handleLogout} style={{ marginLeft: "1rem" }}>
            Logout
          </button>
        </>
      ) : (
        <>
          <Link to="/register">Register</Link>
          <Link to="/login" style={{ marginLeft: "1rem" }}>
            Login
          </Link>
        </>
      )}
    </nav>
  );
};

export default Navbar;
