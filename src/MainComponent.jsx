import React, { useEffect, useContext } from "react";
import Stories from "./Stories";
import { AppContext } from "./Context";

const MainComponent = () => {
  const { state, dispatch } = useContext(AppContext);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const data = await response.json();
        dispatch({ type: "FETCH_SUCCESS", payload: data });
      } catch (error) {
        dispatch({ type: "FETCH_ERROR", payload: error.message });
      }
    };
    fetchData();
  }, [dispatch]);

  return (
    <div>
      <div>
        {state.loading ? <p>Loading...</p> : <Stories />}
        {state.error && <p>{state.error}</p>}
      </div>
    </div>
  );
};

export default MainComponent;
