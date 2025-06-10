// frontend/src/pages/Dashboard.jsx
import { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");
      try {
        const res = await axios.get(
          "http://localhost:5000/api/auth/dashboard",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setMsg(res.data.msg);
      } catch {
        setMsg("Unauthorized");
      }
    };
    fetchData();
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Dashboard</h2>
      <p>{msg}</p>
    </div>
  );
};

export default Dashboard;
