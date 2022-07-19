import React, { useState } from "react";
// import styles from "./Wobot.molule.css";

const Wobot2 = ({ size }) => {
  const [clickId, setClickId] = useState();
  const handleClick = (id) => {
    setClickId(id);
  };

  return (
    <div className="num">
      {size.map((v, i) => {
        return (
          <div key={i} onClick={() => handleClick(i)}>
            <div className={[i === clickId ? "sizeActive" : "size"]}>
              {v.value}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Wobot2;
