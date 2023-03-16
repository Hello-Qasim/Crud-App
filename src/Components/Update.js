import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function Update() {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setAge(localStorage.getItem("age"));
    setEmail(localStorage.getItem("email"));
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .put(`https://641283c5f9fe8122ae2598d0.mockapi.io/crud/${id}`, {
        yourName: name,
        yourAge: age,
        yourEmail: email,
      })
      .then(() => navigate("/"));
  };

  return (
    <>
      <div className="row">
        <div className="col-md-8 ">
          <div style={{ paddingLeft: "400px" }}>
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
              <h1>Update Data!</h1>
            </div>
            <form onSubmit={submitHandler}>
              <div className="form-group">
                <label>Enter Name:</label>
                <input
                  type="text"
                  placeholder="Name"
                  className="form-control"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Enter Age:</label>
                <input
                  type="number"
                  placeholder="Age"
                  className="form-control"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Enter Email:</label>
                <input
                  type="text"
                  placeholder="Email"
                  className="form-control"
                  value={email}
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
                  Update
                </button>{" "}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Update;
