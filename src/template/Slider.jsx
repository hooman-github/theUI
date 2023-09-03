import React from "react";
import img from "./../img/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png";
import img2 from "./../img/download.jpg";

const Slider = () => {
  return (
    <div>
      <div
        id="carouselExample"
        class="carousel slide"
        style={{ height: "500px !important" }}
      >
        <div class="carousel-inner" style={{ height: "500px !important" }}>
          <div class="carousel-item active">
            <img
              src={img}
              class="d-block w-100"
              style={{ height: "500px !important" }}
              alt="..."
            />
          </div>
          <div class="carousel-item" style={{ height: "500px" }}>
            <img src={img2} class="d-block w-100" alt="..." />
          </div>
          {/* <div class="carousel-item">
      <img src={img} class="d-block w-100" alt="..."/>
    </div> */}
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Slider;
