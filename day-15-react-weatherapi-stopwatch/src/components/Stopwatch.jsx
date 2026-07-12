import React, { useEffect, useState } from "react";

const Stopwatch = () => {

  const [time, setTime] = useState(0);
  const [flag, setFlag] = useState(false);

  useEffect(() => {

    let timer;

    if (flag) {
      timer = setInterval(() => {
        setTime(time + 1);
      }, 1000);
    };

    return () => clearInterval(timer);

  }, [flag, time]);

  return (
    <>
      <div className="container mt-5">
        <div className="alert alert-info text-center">

          <h1>Stopwatch</h1>

          <h2>
            {String(Math.floor(time / 3600)).padStart(2, "0")} :
            {String(Math.floor((time % 3600) / 60)).padStart(2, "0")} :
            {String(time % 60).padStart(2, "0")}
          </h2>

          <button
            className="btn btn-success m-2"
            onClick={() => setFlag(true)}
          >
            Start
          </button>

          <button
            className="btn btn-danger m-2"
            onClick={() => setFlag(false)}
          >
            Stop
          </button>

          <button
            className="btn btn-warning m-2"
            onClick={() => {
              setFlag(false);
              setTime(0);
            }}
          >
            Reset
          </button>

        </div>
      </div>
    </>
  );
};

export default Stopwatch;