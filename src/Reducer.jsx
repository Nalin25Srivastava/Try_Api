const Reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return { ...state, data: action.payload, loading: false };
    case "FETCH_ERROR":
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};
export default Reducer;
