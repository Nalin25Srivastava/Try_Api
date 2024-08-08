import React, { useContext } from "react";
import { AppContext } from "./Context";
import StoriesCss from "./Stories.module.css";

const Stories = () => {
  const { state } = useContext(AppContext);

  return (
    <div>
      {state.data.map((item) => (
        <div className={StoriesCss.main} key={item.id}>
          <div className={StoriesCss.items}>
            <h3>{item.id}</h3>
            <h2>{item.title}</h2>
            <p>{item.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Stories;
