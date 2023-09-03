import React from "react";

const Zindex = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "red",
          marginTop: "100px",
          width: "300px",
          height: "100px",
          position: "relative",
          top: "10px",
          left: "80px",
          zIndex: "2",
        }}
      ></div>

      <div
        style={{
          backgroundColor: "yellow",
          width: "300px",
          height: "100px",
          position: "relative",
          top: "-60px",
          left: "35px",
          zIndex: 1,
        }}
      ></div>

      <div
        style={{
          backgroundColor: "green",
          width: "300px",
          height: "100px",
          position: "relative",
          top: "-220px",
          left: "120px",
          zIndex: 3,
        }}
      ></div>
    </>
  );
};

export default Zindex;
