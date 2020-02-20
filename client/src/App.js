import React, { useState, useEffect } from "react";
import Axios from "axios";
import sha256 from "crypto-js/sha256";

import "./App.css";

const URL =
  process.env.NODE_ENV === "production" ? "" : "http://localhost:3333";

function App() {
  const [name, setName] = useState("");
  const [id, setID] = useState("");
  const [hash, setHash] = useState("");
  const [answer, setAnswer] = useState("");
  const [difficulty, setDifficulty] = useState("0x000");
  const [activeClear, setActiveClear] = useState(false);

  useEffect(() => {
    const rawN = window.localStorage.getItem("name");
    const rawID = window.localStorage.getItem("id");

    if (rawN && rawID) {
      setName(rawN);
      setID(rawID);
    }

    (async () => {
      const req = await Axios.get(`${URL}/config`);
      setDifficulty(req.data.difficulty);

      await Axios.post(`${URL}/login`, {
        name: rawN,
        id: rawID
      });
    })();
  }, []);

  const submitName = async () => {
    const req = await Axios.post(`${URL}/login`, {
      name
    });
    window.localStorage.setItem("id", req.data.id);
    window.localStorage.setItem("name", name);
    setID(req.data.id);
  };

  const mine = () => {
    const date = new Date().toUTCString();
    const integrity = sha256(date + answer + name + id);
    let num = 0;

    const x = setInterval(async () => {
      const hashRaw = "0x" + sha256(num + integrity).toString();
      setHash(hashRaw);

      if (hashRaw.startsWith(difficulty)) {
        window.clearInterval(x);

        try {
          const req = await Axios.post(`${URL}/attempt`, {
            id,
            hash: hashRaw,
            answer
          });
          document.body.style = `background-color: lime`;
          alert("Congratulations!");
        } catch (e) {
          document.body.style = `background-color: red`;
          alert(e.response.data.response);
        }
        setActiveClear(true);
      }

      num += 1;
    }, 1);
  };

  const clear = () => {
    document.body.style = `background-color: white`;
    setActiveClear(false);
    setHash("")
  };

  if (id) {
    return (
      <div className="app">
        <div>
          Welcome, <h2>{name}</h2>
        </div>
        <div>
          Student ID: <h2>{id.substring(2)}</h2>
        </div>
        <div>
          Connected to server with difficulty: <b>{difficulty}</b>
        </div>

        <hr />

        <div className="top-margin">
          <input
            type="radio"
            id="A"
            name="answer"
            value="A"
            onClick={() => {
              setAnswer("A");
            }}
          />
          <label for="A">A</label>
        </div>

        <div className="top-margin">
          <input
            type="radio"
            id="B"
            name="answer"
            value="B"
            onClick={() => {
              setAnswer("B");
            }}
          />
          <label for="B">B</label>
        </div>

        <div className="top-margin">
          <input
            type="radio"
            id="C"
            name="answer"
            value="C"
            onClick={() => {
              setAnswer("C");
            }}
          />
          <label for="C">C</label>
        </div>

        <div className="top-margin">
          <input
            type="radio"
            id="D"
            name="answer"
            value="D"
            onClick={() => {
              setAnswer("D");
            }}
          />
          <label for="D">D</label>
        </div>

        <div className="top-margin">
          <button
            onClick={() => {
              mine();
            }}
          >
            Submit
          </button>
        </div>
        <hr />
        {hash ? (
          <div id="hash" className="top-margin">
            Proof of Work: <h3>{hash}</h3>
          </div>
        ) : null}
        {activeClear ? (
          <div className="top-margin">
            <button
              onClick={() => {
                clear();
              }}
            >
              Reset
            </button>
          </div>
        ) : null}
      </div>
    );
  }

  return (
    <div className="App">
      <div>
        <div>
          <input
            type="text"
            onChange={e => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="top-margin">
          <button
            onClick={() => {
              submitName();
            }}
          >
            Submit Name
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
