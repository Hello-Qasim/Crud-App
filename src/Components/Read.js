import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Read() {
  const [gettingData, setgettingData] = useState([]);
  const getData = () => {
    axios
      .get("https://641283c5f9fe8122ae2598d0.mockapi.io/crud")
      .then((response) => setgettingData(response.data));
  };

  const deleteHandler = (id) => {
    axios
      .delete(`https://641283c5f9fe8122ae2598d0.mockapi.io/crud/${id}`)
      .then(() => {
        getData();
      });
  };

  const storageHandler = (id, name, age, email) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("age", age);
    localStorage.setItem("email", email);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="row">
        <div className="col-md12">
          <div className=" text-center mt-3 mb-3">
            <Link to="/create">
              <button className="btn btn-outline-success">
                Create Your Data!
              </button>
            </Link>
          </div>
          <table class="table table-bordered table-dark table-hover">
            <thead>
              <tr className=" table-success">
                <th scope="col">ID</th>
                <th scope="col">NAME</th>
                <th scope="col">AGE</th>
                <th scope="col">EMAIL</th>
                <th scope="col">EDIT</th>
                <th scope="col">DELETE</th>
              </tr>
            </thead>
            <tbody>
              {gettingData.map((item) => {
                return (
                  <>
                    <tr>
                      <tD scope="col">{item.id}</tD>
                      <tD scope="col">{item.yourName}</tD>
                      <tD scope="col">{item.yourAge}</tD>
                      <tD scope="col">{item.yourEmail}</tD>
                      <tD scope="col">
                        <Link to="/update">
                          <button
                            className="btn btn-success"
                            onClick={() =>
                              storageHandler(
                                item.id,
                                item.yourName,
                                item.yourAge,
                                item.yourEmail
                              )
                            }
                          >
                            Edit
                          </button>
                        </Link>
                      </tD>
                      <tD scope="col">
                        <button
                          className="btn btn-danger"
                          onClick={() => {
                            if (window.confirm("Are you sure???")) {
                              deleteHandler(item.id);
                            }
                          }}
                        >
                          Delete
                        </button>
                      </tD>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Read;
