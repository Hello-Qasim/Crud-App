import axios from "axios";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Create() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("https://641283c5f9fe8122ae2598d0.mockapi.io/crud", {
        yourName: name,
        yourAge: age,
        yourEmail: email,
      })
      .then(() => {
        navigate("/");
      });
  };

  return (
    <>
      <nav class="navbar bg-success text-center">
        <h2
          style={{
            paddingLeft: "550px",
            textDecoration: "underline",
            fontWeight: "bold",
            fontStyle: "italic",
          }}
        >
          CRUD APPLICATION
        </h2>
      </nav>

      <div className="row">
        <div className="col-md-8 ">
          <div style={{ paddingLeft: "400px", margin: "auto" }}>
            <div className=" text-center mt-3 mb-3">
              <Link to="/">
                <button className="btn btn-outline-success  ">
                  Check Your Data
                  <br />
                  <i class="bi bi-eye"></i>
                </button>
              </Link>
            </div>
            <div className="bg-success p-6 text-center rounded-pill ">
              <h1>Data Visualisation!</h1>
            </div>
            <form onSubmit={submitHandler}>
              <div className="form-group">
                <label>Enter Name:</label>
                <input
                  type="text"
                  placeholder="Name"
                  className="form-control"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Enter Age:</label>
                <input
                  type="number"
                  placeholder="Age"
                  className="form-control"
                  onChange={(e) => setAge(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Enter Email:</label>
                <input
                  type="text"
                  placeholder="Email"
                  className="form-control"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <br />
              <div className="d-grid">
                <button
                  style={{ borderRadius: "20px" }}
                  type="submit"
                  class="btn btn-success btn-rounded"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Create;
