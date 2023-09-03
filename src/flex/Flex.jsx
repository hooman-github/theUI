import React from "react";
import "./flex.css";

const Flex = () => {
  return (
    <div className="body">
      <div className="ROW1">
        <div className="div11"> bbbb </div>
        <div className="div1"> aaaa </div>
        <div className="div1"> aaaa </div>
        <div className="div11"> bbbb </div>
      </div>

      <div className="ROW2">
        <div className="div1"> 111 </div>
        <div className="div2">
          <div className="div21"> 21</div>
          <div className="div22"> 22</div>
        </div>
        <div className="div3"> 333 </div>
      </div>
    </div>
  );
};

export default Flex;
