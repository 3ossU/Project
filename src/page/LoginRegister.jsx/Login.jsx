import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import bgImage from "../../componants/img/loginimg/loginregister.jpg";
import logo from "../../componants/img/levalogo.svg"; // เปลี่ยนเป็นไฟล์โลโก้จริงของคุณ

import users from "../../data/loginData"


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      setError("");
      console.log("Login Success:", user);

      if (user.role === "buyer") navigate("/buyer/home");
      else if (user.role === "seller") navigate("/seller/homeseller");
      else if (user.role === "admin") navigate("/admin/stat");
    } else {
      setError("อีเมลหรือรหัสผ่านไม่ถูกต้อง");
    }
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div style={{ position: "absolute", top: "-30px", left: "30px" }}>
        <img
          src={logo}
          alt="company logo"
          style={{ height: "220px", objectFit: "contain" }}
        />
      </div>

      <div
        style={{
          width: "420px",
          background: "rgba(255,255,255,0.75)",
          backdropFilter: "blur(6px)",
          borderRadius: "20px",
          padding: "40px",
          boxShadow: "0px 8px 20px rgba(0,0,0,0.2)",
        }}
      >
        <h2 style={{ textAlign: "left", fontWeight: "bold", marginBottom: "25px" }}>
          เข้าสู่ระบบ
        </h2>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Your email"
            style={inputStyle}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            style={{ ...inputStyle, marginTop: "15px" }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {error && (
            <p style={{ color: "red", marginTop: "10px", fontSize: "14px" }}>
              {error}
            </p>
          )}

          <div
            style={{
              marginTop: "10px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: "14px",
            }}
          >
            <label style={{ display: "flex", alignItems: "center" }}>
              <input type="checkbox" style={{ marginRight: "6px" }} />
              จดจำฉัน
            </label>

            <a href="#" style={{ color: "#444" }}>
              ลืมรหัสผ่าน?
            </a>
          </div>

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "13px",
              backgroundColor: "#e0a600",
              border: "none",
              borderRadius: "10px",
              color: "black",
              fontSize: "18px",
              fontWeight: "bold",
              marginTop: "25px",
              cursor: "pointer",
            }}
          >
            Log in
          </button>
        </form>

        <p style={{ textAlign: "center", marginTop: "15px", fontSize: "15px" }}>
          <Link to="/register">ยังไม่มีบัญชี?</Link>
        </p>
      </div>
    </div>
  );
};

const inputStyle = {
  width: "100%",
  padding: "12px 15px",
  borderRadius: "10px",
  border: "1px solid black",
  fontSize: "16px",
  outline: "none",
  backgroundColor: "rgba(255,255,255,0.9)",
};

export default Login;